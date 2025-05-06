"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { oldProjects } from "../../components/WorkItems";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import Head from "../head";

function WatchOldProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();
  const pid = searchParams.get("pid");

  useEffect(() => {
    const currentData = oldProjects.find((item) => item.project_code === pid);
    setData(currentData);
  }, [pid]);

  return (
    <div className="min-h-screen bg-zinc-100 pb-14">
      {data && (
        <Head
          meta_title={data.meta_title}
          meta_description={data.meta_description}
        />
      )}

      {/* 頁面背景圖片 */}
      {data ? (
        data.albums && data.albums.length > 0 ? (
          <div className="fixed inset-0 pointer-events-none opacity-20">
            <img
              src={"./images/oldworks/album/" + data.albums[0]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ) : (
          <div className="fixed h-[60vh] pointer-events-none w-full opacity-100">
            <img
              src={"./images/oldworks/" + data.project_code + "@3x.png"}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        )
      ) : null}

      {data && (
        <div className="relative ">
          {/* 返回按鈕 */}
          <div className="fixed top-20 left-8 z-50">
            <Link
              href="/work-1"
              className="bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <FaArrowLeft /> <span>返回列表</span>
            </Link>
          </div>

          {/* 主要內容區域 */}
          <div className="w-11/12 mx-auto px-4 pt-[22%]">
            {/* 上區塊：兩欄式布局 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左側圖片區域 */}
                <div>
                  {/* 主圖輪播 */}
                  {data.albums && data.albums.length > 0 ? (
                    <div className="mb-4">
                      <Swiper
                        onSwiper={setSwiper}
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="rounded-lg overflow-hidden"
                      >
                        {/* 外觀圖作為第一張 */}
                        <SwiperSlide>
                          <div className="relative aspect-[4/3] bg-gray-100">
                            <img
                              src={
                                "./images/oldworks/" +
                                data.project_code +
                                "@3x.png"
                              }
                              className="w-full h-full object-contain"
                              alt={`${data.title} - 外觀圖`}
                            />
                          </div>
                        </SwiperSlide>
                        {/* 相簿圖片 */}
                        {data.albums.map((item, index) => (
                          <SwiperSlide key={"main" + index}>
                            <div className="relative aspect-[4/3]">
                              <img
                                src={"./images/oldworks/album/" + item}
                                className="w-full h-full object-cover"
                                alt={`${data.title} - 圖片 ${index + 1}`}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] mb-4 bg-gray-100">
                      <img
                        src={
                          "./images/oldworks/" + data.project_code + "@3x.png"
                        }
                        className="w-full h-full object-contain rounded-lg"
                        alt={data.title}
                      />
                    </div>
                  )}

                  {/* 縮圖預覽 */}
                  {data.albums && data.albums.length > 0 && (
                    <div className="grid grid-cols-5 gap-1.5">
                      {/* 外觀圖縮圖 */}
                      <button
                        onClick={() => swiper.slideTo(0)}
                        className="relative aspect-square rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                      >
                        <img
                          src={
                            "./images/oldworks/" + data.project_code + "@3x.png"
                          }
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                      {/* 相簿縮圖 */}
                      {data.albums.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => swiper.slideTo(index + 1)}
                          className="relative aspect-square rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                        >
                          <img
                            src={"./images/oldworks/album/" + item}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 右側基本資訊 */}
                <div>
                  {/* 標題區 */}
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
                  </div>

                  {/* 建案規格 */}
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
                </div>
              </div>
            </div>

            {/* 下區塊：單欄式布局 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              {/* 建築團隊 */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
                  建築團隊
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">建築設計</div>
                    <div>{data.build_design}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">施工營造</div>
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
                      <div className="text-sm text-gray-500 mb-1">公共空間</div>
                      <div>{data.build_openspace}</div>
                    </div>
                  )}
                  {data.build_env && (
                    <div>
                      <div className="text-sm text-gray-500 mb-1">景觀設計</div>
                      <div>{data.build_env}</div>
                    </div>
                  )}
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
