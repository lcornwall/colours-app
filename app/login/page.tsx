"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState({ type: "", content: "" });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage({ type: "", content: "" });

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage({ type: "success", content: "Login successful!" });

            setTimeout(() => {
                router.refresh();
                router.push("/dashboard");
            }, 500);
        } else {
            setMessage({ type: "error", content: data.error || "Login failed. Please try again." });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Login
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
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

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold py-3 rounded-lg hover:scale-105 transform transition-all"
                >
                    Login
                </button>

                {message.content && (
                    <p
                        className={`mt-4 text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}
                    >
                        {message.content}
                    </p>
                )}
            </form>
        </div>
    );
}
