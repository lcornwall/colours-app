"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState({ type: '', content: '' });
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getUsernameFromCookies = () => {
            const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                const [key, value] = cookie.split('=');
                acc[key] = value;
                return acc;
            }, {} as Record<string, string>);

            return cookies.username || null;
        };

        const fetchedUsername = getUsernameFromCookies();

        if (!fetchedUsername) {
            router.push('/');
        } else {
            setLoading(false);
        }
    }, [router]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage({ type: '', content: '' });

        if (!currentPassword || !newPassword) {
            setMessage({ type: 'error', content: 'Please fill in both fields.' });
            return;
        }

        try {
            const res = await fetch('/api/auth/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage({ type: 'error', content: data.error || 'Failed to change password.' });
                return;
            }

            setMessage({ type: 'success', content: 'Password changed successfully.' });
            setCurrentPassword('');
            setNewPassword('');
        } catch (error) {
            setMessage({ type: 'error', content: 'Something went wrong. Please try again.' });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Change Password
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all"
                >
                    Change Password
                </button>

                {message.content && (
                    <p className={`mt-4 text-center ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                        {message.content}
                    </p>
                )}
            </form>

            <button
                onClick={() => router.push('/dashboard')}
                className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 w-48 mt-4"
            >
                Go to Games
            </button>
        </div>
    );
}
