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
    <div className="flex flex-col gap-2">
      <div
        onClick={openDropdow}
        className="flex justify-between items-center cursor-pointer rounded-md shadow-xl px-6 py-4 bg-bgLight dark:bg-bgDarlElt w-[15rem]"
      >
        <p>{text}</p>
        <BiChevronDown size={"1.4rem"} />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 transition-all ease-in-out duration-75 rounded-md shadow-xl px-6 py-4 bg-bgLight dark:bg-bgDarlElt w-[15rem]">
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
