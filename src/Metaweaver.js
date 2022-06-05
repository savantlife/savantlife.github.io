import Nav from "./Nav"
import Footer from "./Footer"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import img2 from "./assets/metaweaver/img2.png"
import img8 from "./assets/metaweaver/img8.png"
import img3 from "./assets/metaweaver/img3.png"
import mwstreet from "./assets/metaweaver/mwstreet.png"
import img1 from "./assets/metaweaver/img1.png"
import img5 from "./assets/metaweaver/img5.png"
import LUIS from "./assets/LUIS.svg"

import img4 from "./assets/metaweaver/img4.png"
import img6 from "./assets/metaweaver/img6.png"

export default function Metaweaver() {
    return(
        <div className='bg-savant-home w-screen'>
            <Nav></Nav>
            <div className='grid grid-cols-1 h-5/6 my-6 lg:mb-6 w-full lg:grid-cols-2 gap-1 flex justify-center items-center'>
            <AnimationOnScroll animateIn="animate__fadeIn">

                <div className='w-11/12 lg:w-3/4 lg:order-last px-6 text-center py-6 lg:py-12 lg:text-left rounded-xl flex-col space-y-6 bg-savant-card m-auto lg:ml-16'>
                    <h1 className='font-bold text-3xl lg:text-4xl text-blue-400'>Metaweaver.</h1>
                    <h2 className='text-xl text-white'>The versatile Metaverse world creation tool to bring your envisioned lesson plan to life. </h2>
                </div>
                </AnimationOnScroll>
                <div className='my-6 mb-1'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <img className='object-fill -z-10 relative w-11/12 p-3 h-full m-auto lg:mr-14' src={img2}></img>
                </AnimationOnScroll>
                </div>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn">

            <div className='p-6 text-white mb-6 w-11/12 lg:w-3/4 m-auto bg-savant-card rounded-xl text-lg'>
            MetaWeaver is Savant’s <span className='text-blue-400'>uniquely</span> designed world creation 
software that is compatible to the main platform. Educators have 
the luxury to use this <span className='text-blue-400'>intuitively</span> modeled tool in creating their 
VR lessons to be hosted on Savant.   
            </div>
            </AnimationOnScroll>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 flex justify-center m-auto w-full p-3 px-6'>
               <div>
               <AnimationOnScroll animateIn="animate__fadeIn">

                <div className='bg-savant-card rounded-xl p-6 text-white pl-6'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='font-bold text-md py-2'>
HOW IT WORKS                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='font-bold text-4xl'>
                Start creating an educational 
environment with a template.                 </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='py-2 text-xl'>
                Have total autonomy to design your VR interactive lesson 
beginning with a blank canvas, using a default 
world, or access a pre-seeded world that can be 
further customized.
                </div>
                     </AnimationOnScroll>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <img className='py-4 w-full left-0 lg:left-16 top-0 lg:top-2 z-10 relative' src={img8}></img>
                </AnimationOnScroll>
</div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full relative'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <img className='h-full w-full p-6 py-1 pr-0 lg:pr-12 rounded-xl object-cover' src={img3}></img>
                    </AnimationOnScroll>
</div>
                </AnimationOnScroll>
            </div>
            <div className='vh-50 py-6 mb-12'>
            <div style={{ backgroundImage:`url(${mwstreet})` }} className='bg-savant-home h-full w-screen bg-center bg-cover my-3 relative'>
        <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='m-auto md:m-0 relative rounded-xl bg-opacity-100 p-8 w-full z-10'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full text-white p-6 m-auto flex py-8 flex-col gap-4 bg-savant-card-2 bg-opacity-100 rounded-xl flex'>
            <h2 className='text-xl text-white text-left'>
            MetaWeaver’s 3D source library allows you to customize
the perfect virtual reality environment for any lesson and 
subject.
<br></br><br></br>
Reach levels of realism by altering weather, infastructure, 
and achieve learning goals by adding NPC’s and tools for 
students to interact with.                 </h2>
            </div>
            <div className='w-full h-full'></div>

            </div>
        </div>
            </AnimationOnScroll>

        </div>
            </div>
          
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 flex justify-center m-auto w-full p-3 px-6'>
                <div>
                <AnimationOnScroll animateIn="animate__fadeIn">
<div className='font-bold text-white text-4xl'>
Adding Animation
</div></AnimationOnScroll>
<AnimationOnScroll animateIn="animate__fadeIn">
 <div className='py-2 text-white text-xl pb-4'>Finish off the world creation process with added motion, bringing the environment to life!</div>
 </AnimationOnScroll>
                <div className='text-white pl-6 bg-savant-card rounded-xl p-6 text-lg'>
                
<AnimationOnScroll animateIn="animate__fadeIn">
Adding animation to objects, people, or infrastructure taken from our 3D open source library will set the VR learning experience into motion.                     </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                     <img className='py-4 w-full relative left-0 lg:left-12 z-10' src={img6}></img>
                     </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full'><img className='p-4 xl:pr-12  w-full py-0 relative lg:bottom-2 rounded-xl object-cover' src={img5}></img></div>
                </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <h1 className='font-semibold text-3xl text-white text-center p-10 m-auto'>This <span className='text-blue-400'>easy</span> to use software enables <span className='text-blue-400'>every educator</span> to create beautiful, <span className='text-blue-400'>engaging</span> lessons.</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <img className='w-full object-cover' src={img4}></img>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <Footer></Footer>
        </AnimationOnScroll>
        </div>
    )
}