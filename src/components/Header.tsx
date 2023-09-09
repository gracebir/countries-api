'use client';
import React, { useEffect, useState } from 'react'
import { IoMoonOutline, IoMoon } from "react-icons/io5";


const Header = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <header className="bg-bgLight shadow-3xl sticky top-0 mb-10 z-50  dark:shadow-2xl dark:bg-bgDarlElt flex justify-between items-center px-4 md:px-24 py-6">
            <h2 className="font-[700] text-[1rem] md:text-2xl text-textLight dark:text-textDark">
                Where in the world?
            </h2>
            <div onClick={handleMode} className="cursor-pointer">
                {theme === "dark" ? (
                    <div className="flex gap-3 items-center text-textDark">
                        <IoMoon />
                        <span className="font-semibold">Dark Mode</span>
                    </div>
                ) : (
                    <div className="flex gap-3 items-center text-textLight">
                        <IoMoonOutline />
                        <span className="font-semibold">Light Mode</span>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
