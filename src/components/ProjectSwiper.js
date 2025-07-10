"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";

export default function ProjectSwiper({ data }) {
  if (!data) return null;

  return (
    <>
      {/* 頁面背景圖片 */}
      {data.albums && data.albums.length > 0 ? (
        <div className="fixed w-full h-[55vh] pointer-events-none opacity-100">
          {/* swiper 圖片 fade in out  autoplay */}
          <Swiper
            key={data.project_code}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            className="w-full h-full"
          >
            {/* 外觀圖作為第一張 */}
            <SwiperSlide>
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={"/images/oldworks/" + data.project_code + "@3x.png"}
                  className="w-full h-full object-contain"
                  alt={`${data.title} - 外觀圖`}
                />
              </div>
            </SwiperSlide>
            {/* 相簿圖片 */}
            {data.albums.map((item, index) => (
              <SwiperSlide key={"main" + index}>
                <div className="relative w-full h-full">
                  <img
                    src={"/images/oldworks/album/" + item}
                    className="w-full h-full object-cover"
                    alt={`${data.title} - 圖片 ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="fixed h-[60vh] pointer-events-none w-full opacity-100">
          <img
            src={"/images/oldworks/" + data.project_code + "@3x.png"}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      )}
    </>
  );
}
