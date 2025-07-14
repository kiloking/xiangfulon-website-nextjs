import React from "react";
import Link from "next/link";
import { news } from "../../../components/NewsItems";

import { FaArrowLeft } from "react-icons/fa";

// 為靜態導出生成所有可能的參數組合
export async function generateStaticParams() {
  return news.map((item) => ({
    aid: item.id,
  }));
}

function WatchArticle({ params }) {
  const aid = params.aid;
  const data = news.find((item) => item.id === aid);

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${"/images/blockbg.png"})` }}
    >
      <div className="px-10 pt-20 ">
        <Link href="/news-2">
          <FaArrowLeft size="36px" color="black" />
        </Link>
      </div>
      {data ? (
        <div className="px-10 md:py-14 py-5 flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-5 overflow-y-auto  max-h-[520px] p-3">
            <div className="flex gap-4 items-center">
              <div className="text-[#003049] ">
                <div className="text-lg tracking-wider">{data.news_date}</div>
                <div className="text-sm">{data.news_years}</div>
              </div>
              <div className="text-xl font-bold">{data.title}</div>
            </div>

            <div className=" break-words whitespace-pre-wrap  ">
              <div className="">{data.content}</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={"/news/" + data.article_image}
              alt=""
              className="max-w-full"
            />
            <div>{data.source}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WatchArticle;
