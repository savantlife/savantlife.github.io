import Nav from "./Nav"
import Footer from "./Footer"

import { AnimationOnScroll } from 'react-animation-on-scroll';
import React, { useState, useEffect } from 'react';
import image41 from "./assets/product/image41.png"
import image42 from "./assets/product/image42.png"
import image43 from "./assets/product/image43.png"
import image44 from "./assets/product/image44.png"
import image45 from "./assets/product/image45.png"
import image47 from "./assets/product/image47.png"
import image48 from "./assets/product/image48.png"
import image49 from "./assets/product/image49.png"
import image50 from "./assets/product/image50.png"
import image55 from "./assets/product/image55.png"
import savantspace from "./assets/product/savantspace.png"

import LUIS from "./assets/LUIS.svg"


import "animate.css/animate.min.css";
export default function Products() {
    return (
      <div className='bg-savant-home'>
         <div className='w-screen bg-savant-home pb-8'>
            <Nav></Nav>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className='grid -z-10 grid-cols-1 h-5/6 my-6 mb-2 lg:mb-6 w-full px-10 lg:grid-cols-2 gap-1 flex justify-center items-center'>
                <div className='w-5/6 md:w-2/3 lg:w-7/12 px-6 text-center py-6 lg:py-12 lg:text-left rounded-xl flex-col space-y-6 bg-savant-card m-auto lg:ml-16'>
                    <h1 className='font-bold text-3xl lg:text-4xl text-blue-400'>Savant.</h1>
                    <h2 className='text-xl text-white font-medium'>A <span className='text-blue-400'>dynamic</span> platform for students and educators to <span className='text-blue-400'>share</span> and experience virtual reality learning content.</h2>
                    <h3 className='bg-gray-700 text-white p-3 font-bold rounded-xl w-fit m-auto lg:m-0'>Learn more below</h3>
                </div>
                <div className='my-6'>
                <img className='object-fill w-11/12 h-full m-auto lg:mr-14' src={savantspace}></img>
                </div>
            </div>
            </AnimationOnScroll>
        </div>
    
        <div className='h-full w-screen'>
            
        <div className='h-full w-screen'>
        <div style={{ backgroundImage:`url(${image48})` }} className='bg-savant-home w-screen bg-center bg-cover vh-50  relative'>
            <AnimationOnScroll animateIn='animate__fadeIn'>
            <div className='m-auto md:m-0 relative rounded-xl bg-opacity-100 p-6 w-full z-10'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-home rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Start</h1>
            <h2 className='text-xl text-white text-left'>Students can put on a VR headset and build their personal library with learning content downloaded straight from the cloud. </h2>
            </div>
         <div className='w-full h-full'></div>
                <div className='w-full h-full bg-red-200'></div>
            </div>
        </div>
            </AnimationOnScroll>
        </div>
        <div style={{ backgroundImage:`url(${image47})` }} className='bg-savant-home w-screen bg-center bg-cover vh-50 relative'>
        <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='m-auto md:m-0 relative rounded-xl bg-opacity-100 p-6 w-full z-10'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full'></div>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-home rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Discover</h1>
            <h2 className='text-xl text-white text-left'>Explore the Savant Lobby with personalized content plans and simulated realities. View top courses, trending, and other virtual boards. Choose a desired enviornment and jump into the world!</h2>
            </div>
            </div>
        </div>
            </AnimationOnScroll>

        </div>
        </div>
        <div style={{ backgroundImage:`url(${image49})` }} className='bg-savant-home w-screen bg-center bg-cover vh-50  relative'>
           
        <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='m-auto md:m-0 relative rounded-xl bg-opacity-100 p-6 w-full z-10'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-home rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Survey</h1>
            <h2 className='text-xl text-white text-left'>Once the learning experience is complete, the student will have the ability to rate the course and leave feedback for the course creator. This will encourage the free exchange of information regarding improvements that the course creator can then tailor with our MetaWeaver tool.  </h2>
            </div>
         <div className='w-full h-full'></div>
                <div className='w-full h-full'></div>
            </div>
        </div>
            </AnimationOnScroll>
           

        </div>
        <div style={{ backgroundImage:`url(${image50})` }} className='bg-savant-home bg-center w-screen bg-cover vh-50  relative'>
        <AnimationOnScroll animateIn='animate__fadeIn'> <div className='m-auto md:m-0 relative rounded-xl bg-opacity-100 p-6 w-full z-10'>
            <div className='grid w-full grid-cols-1 relative  md:grid-cols-2'>
            <div className='w-full h-full'></div>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-home rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Customize</h1>
            <h2 className='text-xl text-white text-left'>Our platform will be dynamic, constantly providing new information, experiences, and recommendations based on what the students has accessed and common trends that the platform has learned.</h2>
            </div>
            </div>
        </div>
        </AnimationOnScroll>
        </div>
        <div className='bg-savant-home w-screen m-auto'>
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className='w-screen m-auto bg-savant-home p-2 pt-12'>
            <h1 className='font-bold w-11/12 text-3xl lg:text-4xl text-center m-auto text-white'><span className='text-blue-400'>Unlimited</span> environments to discover, explore, and learn from.</h1>

            </div>
        </AnimationOnScroll>
        </div>
        <div className='grid grid-cols-1 bg-savant-home md:grid-cols-3 px-6 pb-3 md:pb-6 gap-3 m-auto w-full'>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image41} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>Astronomy</h2>
                    <h3 className='w-full text-center'>
                    Zoom through the vastness of space and explore the planets, stars, and galaxies within the universe.                    </h3>
                    </div>
                </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image44} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>Chemistry</h2>
                    <h3 className='w-full text-center'>
                    Experiment and study the molecular phenomena of chemicals safely and without restriction.                    </h3>
                    </div>
                </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image45} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>Biology</h2>
                    <h3 className='w-full text-center'>
                    Traverse the diverse forms of life, from the simplest of cells to the most complex of organisms.</h3>                    </div>
                </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image42} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>Literature</h2>
                    <h3 className='w-full text-center'>
                    Watch your stories come to life, living them in first person as the plot unfolds.                    </h3>
                    </div>
                </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image43} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>History</h2>
                    <h3 className='w-full text-center'>
                    Explore the past by traveling back through time.                    </h3>
                    </div>
                </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='h-full p-4 m-auto content-center flex-col items-center flex'>
                    <img src={image55} className='h-1/2 w-full rounded-xl object-cover mb-2 mt-2'></img>
                    <div className='bg-savant-card rounded-xl flex flex-col text-white space-y-2 m-auto p-6 mt-2'>
                    <h2 className='text-blue-400 text-center text-xl font-bold'>Art</h2>
                    <h3 className='w-full text-center'>
                    Discover new and current mediums for art in 3D, and learn about its past. </h3>                    </div>
                </div>
        </AnimationOnScroll>
        </div>
        <div className='bg-savant-home'>
        <AnimationOnScroll animateIn="animate__fadeIn">
            <Footer></Footer>
        </AnimationOnScroll>
        </div>
        </div>

      </div>
    );
  }