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
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>

            <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
                Log Out
            </button>
        </div>
    );
}
