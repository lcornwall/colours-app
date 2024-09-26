"use client";

import { useState } from 'react';

export default function SignupPage() {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone_number: phoneNumber, password }),
        });

        const data = await response.json();
        if (response.ok) {
            setSuccess('Signup successful! Please log in.');
        } else {
            setError(data.error || 'Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">Sign Up</h1>
            <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-80">
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                >
                    Sign Up
                </button>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {success && <p className="mt-4 text-green-500">{success}</p>}
        </div>
    );
}
