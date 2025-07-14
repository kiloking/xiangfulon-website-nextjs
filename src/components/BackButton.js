"use client";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaList } from "react-icons/fa";

export default function BackButton() {
  const [fromPage, setFromPage] = React.useState("work-1");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setFromPage(urlParams.get("from") || "work-1");
    }
  }, []);

  const getBackButtonInfo = () => {
    switch (fromPage) {
      case "work-2":
        return {
          href: "/work-2",
          text: "返回熱門建案",
          icon: (
            <FaList className="text-white group-hover:text-white/80 text-sm transition-colors duration-300" />
          ),
        };
      case "home":
        return {
          href: "/",
          text: "返回首頁",
          icon: (
            <FaArrowLeft className="text-white group-hover:text-white/80 text-sm transition-colors duration-300" />
          ),
        };
      default:
        return {
          href: "/work-1",
          text: "返回建案列表",
          icon: (
            <FaList className="text-white group-hover:text-white/80 text-sm transition-colors duration-300" />
          ),
        };
    }
  };

  const backButtonInfo = getBackButtonInfo();

  return (
    <div className="fixed top-20 left-8 z-50">
      <Link
        href={backButtonInfo.href}
        className="group relative bg-black/8 backdrop-blur-xl bg-white/90 px-5 py-3 rounded-full hover:bg-black/12 transition-all duration-300 flex items-center gap-2.5 text-gray-900 hover:text-black"
      >
        <div className="relative flex items-center justify-center w-6 h-6 bg-[#8c2026] rounded-full">
          {backButtonInfo.icon}
        </div>
        <span className="font-medium text-sm">{backButtonInfo.text}</span>
      </Link>
    </div>
  );
}
