// src/SignIn.js
import React from 'react';
import { signInWithGoogle } from './firebase';

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      window.location.href = "/dashboard"; // Redirect to dashboard after sign-in
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
