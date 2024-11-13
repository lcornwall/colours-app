"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WeatherWidget from "../weather/page";

interface DashboardClientProps {
    username: string | null;
}

const DashboardClient: React.FC<DashboardClientProps> = ({ username }) => {
    const router = useRouter();
    const [ageMessage, setAgeMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAge = async () => {
            if (username) {
                try {
                    const response = await fetch('/api/auth/detectAge');
                    if (!response.ok) {
                        const data = await response.json();
                        setError(data.error || 'Failed to fetch age');
                        return;
                    }
                    const data = await response.json();
                    setAgeMessage(data.message);
                } catch (error) {
                    setError('Error fetching age');
                }
            }
        };

        fetchAge();
    }, [username]);

    const handleAgeSelection = (ageRange: string) => {
        router.push(`/gamePage/${ageRange}`);
    };

    const handleLogout = async () => {
        const response = await fetch('/api/auth/logout', { method: 'POST' });
        if (response.ok) {
            router.push("/");
        } else {
            console.error('Logout failed');
        }
    };

    const changePassword = () => {
        router.push("/changePassword");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Welcome to the Dashboard
            </h1>

            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                {username ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Welcome back, {username}!</h2>
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : ageMessage ? (
                            <p className="text-lg font-medium">{ageMessage}</p>
                        ) : (
                            <p>Loading age...</p>
                        )}
                    </>
                ) : (
                    <h2 className="text-2xl font-semibold mb-4">Welcome to our platform!</h2>
                )}
                <WeatherWidget></WeatherWidget>
                <div className="mt-6 flex flex-col items-center space-y-4">
                    <button
                        onClick={() => handleAgeSelection("3-4")}
                        className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                    >
                        Age 3-4
                    </button>

                    <button
                        onClick={() => handleAgeSelection("4-5")}
                        className="bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                    >
                        Age 4-5
                    </button>

                    <button
                        onClick={() => handleAgeSelection("5-6")}
                        className="bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                    >
                        Age 5-6
                    </button>

                    <button
                        onClick={() => handleAgeSelection("6-7")}
                        className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                    >
                        Age 6-7
                    </button>


                    <button
                        onClick={() => handleAgeSelection("7-8")}
                        className="bg-gradient-to-r from-red-500 to-pink-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl"
                    >
                        Age 7-8
                    </button>

                </div>

                {username && (
                    <div className="mt-8 flex flex-col items-center space-y-4">
                        <button
                            onClick={handleLogout}
                            className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 w-48"
                        >
                            Logout
                        </button>

                        <button
                            onClick={changePassword}
                            className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 w-48"
                        >
                            Change Password
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardClient;
