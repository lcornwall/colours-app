'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const response = await fetch('/api/auth/checkSession');
            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                router.push('/login');
            }
            setLoading(false);
        };

        checkSession();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return null;
    }

    const handleLogout = async () => {
        await fetch('/api/auth/logout', {
            method: 'POST',
        });
        router.push('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">Welcome to the Dashboard</h1>

            <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
            >
                Log Out
            </button>
        </div>
    );
}
