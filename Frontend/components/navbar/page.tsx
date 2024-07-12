'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import logo from '@/images/logo.png';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        router.push("/");
    };

    const links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-10">
            <div>
                <a onClick={() => router.push("/")} className="cursor-pointer">
                    <Image src={logo} alt="HealthFlix Logo" width={250} height={100} />
                </a>
            </div>

            <div className="flex justify-between items-center w-full">
                <ul className="flex space-x-5 ml-10">
                    {links.map(({ name, link }) => (
                        <li
                            key={name}
                            className="nav-links cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-gray-400 duration-200 link-underline"

                        >
                            <Link href={link}>{name}</Link>
                        </li>
                    ))}
                </ul>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-orange-500 group-hover:from-red-700 group-hover:to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Log Out
                        </span>
                    </button>
                ) : (
                    <div className="flex space-x-4 ml-auto">
                        <Link href="/auth/login">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Login/SignUp
                                </span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
