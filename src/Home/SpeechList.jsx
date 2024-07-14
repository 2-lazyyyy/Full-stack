import React, {useState} from 'react'
import { motion } from 'framer-motion'


function SpeechList({name="Name",role="Student",para}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.li 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            initial={{opacity:0.5,background:"#fff"}}
            whileHover={{opacity:1,background:"#F0F8FF"}} 
            className='px-[10%] py-[4%] text-[#1C1D20]'
    >
        <div className='flex items-center'>
            <div className='flex-grow w-1/6'>
              <div className="h-[115px] w-[116px] rounded-[32px] bg-black opacity-20"></div>
            </div>
            <div className='flex-grow ms-[30px] w-5/6'>
                <div className='flex justify-center items-center'>
                    <div className="w-[80%]">
                    <svg width="50" height="50" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.31579 27.375L10.1053 16.625H0V0.625H20.2105V16.625L13.4211 27.375H3.31579ZM30.3158 27.375L37.1053 16.625H27V0.625H47.2105V16.625L40.4211 27.375H30.3158Z" fill={hover ? "#3798A6" :"#1C1D20"} fill-opacity={hover?"1" : "0.5"}/>
                    </svg>
                    </div>
                    <div className="w-[20%] text-end text-[#1C1D20]">
                        <div className={`text-[32px] font-[400] ${hover ? 'text-[#3798A6]': ''}`}>{name}</div>
                        <div className='text-[20px] font-[400] text-[#1C1D2080]'>{role}</div>
                    </div>
                </div>
                <div className='mt-[5px] text-justify text-[20px] leading-[30px] font-[400]'>{para}</div>
            </div>
            
        </div>
    </motion.li>
  )
}

export default SpeechList