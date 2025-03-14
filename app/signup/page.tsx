"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState({ type: "", content: "" });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({ type: "", content: "" });

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, dateOfBirth, gender }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage({ type: "success", content: "Sign up successful!" });
        } else {
            setMessage({ type: "error", content: data.error || "Sign up failed. Please try again." });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Sign Up
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />

                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all"
                >
                    Sign Up
                </button>

                {message.content && (
                    <p
                        className={`mt-4 text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}
                    >
                        {message.content}
                    </p>
                )}
            </form>

            <div className="mt-6">
                <Link href="/login">
                    <button className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl">
                        Log In
                    </button>
                </Link>
            </div>
        </div>
    );
}
