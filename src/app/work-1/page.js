"use client";
import React,{useState,useEffect} from 'react'
import SwipeWorkItems from '../../components/SwipeWorkItems'
import {oldProjects} from '../../components/WorkItems'
import { MenuItems02} from '../../components/ＭenuItems'
import Link from "next/link";
import Head from 'next/head';
import { motion } from "framer-motion";
import MenuTwo from '../../components/MenuTwo'

function WorkOne_Card() {
  const [sortedData , setSortedData] = useState(null)
  const sortData = () => {
    let dataSorted = oldProjects.sort(function(a, b) {
      return b.open_year - a.open_year;
    });
    setSortedData(dataSorted)
  }
  useEffect(()=>{
    sortData()
  },[])

  return (
    <div className='w-full h-screen bg-[#F9F9F9] '>
      <Head>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Head>
      <div className='px-10 py-16'>
        <MenuTwo />
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-6'>
          { sortedData ?
            sortedData.map((item,index)=>{
              return(
                <Link 
                  key={'a0'+index}
                  href={{ pathname: "/watchproject/" ,query: { pid: item.project_code}}}
                  className={'flex flex-col justify-start items-start pb-1 transition-all duration-1000 w-full hover:brightness-110'} 
                >
                  <motion.div 
                  initial={{ opacity: 0,y:'10' }}
                  animate={{ opacity: 1,y:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 0.1 * index,
                  }}
                  className='border p-3 shadow  w-full'>
                    <div className='w-full'><img src={'/images/oldworks/'+ item.cover_image} alt="" className='w-full' /></div>
                    <div className='text-xl  font-bold text-zinc-500 mt-3 mb-3'>{item.open_year} {item.title}</div>
                  </motion.div>

                </Link>
              )
            }) 
            : <div>Loading</div>
          }
        </div>
      </div>

    </div>
 
  )
}

export default WorkOne_Card