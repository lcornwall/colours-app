import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="
        text-5xl  font-bold mb-8 
        bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 
        bg-clip-text text-transparent leading-tight
      ">
        Start Learning Colours!
      </h1>
      <div className="space-x-4">
        <Link href="/signup">
          <button className="
            bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-110 text-xl
          ">
            SIGN UP
          </button>
        </Link>
        <Link href="/login">
          <button className="
            bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-110 text-xl
          ">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};