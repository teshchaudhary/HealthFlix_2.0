'use client'
import '../../global.css'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Navbar from "@/components/navbar/page";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(email);
    setEmailValid(isValid);
    setEmailErrorMessage(isValid ? "" : "Please enter a valid email address");
  };

  const login = async () => {
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    validateEmail();

    if (!emailValid) {
      return;
    }

    try {
      const result = await fetch("http://localhost:3001/v1/auth/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!result.ok) {
        const errorData = await result.json();
        setError(errorData.message);
        return;
      }

      const data = await result.json();
      localStorage.setItem("token", data.token);
      router.push("/");
      
    } catch (error) {
      console.error("Login failed:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-black opacity-90">
        <div className="max-w-md w-full p-6 bg-black opacity-90 text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6">Login</h1>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <input
            type="text"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={`text-black border px-3 py-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${!emailValid ? "border-red-500" : "border-gray-300"}`}
          />
          <div className="text-red-600 mb-4">{emailErrorMessage}</div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black border border-gray-300 px-3 py-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={login} className="bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-red-700">
            Login
          </button>
          <div className="mt-4 text-sm text-gray-600 text-white">
            Not a member? <a onClick={() => router.push("/auth/signup")} className="text-blue-500 cursor-pointer">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
