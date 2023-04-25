"use client";
import React,{useState,useEffect} from 'react'
import Link from "next/link";
import { useRouter,usePathname, useSearchParams } from 'next/navigation'
import {news} from '../../components/NewsItems'
import { FaArrowLeft } from "react-icons/fa";
function WatchArticle() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const aid = searchParams.get('aid');
  const [data ,setData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) 

  useEffect(()=>{
    const currentData = news.find((item)=>{
      return item.id === aid
    })
    setData(currentData)
  })
  return (
    <div className='w-full h-screen bg-cover bg-center bg-no-repeat '
      style={{backgroundImage: `url(${'./images/blockbg.png'})`}}
    >

      <div className='px-10 pt-20 '>
        <Link href="/news-2"><FaArrowLeft size="36px" color="black"/></Link>
      </div>
      {data ?
        <div className='px-10 py-14 flex flex-col md:flex-row gap-20'>
          <div className='w-full md:w-1/2 flex flex-col gap-5 overflow-y-auto  max-h-[520px] p-3'>
            <div className='flex gap-4 items-center'>
              <div className='text-[#003049] '>
                <div className='text-lg tracking-wider'>{data.news_date}</div>
                <div className='text-sm'>{data.news_years}</div>
              </div>
              <div className='text-xl font-bold'>
                {data.title}
              </div>
            </div>
            
            <div className=' break-words whitespace-pre-wrap  '>
              <div className=''>
                {data.content}
              </div>
              
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <img src={'./images/news/'+data.article_image } alt=""  className='max-w-full' />
            <div>{data.source}</div>
          </div>
        </div>
      : null

      }
    </div>
  )
}

export default WatchArticle