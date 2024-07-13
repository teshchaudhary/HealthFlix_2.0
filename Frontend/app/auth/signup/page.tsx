'use client'
import '../../global.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

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

  const signup = async () => {
    try {
      const result = await fetch("http://localhost:3001/v1/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
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
      console.error("Signup failed:", error);
      setError("An error occurred during signup. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-black opacity-90">
        <div className="max-w-md w-full p-6 bg-black opacity-90 shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-white">Signup</h1>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <input
            type="text"
            placeholder="Enter Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-3 py-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail();
            }}
            onBlur={validateEmail}
            className={`border border-gray-300 px-3 py-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${!emailValid ? "border-red-500" : "border-gray-300"}`}
          />
          <span className="text-red-600">{emailErrorMessage}</span>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-3 py-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={signup} className="bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-red-700">
            Signup
          </button>
          <div className="mt-4 text-sm text-white">
            Already a member? <a onClick={() => router.push("/auth/login")} className="text-blue-500 cursor-pointer">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
