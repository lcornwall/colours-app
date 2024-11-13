'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherWidgetProps {
    updateInterval?: number; // Optional prop for interval, defaulting to 60000 ms
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ updateInterval = 60000 }) => {
    const [latitude, setLatitude] = useState<string | null>(null);
    const [longitude, setLongitude] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentTime, setCurrentTime] = useState<string>('');

    // Fetch weather data
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

    // Fetch city data via API route
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

    // Get user location
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

    // Update time every interval
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
            fetchCity(latitude, longitude); // Fetch city name via API route
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
        <div>
            <p>Current Time: {currentTime}</p>
            {city && <p>Location: {city}</p>}
            {weatherData ? (
                <p>Temperature: {weatherData.current_temperature}°C</p>
            ) : (
                <p>No weather data available</p>
            )}
        </div>
    );
};

export default WeatherWidget;