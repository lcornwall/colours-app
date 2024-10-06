"use client";
import { useRouter } from "next/navigation";

interface DashboardClientProps {
    username: string | null;
}

const DashboardClient: React.FC<DashboardClientProps> = ({ username }) => {
    const router = useRouter();

    const handleLogout = async () => {
        const response = await fetch('/api/auth/logout', { method: 'POST' });
        if (response.ok) {
            router.push("/login");
        } else {
            console.error('Logout failed');
        }
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
                        <button
                            onClick={handleLogout}
                            className="mt-4 bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Please log in.</h2>
                        <button
                            onClick={() => router.push("/login")}
                            className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardClient;
