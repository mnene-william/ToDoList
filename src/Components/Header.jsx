
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Header = () => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className="p-4 bg-blue-800 text-white flex justify-between items-center shadow-md">

      <nav className="space-x-6">
        {isLoggedIn ? (
          <>
            <span className="text-lg">{user.email.split('@')[0]}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-200 transition-colors duration-200">Login</Link>
            <Link to="/signup" className="hover:text-blue-200 transition-colors duration-200">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
