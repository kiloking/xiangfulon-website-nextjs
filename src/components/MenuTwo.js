import React from "react";
import { MenuItems02 } from "./ＭenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MenuTwo() {
  const pathname = usePathname();
  return (
    <div className="py-16">
      <ul className="flex gap-6  text-lg">
        {MenuItems02.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.path}
                className={
                  "pb-2 border-red-600 hover:border-b-4 " +
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

export default MenuTwo;
