import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { signInWithGithub, signOut, user } = useAuth();

  const displayName = user?.user_metadata.user_name || user?.email;

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white">
            Kron<span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">.Media</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Create Post
            </Link>
            <Link
              to="/communities"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Communities
            </Link>
            <Link
              to="/community/create"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Create Community
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                {user.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <span className="text-gray-300">{displayName}</span>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded text-white text-sm"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGithub}
                className="bg-blue-600 hover:bg-blue-700 transition px-3 py-1 rounded text-white text-sm"
              >
                Sign in with GitHub
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(10,10,10,0.95)] border-t border-white/10">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link
              to="/create"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Create Post
            </Link>
            <Link
              to="/communities"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Communities
            </Link>
            <Link
              to="/community/create"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Create Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
