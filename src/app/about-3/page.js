"use client";
import React from "react";
import MenuOne from "../../components/MenuOne";
import { motion } from "framer-motion";
function AboutThree() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center overflow-hidden md:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${"/images/blockbg.png"})` }}
    >
      <div className="w-full md:w-1/2  md:h-screen  px-10 py-16 bg-center bg-no-repeat bg-cover md:overflow-y-auto h-full">
        <MenuOne />
        <div className="text-[#8c2026] text-[18px] font-bold py-6">
          祥富龍/祥旭龍 建築4C學
        </div>
        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-12 text-[16px]"
        >
          <div className="mb-4">
            <div className="text-[#8c2026]  font-bold mb-4">Centre 選址</div>
            <div className=" leading-10">
              祥富龍/祥旭龍感謝每一塊珍貴、無可複製的土地。透過獨特的地塊能量，我們以數十年專業經驗，揉和理性與感性，為土地量身裁製心中的理想建築，成就社會，城市、居者的所見所享，形塑生活背景與幸福藍圖。
            </div>
          </div>
          <div className="mb-4">
            <div className="text-[#8c2026]  font-bold mb-4">Creative 創意 </div>
            <div className=" leading-10">
              勇於破框思考，綜觀國際趨勢與時代浪潮，永遠要求將建築視為「藝術品」來創造。結合時代所需，融入未來科技，創造超越需求的創意建築。
            </div>
          </div>
          <div className="mb-4">
            <div className="text-[#8c2026]  font-bold mb-4">Careness 細緻 </div>
            <div className=" leading-10">
              建築存在的價值，目的都只有一個──為了「人」，為了人的存在、連結以及使用空間的目的，提供不同的機能。祥富龍/祥旭龍用最縝密的規劃，細膩塑造一座長住久安的房子，考量自然能量、格局動線、健康建材，還有看不到，卻最重要的嚴實工法，創造無微不至的細緻建築。
            </div>
          </div>
          <div className="mb-4">
            <div className="text-[#8c2026] font-bold mb-4">Consistent 永續</div>
            <div className=" leading-10">
              透過消耗最少地球能源及資源，製造最少廢棄物，並專注規劃符合綠建築規範的建築作品、以具有生態、節能、健康特性的家園，守護我們唯一的地球，讓建築與人類永續共存，創造不滅的幸福。
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.1,
        }}
        className="w-full md:w-1/2 h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center pt-10"
      >
        <img
          src="/images/about/about3-p01.jpg"
          alt=""
          className="w-full  object-cover h-full "
        />
      </motion.div>
    </div>
  );
}

export default AboutThree;
