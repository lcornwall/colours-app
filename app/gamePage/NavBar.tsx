import Link from "next/link";
import { HomeIcon } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-lg w-full">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <h1 className="text-white text-xl font-bold">Colours App</h1>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link href="/dashboard" className="flex items-center text-white hover:text-gray-200">
                            <HomeIcon className="w-5 h-5 mr-1" /> Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
