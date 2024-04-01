import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <p className="text-lg text-gray-700 mb-4">The page you are looking for does not exist.</p>
          <Link to="/" className=" text-blue-500 hover:text-blue-700">Go Home</Link>
        </div>
      </div>
    );
};

export default Error;