/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer le hook

const LoginPage = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  // Gestion des boutons
  const handleLogin = () => navigate('/dashboard'); // Page principale après connexion
  const handleStudentLogin = () => navigate('/etudiant-login'); // Redirection pour étudiant
  const handleProfessorLogin = () => navigate('/professeur-login'); // Redirection pour professeur

  return (
    <div
      className="min-h-screen py-8 px-4 bg-blue-50 font-sans"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23d4e3f3' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <section className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-gray-700"></div>
          <div className="relative z-10 px-8 py-10">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-extrabold text-white mb-8 font-playfair">
                Sonatel Academy
              </h1>
              <p className="text-2xl font-bold text-blue-200">
                Votre plateforme de gestion éducative
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-playfair">
              Se Connecter
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                    placeholder="Votre email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-white font-medium mb-1"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-lock text-gray-400"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    placeholder="Votre mot de passe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={credentials.rememberMe}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        rememberMe: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-800 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-white">
                    Se souvenir de moi
                  </label>
                </div>
                <a href="#" className="text-blue-200 hover:text-blue-100">
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="button"
                onClick={handleLogin} // Redirection après connexion
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              >
                {/* <i className="fas fa-sign-in-alt mr-2"></i> Se Connecter */}
                <i className="fas fa-sign-in-alt mr-2"></i> Connexion Admin
              </button>
              <button
                type="button"
                onClick={handleStudentLogin} // Redirection vers login étudiant
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out mt-4"
              >
                <i className="fas fa-user-graduate mr-2"></i> Connexion Étudiant
              </button>
              <button
                type="button"
                onClick={handleProfessorLogin} // Redirection vers login professeur
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out mt-4"
              >
                <i className="fas fa-chalkboard-teacher mr-2"></i> Connexion
                Professeur
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
