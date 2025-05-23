import { Link } from 'react-router-dom';

export const NotFound = () => {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center px-4">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-light mb-2">Oops! Page not found.</p>
      <p className="text-md mb-6">The page you're looking for doesn’t exist or was moved.</p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
    )
}