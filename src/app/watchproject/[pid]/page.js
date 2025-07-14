import React from "react";
import Link from "next/link";
import { oldProjects } from "../../../components/WorkItems";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaList,
  FaMap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Head from "../../head";
import ProjectMainSwiper from "../../../components/ProjectMainSwiper";
import BackButton from "../../../components/BackButton";

// 為靜態導出生成所有可能的參數組合
export async function generateStaticParams() {
  return oldProjects.map((item) => ({
    pid: item.project_code,
  }));
}

function WatchOldProject({ params }) {
  const pid = params.pid;
  const data = oldProjects.find((item) => item.project_code === pid);

  // 如果沒有找到對應的建案資料，返回 404 或錯誤頁面
  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">建案不存在</h1>
          <Link
            href="/work-1"
            className="inline-flex items-center gap-2 bg-[#8c2026] text-white px-4 py-2 rounded-lg hover:bg-[#8c2026]/90 transition-colors"
          >
            <FaArrowLeft />
            返回建案列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 pb-14">
      {data && (
        <Head
          meta_title={data.meta_title}
          meta_description={data.meta_description}
        />
      )}

      {/* 使用 ProjectSwiper 組件 */}
      {/* <ProjectSwiper data={data} /> */}
      <div className="fixed h-[60vh] pointer-events-none w-full opacity-100">
        <img
          src={"/images/sky.png"}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      {data && (
        <div className="relative ">
          {/* 返回按鈕 */}
          <BackButton />

          {/* 主要內容區域 */}
          <div className="w-full md:w-11/12 mx-auto px-4 pt-[35%] md:pt-[12%]">
            {/* 上區塊：兩欄式布局 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左側圖片區域 */}
                <div>
                  {/* 主圖輪播 - 使用 ProjectMainSwiper */}
                  {data.albums && data.albums.length > 0 ? (
                    <ProjectMainSwiper data={data} />
                  ) : (
                    <div className="relative aspect-[4/3] mb-4 bg-gray-100">
                      <img
                        src={
                          "/images/oldworks/" + data.project_code + "@3x.png"
                        }
                        className="w-full h-full object-contain rounded-lg"
                        alt={data.title}
                      />
                    </div>
                  )}
                </div>

                {/* 右側資訊區域 */}
                <div className="flex flex-col gap-6">
                  {/* 標題 */}
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {data.title}
                    </h1>
                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-600" />
                        {data.address}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600" />
                        {data.open_year} 年完工
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href={`https://siangfulong.com.tw/contact/`}
                        target="_blank"
                        className="flex items-center gap-2 text-white bg-black/80 px-3 py-1 rounded-lg hover:bg-black/90 cursor-pointer transition-all duration-300"
                      >
                        <FaMap className="" />
                        <div>聯絡我們</div>
                      </a>
                      <div className="flex items-center gap-2 text-white bg-red-900/90 px-3 py-1 rounded-lg hover:bg-red-900 cursor-pointer transition-all duration-300">
                        <FaExternalLinkAlt className="" />
                        詳細介紹
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">
                      建案規格
                    </h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">基地面積</div>
                        <div className="text-lg font-medium">
                          {data.land_size}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">規劃坪數</div>
                        <div className="text-lg font-medium">
                          {data.house_size}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">規劃樓層</div>
                        <div className="text-lg font-medium">
                          {data.build_floor}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">規劃戶車</div>
                        <div className="text-lg font-medium">
                          {data.build_count}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    {/* 建築團隊 */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
                        建築團隊
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            建築設計
                          </div>
                          <div>{data.build_design}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            施工營造
                          </div>
                          <div>{data.build_create}</div>
                        </div>
                      </div>
                    </div>

                    {/* 空間設計 */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
                        空間設計
                      </h2>
                      <div className="space-y-4">
                        {data.build_openspace && (
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              公共空間
                            </div>
                            <div>{data.build_openspace}</div>
                          </div>
                        )}
                        {data.build_env && (
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              景觀設計
                            </div>
                            <div>{data.build_env}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchOldProject;
