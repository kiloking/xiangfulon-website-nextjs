"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export default function ProjectMainSwiper({ data }) {
  if (!data || !data.albums || data.albums.length === 0) return null;

  return (
    <div className="mb-4">
      <Swiper
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
              src={"/images/oldworks/" + data.project_code + "@3x.png"}
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
                src={"/images/oldworks/album/" + item}
                className="w-full h-full object-cover"
                alt={`${data.title} - 圖片 ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
