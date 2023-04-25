"use client";
import React,{useState} from 'react'
import { useForm, reset } from "react-hook-form";
import { motion } from "framer-motion";
function Contact() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      subject:"",
      name:"",
      company:"",
      tel: "",
      mail: "",
      msg: "",
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = '/assets/sendsee.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div 
      className='w-full  min-h-screen  relative bg-center bg-no-repeat bg-cover text-zinc-900 bg-fixed'
      style={{backgroundImage: `url(${'/images/bg05.png' })`}}
    >

      <motion.div className='flex w-full justify-center items-center  min-h-screen flex-col relative pt-14 md:pt-0'>
        <div className='flex flex-col md:flex-row w-full md:w-9/12 gap-10 items-center'>
          <div className="w-full md:w-1/2">
            <iframe width="100%" height="400" className="mb-10" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.564674461039!2d121.4714928!3d25.0462488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e628bbffe7dfd71!2z5YWI5ZeH5a6u!5e0!3m2!1szh-TW!2stw!4v1659426132137!5m2!1szh-TW!2stw" allowFullScreen=""/>
          </div>
          <motion.div 
            initial={{ opacity: 0,y:'10' }}
            animate={{ opacity: 1,y:0 }}
            transition={{
              ease: "easeInOut",
              duration: .6,
              delay: 0.1,
            }}
            className='w-9/12 mx-auto md:w-1/2'>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto  text-lg  rel" data-aos="fade-up" data-aos-duration="1500" >
                <div className='w-full  my-2 '>
                  <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                      px-2 py-2 " placeholder="詢問主題"   {...register("subject", { required: true})}/>
                </div>
                <div className='w-full  my-2 '>
                  <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                      px-2 py-2 " placeholder="姓名"   {...register("name", { required: true})}/>
                </div>
                <div className='w-full  my-2 '>
                  <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900  w-full
                      px-2 py-2 " placeholder="公司名稱"   {...register("company", { required: true})}/>
                </div>
                <div className='w-full  my-2 '>
                  <input type="text" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full 
                      px-2 py-2 " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                </div>
                <div className='w-full my-2 '>
                  <input type="mail" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                      px-2 py-2 " placeholder="電子信箱"   {...register("mail", { required: true})}/>
                </div>
                <div className='w-full my-2 '>
                  <textarea name="" id="" cols="10" rows="3" className="block bg-transparent border-b-2 border-zinc-900 placeholder:text-zinc-900 w-full
                      px-2 py-2 " placeholder="請輸入訊息" {...register("msg", { required: true})}></textarea>
                </div>

                <div className='flex w-3/4 mx-auto gap-10 my-10'>
                  <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='submit'>送出</button>
                  <button className='border-zinc-900 border px-2 py-3  font-bold w-full  text-lg tracking-wide text-[#223553]' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </motion.div>
        </div>
        
        <motion.div 
        initial={{ opacity: 0,y:'10' }}
        animate={{ opacity: 1,y:0 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.5,
        }}
        className=' relative md:absolute my-6  md:my-0 md:bottom-5 left-0 md:left-5 text-lg'>
          <div className='text-xl mb-5'>新北市三重區三德街36號</div>  
          <div className='border-l-4 border-red-700 pl-4 text-left'>
            <div>電話 02-2857-9933</div> 
            <div>傳真 02-2857-0033</div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Contact