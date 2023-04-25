"use client";
import React from 'react'
import { MenuItems03} from '../../components/ＭenuItems'
import {news} from '../../components/NewsItems'
import MenuThree from '../../components/MenuThree'
import Link from "next/link";
import { motion } from "framer-motion";
function NewsTwo() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${'/images/blockbg.png' })`}}
    >

      <div className='px-10 py-16'>
        <MenuThree />
        <div className='flex flex-col md:flex-row gap-8 justify-start break-words items-start'>
          {
            news.map((item,index)=>{
              const{id,title,source,news_years,news_date,cover_image,content} = item
              return(
                <motion.div 
                  initial={{ opacity: 0,y:'10' }}
                  animate={{ opacity: 1,y:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 0.3 * index,
                  }}
                  key={'news'+id} className=' gap-10 mb-20 w-full  md:w-1/3'>
                  <Link 
                    href={{ pathname: "/watcharticle/" ,query: { aid: id}}}
                    className=' gap-6 w-full '>
                    <div className='mb-7'>
                      <img src={'/images/news/'+cover_image} alt=""  className='w-full'/>
                    </div>
                    <div className='flex items-center gap-6 reak-words pr-6'>
                      <div className='text-[#003049] '>
                        <div className='text-lg tracking-wider font-bold'>{news_date}</div>
                        <div className='text-base font-bold'>{news_years}</div>
                      </div>
                      <div className='text-2xl font-bold'>
                        {title}
                      </div>
                    </div>
                    

                  </Link>
                </motion.div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NewsTwo