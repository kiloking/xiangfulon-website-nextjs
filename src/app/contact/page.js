"use client";
import React, { useState } from "react";
import { useForm, reset } from "react-hook-form";
import { motion } from "framer-motion";
function Contact() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      subject: "",
      name: "",
      company: "",
      tel: "",
      mail: "",
      msg: "",
    },
  });
  const sendFormStatusModal = () => {
    setFormStatus(true);

    setTimeout(() => {
      setFormStatus(false);
    }, 5000);
  };
  const onSubmit = (data) => {
    console.log(data);

    let url1 = "/assets/sendsee.php";
    fetch(url1, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: Object.entries(data)
        .map(([k, v]) => {
          return k + "=" + v;
        })
        .join("&"),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          console.log("ok");
          sendFormStatusModal();
          reset();
        }
      })
      .catch((error) => console.log("error"));
  };
  return (
    <div
      className="w-full  min-h-screen  relative bg-center bg-no-repeat bg-cover text-zinc-900 bg-fixed flex justify-center items-center"
      style={{ backgroundImage: `url(${"/images/bg05.png"})` }}
    >
      <motion.div className="flex w-full md:w-10/12 justify-center items-center   flex-col relative py-16 md:py-14 px-10 md:px-14  bg-white/60">
        <div className="flex flex-col md:flex-row w-full  gap-10 items-start">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: "10" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
                delay: 0.5,
              }}
              className=" relative mb-5  text-lg"
            >
              <div className="text-3xl font-bold mb-2 text-[#8c2026]">
                Contact Us
              </div>
              <div className="text-lg font-bold mb-2">聯絡我們</div>
              <div className="border-l-4 border-red-700 pl-4 text-left">
                <div>地址 新北市三重區三德街36號</div>
                <div>電話 02-2857-9933</div>
                <div>傳真 02-2857-0033</div>
              </div>
            </motion.div>
            <iframe
              width="100%"
              height="230"
              className="mb-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.432430931475!2d121.48451629999998!3d25.0872192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8d34f4ab9b1%3A0xff50371c3c2b9789!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5LiJ5b636KGXMzbomZ8!5e0!3m2!1szh-TW!2stw!4v1692607672327!5m2!1szh-TW!2stw"
              allowFullScreen=""
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "10" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.1,
            }}
            className="w-full md:w-9/12 mx-auto"
          >
            <div className="text-base  mb-4">
              感謝您撥空瀏覽本站，若對本公司有任何問題或是洽詢售後服務，
              <br />
              請填寫以下表單，我們將盡快回覆您的訊息，謝謝您的支持！
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mx-auto  text-lg   gap-2"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-center px-3 ">
                    <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap  ">
                      公司名稱
                      <span className="text-xs text-zinc-300"> /</span>
                    </label>
                    <input
                      type="text"
                      className="block w-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                      placeholder=""
                      {...register("company", { required: true })}
                    />
                  </div>
                  <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-center px-3 ">
                    <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap  ">
                      詢問主題
                      <span className="text-xs text-zinc-300"> /</span>
                    </label>
                    <input
                      type="text"
                      className="block w-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                      placeholder=""
                      {...register("subject", { required: true })}
                    />
                  </div>
                  <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-center px-3 ">
                    <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap  ">
                      <span className="text-red-500 mr-1">*</span>
                      姓名
                      <span className="text-xs text-zinc-300"> /</span>
                    </label>
                    <input
                      type="text"
                      className="block w-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                      placeholder=""
                      {...register("name", { required: true })}
                    />
                  </div>

                  <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-center px-3 ">
                    <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap  ">
                      <span className="text-red-500 mr-1">*</span>
                      聯絡電話
                      <span className="text-xs text-zinc-300"> /</span>
                    </label>
                    <input
                      type="text"
                      className="block w-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                      placeholder=""
                      {...register("tel", { required: true })}
                    />
                  </div>
                  <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-center px-3 ">
                    <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap  ">
                      <span className="text-red-500 mr-1">*</span>
                      電子信箱
                      <span className="text-xs text-zinc-300"> /</span>
                    </label>
                    <input
                      type="mail"
                      className="block w-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                      placeholder=""
                      {...register("mail", { required: true })}
                    />
                  </div>
                </div>
                <div className="w-full relative bg-[#ffffff] border border-zinc-300 rounded-2xl flex items-start px-3 ">
                  <label className="block text-base font-medium text-gray-700 mb-1  whitespace-nowrap pt-3  ">
                    <span className="text-red-500 mr-1">*</span>
                    訊息
                    <span className="text-xs text-zinc-300"> /</span>
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    className="block w-full h-full py-3 bg-transparent pl-3   border-0  text-gray-900 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                    placeholder=""
                    {...register("msg", { required: true })}
                  ></textarea>
                </div>
              </div>

              <div className="flex w-1/2 ml-auto gap-2 my-4 justify-end flex-1">
                <button
                  className="border-zinc-500 border px-2 py-3 bg-[#8c2026] rounded-2xl font-bold w-full  text-lg tracking-wide text-[#ffffff]"
                  type="submit"
                >
                  送出
                </button>
                <button
                  className="border-zinc-500 border px-2 py-3 bg-white rounded-2xl font-bold w-full  text-lg tracking-wide text-[#223553]"
                  type="reset"
                >
                  清除
                </button>
              </div>
              <div>
                {error} {mailSent}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
