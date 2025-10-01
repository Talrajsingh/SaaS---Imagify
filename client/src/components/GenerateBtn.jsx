import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

    const {user,setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

     const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  return (
    <motion.div initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
     className='flex flex-col items-center justify-center my-24 py-12'>
      <h1 className='font-semibold md:text-3xl text-2xl lg:text-4xl mb-2 mt-4 md:py-16 py-6 text-neutral-800 '>See the magic. Try now</h1>
       <button onClick={onClickHandler}
       className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'>Generate Images
            <img src={assets.star_group} alt=""  className='h-6'/>
            </button>
    </motion.div>
  )
}

export default GenerateBtn
