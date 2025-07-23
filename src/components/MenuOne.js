import React from "react";
import { MenuItems01 } from "./ＭenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MenuOne() {
  const pathname = usePathname();
  return (
    <div className="py-12">
      <ul className="flex gap-2 md:gap-6 text-[20px] justify-center md:justify-start ">
        {MenuItems01.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.path}
                className={
                  "pb-2 border-[#000] hover:border-b-4 text-[#000] " +
                  (pathname === item.path ? "  border-b-4  " : " border-0")
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuOne;
