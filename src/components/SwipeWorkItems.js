import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
function SwipeWorkItems({ data }) {
  return (
    <div className=" relative w-full mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={"a0" + index}>
              <Link
                href={"/watchproject/" + item.project_code + "?from=home"}
                className={
                  "flex flex-col justify-start items-start pb-14 transition-all duration-1000 w-full"
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: "10" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1 * index,
                  }}
                  className="border p-3 shadow min-w-[220px] w-full"
                >
                  <div className="w-full">
                    <img
                      src={"/images/oldworks/" + item.cover_image}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="text-xl  font-bold text-zinc-500 mt-3 mb-3">
                    {item.title}
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SwipeWorkItems;
