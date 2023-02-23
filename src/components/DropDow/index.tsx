import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type dropDownProps = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

function DropDown({text, setText}: dropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // handle open and close dropdown
  const openDropdow = () => {
    setIsOpen(!isOpen);
  };

  // handle setting value to the drop 
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
            continents.map((item, i)=> (
                <span key={i} onClick={()=>handleDropdow(i)} className="cursor-pointer">{item}</span>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default DropDown;
