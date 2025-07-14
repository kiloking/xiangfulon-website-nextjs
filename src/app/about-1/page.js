"use client";
import React from "react";
import MenuOne from "../../components/MenuOne";
import { motion } from "framer-motion";
function AboutOne() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-start md:overflow-hidden md:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${"/images/blockbg.png"})` }}
    >
      <div className="w-full md:w-1/2  px-10 py-16 bg-center bg-no-repeat bg-cover  md:overflow-y-auto h-full">
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
            祥富旭景，一生好宅
          </div>
          創辦人李友成先生自工地基層出發，一步一腳印累積深厚實務經驗。
          <br />
          早年於桃園創立建設公司，投身住宅開發。
          <br />
          民國93年，李友成先生與陳太平先生攜手創辦「祥富龍／祥旭龍建設」，
          <br />
          將對建築的熱愛與使命帶回最熟悉的故鄉—三重與蘆洲，
          <br />
          致力打造溫暖宜居的生活空間。
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.1,
          }}
          className=" leading-10 text-[20px] py-10"
        >
          <div className="text-[#8c2026] text-xl font-bold py-3">
            「穩健築基，誠信為本。」
          </div>
          企業傳承至今已近二十年，無論是面對市場更迭或全球金融風暴，
          <br />
          我們始終堅守「穩健經營」的核心價值，維持穩定現金流與低槓桿操作。
          <br />
          這份穩健與誠信，正是支撐企業長遠發展的根本信念。
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
            「不求案量，而求精緻。」
          </div>
          <span className="font-bold">
            真正值得長久居住的建築，來自對生活的深刻理解與對細節的極致要求
          </span>
          <br />
          在設計上，我們以「格局優先」為核心，重視實用性與舒適度，
          <br />
          從基地挑選、格局規劃到施工品質， 每一環節都親力親為，力求完美。
          <br />
          公共空間材質的挑選更由經營者親自把關，致力打造兼具美感與實用的建築細節。
          <br />
          <br />
          截至目前，祥富龍／祥旭龍已於雙北地區推出{" "}
          <span className="text-[#8c2026]">
            17
          </span> 個建案，總樓地板面積超過{" "}
          <span className="text-[#8c2026]">120,000</span> 平方公尺，
          <br />
          平方公尺，這些作品，正是我們對「家」最深的承諾與實踐。
          <br />
          第一代奠基企業穩固基礎，第二代持續創新提升居住品質。
          <br />
          我們深信，傳承不只是經驗的累積， 更是延續對品質的堅持與對家的初心。
          <br />
          <br />
          未來，祥富龍／祥旭龍將持續用心築家，
          <br />
          為每一戶家庭築起安心、溫暖、恆久的好宅。
          <br />
          讓「祥」、「富」、「旭」的精神，代代流傳。
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
        className="w-full md:w-1/2 h-[60vh] md:h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${"/images/about/aboutbg-1.png"})` }}
      ></motion.div>
    </div>
  );
}

export default AboutOne;
