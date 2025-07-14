"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export default function ProjectMainSwiper({ data }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const swiperRef = React.useRef(null);

  if (!data || !data.albums || data.albums.length === 0) return null;

  const handleThumbnailClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setCurrentSlide(index);
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="mb-4">
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="rounded-lg overflow-hidden"
        onSlideChange={handleSlideChange}
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

      {/* 縮圖預覽 */}
      <div className="grid grid-cols-5 gap-1.5 mt-4">
        {/* 外觀圖縮圖 */}
        <div
          className={`relative aspect-square rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
            currentSlide === 0
              ? "ring-2 ring-[#8c2026] ring-offset-2"
              : "hover:opacity-90"
          }`}
          onClick={() => handleThumbnailClick(0)}
        >
          <img
            src={"/images/oldworks/" + data.project_code + "@3x.png"}
            alt="外觀圖"
            className="w-full h-full object-cover"
          />
        </div>
        {/* 相簿縮圖 */}
        {data.albums.map((item, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
              currentSlide === index + 1
                ? "ring-2 ring-[#8c2026] ring-offset-2"
                : "hover:opacity-90"
            }`}
            onClick={() => handleThumbnailClick(index + 1)}
          >
            <img
              src={"/images/oldworks/album/" + item}
              alt={`圖片 ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
