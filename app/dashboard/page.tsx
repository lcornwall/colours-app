"use client";
import { useEffect, useState } from 'react';
import DashboardClient from './DashboardClient';

export default function DashboardPage() {
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Current Cookies:", document.cookie);

        const getUsernameFromCookies = () => {
            const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                const [key, value] = cookie.split('=');
                acc[key] = value;
                return acc;
            }, {} as Record<string, string>);

            console.log("Parsed Cookies:", cookies);
            return cookies.username || null;
        };

        const fetchedUsername = getUsernameFromCookies();
        setUsername(fetchedUsername);
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <DashboardClient username={username} />;
}
