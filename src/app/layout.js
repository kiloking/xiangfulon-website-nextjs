// "use client";
import "./globals.css";
import Navbar from "../components/Navbar";
// import Head from "./head";

export const metadata = {
  title: "祥富龍/祥旭龍|建設公司|三蘆在地建商",
  description:
    "祥富龍/祥旭龍-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。",
  keywords: "祥富龍,祥旭龍,建設公司,三蘆在地建商",
  author: "祥富龍/祥旭龍",
  canonical: "./",
  openGraph: {
    title: "祥富龍/祥旭龍|建設公司|三蘆在地建商",
    description:
      "祥富龍/祥旭龍-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。",
    images: [
      {
        url: "./images/logo.png",
      },
    ],
  },
  googleSiteVerification: "mkHHYhOSC79k6df9FUCwetZ1ZH-AYQj3Wts8ccz3YiA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
