'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherWidgetProps {
    updateInterval?: number;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ updateInterval = 60000 }) => {
    const [latitude, setLatitude] = useState<string | null>(null);
    const [longitude, setLongitude] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentTime, setCurrentTime] = useState<string>('');

    const fetchWeather = async (lat: string, lon: string) => {
        setLoading(true);
        setError('');

        try {
            const response = await axios.get('/api/weather', {
                params: { latitude: lat, longitude: lon },
            });
            setWeatherData(response.data);
        } catch (err) {
            setError('Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    const fetchCity = async (lat: string, lon: string) => {
        try {
            const response = await axios.get('/api/location', {
                params: { latitude: lat, longitude: lon },
            });
            setCity(response.data.city);
        } catch (err) {
            setError('Failed to fetch location data');
        }
    };

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude.toString());
                setLongitude(longitude.toString());
            },
            () => {
                setError('Unable to retrieve your location.');
            }
        );
    };

    const formatTime = () => {
        const date = new Date();
        return date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            fetchWeather(latitude, longitude);
            fetchCity(latitude, longitude);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        setCurrentTime(formatTime());

        const intervalId = setInterval(() => {
            setCurrentTime(formatTime());
        }, updateInterval);

        return () => clearInterval(intervalId);
    }, [updateInterval]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-6 rounded-lg shadow-md max-w-xs mx-auto">
            <div className="text-center text-white">
                <p className="text-lg font-medium">Current Time: <span className="text-yellow-200">{currentTime}</span></p>
                {city && (
                    <p className="mt-2 text-lg">Location: <span className="text-yellow-200">{city}</span></p>
                )}
                {weatherData ? (
                    <p className="mt-2 text-lg">Temperature: <span className="text-yellow-200">{weatherData.current_temperature}°C</span></p>
                ) : (
                    <p className="mt-2 text-lg text-gray-200">No weather data available</p>
                )}
            </div>
        </div>
    );
}

export default WeatherWidget;