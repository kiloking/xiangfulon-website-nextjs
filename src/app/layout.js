"use client";
import './globals.css'
import Navbar from '../components/Navbar'
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <Head meta_title="" meta_description=""/>
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
