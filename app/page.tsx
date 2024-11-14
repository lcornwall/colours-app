import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-loading-doodles bg-repeat bg-small w-full">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">

        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight text-center">
          Start Learning Colours!
        </h1>


        <div className="flex justify-center space-x-6 mt-8">

          <Link href="/signup">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl">
              Sign Up
            </button>
          </Link>

          <Link href="/login">
            <button className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl">
              Log In
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110 text-xl">
              Go to Games
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
