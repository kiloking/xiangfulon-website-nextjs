import React, { useState } from "react";
import Link from "next/link";
function Dropdown({ menuItems }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <ul className=" absolute bg-[#8c2026]  top-14 left-0  text-white w-auto break-keep flex flex-col">
      {menuItems.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            onClick={() => setClick(false)}
            className=" hover:bg-red-700 px-6  py-3"
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
}

export default Dropdown;
