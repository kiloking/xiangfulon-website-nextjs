"use client";
import React from "react";
import MenuOne from "../../components/MenuOne";
import { motion } from "framer-motion";
function AboutTwo() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-start md:overflow-hidden md:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${"/images/blockbg.png"})` }}
    >
      <div className="w-full md:w-[60%]  md:h-screen  px-10 py-16 bg-center bg-no-repeat bg-cover md:overflow-y-auto h-full flex flex-col justify-between gap-8">
        <MenuOne />

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px]"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            Clarity - 產權清楚・交易透明
          </div>
          <span className=" underline">每一塊土地、每一筆交易，都有據可循</span>
          <br />
          不論買賣、合建、委建或銷售流程，我們始終堅持產權明確、流程透明，從源頭把關，保障交易雙方權益。這份嚴謹，是對誠信的實踐，也是建立長久信任關係的基礎。
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px]"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            Comfort- 用心設計・住得舒適
          </div>
          <span className=" underline">Comfort- 用心設計・住得舒適</span>
          <br />
          好的設計從理解生活開始。我們以「住得舒服」為設計初衷，注重空間配置、動線設計與生活機能。通風與採光更是我們不妥協的核心原則，即便增加營建成本，也堅持設計採光井、通風道，讓光與風自然流動。讓家的每一寸空間，都能感受到呼吸與溫度。
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px]"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            Quality- 按圖施工・品質至上
          </div>
          <span className=" underline">
            「超越法規標準」的耐震規格，打造真正安心的家
          </span>
          <br />
          在結構安全上，我們提前到位。所有建案均採用高於法定標準的耐震設計，由專業結構技師團隊嚴密規劃，案場施作更由資深工程團隊全程監督，規格提升至「法定耐震係數規範再加一級」，用看不見的堅固品質，守護每一個家庭。
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px]"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            Sustainability- 建材創新求變・邁向永續建築
          </div>
          <span className=" underline">
            紮實的工法與現代永續的建材，打造會呼吸的建築語言
          </span>
          <br />
          在傳承工藝精髓的基礎上，未來我們將持續導入減碳節能、綠建材、高能效、高儲能的智慧建築系統與新世代材料，融合建築美學與智能科技，並取得認證標章。
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px]"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            Assurance-貼心售後・安心不止交屋
          </div>
          <span className=" underline">有溫度的保固服務，讓家更有依靠</span>
          <br />
          建築不只是交屋那一刻的交付，更是長久陪伴的開始。
          我們提供即時、專業的售後保固服務，快速回應住戶反映，無論大小問題，皆積極處理。讓您感受到——住在祥富龍的家，不只是擁有一間房，而是多了一份持續被守護的安心。
          <br />
        </motion.div>

        <div className="w-full flex justify-center items-center">
          <img src="/images/about/about-2.png" alt="" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.1,
        }}
        className="w-full md:w-[40%] h-[40vh] md:h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center pt-0 md:pt-0 px-10"
      >
        <img
          src="/images/about/about2-p01.png"
          alt=""
          className="w-full  object-contain "
        />
      </motion.div>
    </div>
  );
}

export default AboutTwo;
