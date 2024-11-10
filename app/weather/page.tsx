'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [latitude, setLatitude] = useState<string | null>(null);
    const [longitude, setLongitude] = useState<string | null>(null);
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
            (err) => {
                setError('Unable to retrieve your location.');
            }
        );
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            fetchWeather(latitude, longitude);
        }
    }, [latitude, longitude]);

    const formatTime = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return date.toLocaleTimeString([], options);
    };

    useEffect(() => {
        setCurrentTime(formatTime());

        const intervalId = setInterval(() => {
            setCurrentTime(formatTime());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Weather Information</h1>
            {weatherData ? (
                <div>
                    <p>Current Time: {currentTime}</p>
                    <p>
                        Temperature: {weatherData.current_temperature}°C
                    </p>
                </div>
            ) : (
                <p>No weather data available</p>
            )}
        </div>
    );
};

export default HomePage;
