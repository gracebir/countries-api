'use client'
import React, { useState } from 'react'
import { dropDownProps } from '../../../type';
import { BiChevronDown } from "react-icons/bi";

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const DropDown = ({ text, setText }: dropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDropdow = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdow = (i: number) => {
        setText(continents[i])
        openDropdow()
    }
    return (
        <div className="relative inline-block">
            <div
                onClick={openDropdow}
                className="flex justify-between items-center cursor-pointer rounded-md shadow-xl px-6 py-5 bg-bgLight dark:bg-bgDarlElt w-[15rem]"
            >
                <p className="text-[1rem]">{text}</p>
                <BiChevronDown size={"1.4rem"} />
            </div>
            {isOpen && (
                <div className="absolute mt-[0.4em] flex flex-col gap-3 transition-all ease-in-out duration-75 rounded-md shadow-xl px-6 py-4 bg-bgLight dark:bg-bgDarlElt w-[15rem]">
                    {
                        continents.map((item, i) => (
                            <span key={i} onClick={() => handleDropdow(i)} className="cursor-pointer">{item}</span>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default DropDown
