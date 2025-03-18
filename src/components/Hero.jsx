import React from 'react'
import Web from '../assets/images/web-dev.jpg'
import Graphics from '../assets/images/graphics.jpg'
import Card from '../assets/images/card-trading.jpg'
import Social from '../assets/images/social-media.jpg'
import AR from '../assets/images/ar-marketing.jpg'
import './Hero.css'; // Add this line to import the CSS file

import { AnimatePresence, easeInOut, motion } from 'framer-motion'

// DEFINITION FOR MOTION 
const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        },
    };
};

const headphoneData = [
    {
        id: 1,
        image: Web,
        title: "Web Development",
        subtitle: "Get a professional, responsive, and user-friendly website tailored for your brand or business, ensuring a sleek design and smooth functionality.",
    },
    {
        id: 2,
        image: Graphics,
        title: "Graphic Designing",
        subtitle: "Creative and high-quality designs, including posters, photo manipulation, and retouching, to enhance visuals and make your brand stand out.",
    },
    {
        id: 3,
        image: Card,
        title: "Card Trading",
        subtitle: "Get the best deals on gift cards, Green Dot cards, Amazon cards, and more with a secure and hassle-free trading process.",
    },
    {
        id: 4,
        image: Social,
        title: "Social Marketing",
        subtitle: "Boost your online presence with real subscribers, followers, views, and likes to grow your brand and engagement effortlessly.",
    },
    {
        id: 5,
        image: AR,
        title: "AR Marketing",
        subtitle: "Make a lasting impression with interactive AR business cards that showcase your brand with engaging digital experiences.",
    },
]

const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);

    const handleActiveData = (data) => setActiveData(data);

    return (
        <section className="home bg-black text-white md:py-8 flex justify-center items-center">
            <div className="container flex flex-col md:flex-row justify-around">
                {/* Headphone Info */}
                <div className='flex flex-col justify-center md:py-0 xl:max-w-[450px]'>
                    <div className='space-y-5 text-center md:text-left'>

                        {/* HEADPHONE TITLE  */}

                        <AnimatePresence mode='wait'>
                            <motion.h1 key={activeData.id}
                                variants={fadeUp(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-3xl lg:text-6xl font-bold  text-[#BEC9C3]'>
                                {activeData.title}
                            </motion.h1>

                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={activeData.id}
                                variants={fadeUp(0.3)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-xl font-medium space-x-2 leading-loose text-white/80'>
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.button key={activeData.id}
                                variants={fadeUp(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                style={{ backgroundColor: activeData.bgColor }}
                                className='px-4 py-2 inline-block font-normal rounded-sm'>

                            </motion.button>
                        </AnimatePresence>

                        {/* Headphones List */}
                        <div className='flex items-center justify-center md:justify-start gap-4 mt-1'>
                            <div className='w-20 h-[1px] bg-white'></div>
                            <p className='uppercase text-sm'>Top Services for you</p>
                            <div className='w-20 h-[1px] bg-white'></div>
                        </div>

                        {/* Headphones List Switch*/}
                        <div className='grid grid-cols-5 gap-4 mb-4'>
                            {headphoneData.map((item) => (
                                <div key={item.id}
                                    onClick={() => handleActiveData(item)}
                                    className='grid grid-cos-2 place-items-center cursor-pointer'
                                >
                                    <div>
                                        <img src={item.image} alt="" className='w-[120px]' />
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>

                {/* Hero Images */}
                <div className='flex flex-col justify-end items-center'>
                    <AnimatePresence mode='wait'>
                        <motion.img key={activeData.id}
                            variants={fadeUp(0.2)}
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 100,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            src={activeData.image} alt="" className='w-[400px] md:w-[400px] xl:w-[500px]' />
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}

export default Hero
