import Nav from "./Nav"
import Footer from "./Footer"
import { usePapaParse } from "react-papaparse";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React, { useState, useEffect } from 'react';
import arvr from "./assets/akar-icons_vr-ar.png"
import gaming from "./assets/maki_gaming.png"
import businessplan from "./assets/tabler_businessplan.png"
import SAVANTPHONE from "./assets/SAVANTPHONE.png"
import vrspace from "./assets/vrspace.png"
import deg from "./assets/deg.png"
import vrlogo from "./assets/vrlogo.png"
import producthome from "./assets/product/producthome.png"
import LUIS from "./assets/LUIS.svg"
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
 

export default function App() {
    const embed = window.embed; 
    const {readRemoteFile} = usePapaParse();
    const [data, setData] = useState([]);
    useEffect(() => {
        readRemoteFile(
          "https://rss.app/feeds/VTefrZhjVKAxbL0r.csv",
          {
            complete: (results) => {
              setData(results.data.slice(1, results.data.length));
              console.log(data);
            },
          }
        );
      }, []);
      const posts = data.map((post) =>
      <div key={post[7]} className='flex items-center'>
      <a href={post[7]} className="py-1 px-3 first:pl-6 last:pr-6 rounded-lg">
      <div className="flex flex-col items-center content-center w-96 h-90 m-auto justify-center p-4 leading-normal text-transparent font-bold  bg-clip-text bg-gradient-to-br from-blue-300 to-blue-100 hover:from-blue-600 hover:to-blue-300">
          <div>
          <p className="mb-3 h-fit text-xl">{post[8]}  </p>
          <p className='text-blue-300 font-normal text-sm'>@savant.life on Instagram</p>
          </div>
  </div>
  </a>
   </div>
)
    return (
        <div className='w-screen bg-savant-home'>
        <div className='w-screen bg-savant-home pb-8'>
            <Nav></Nav>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className='grid grid-cols-1 h-2/3 my-6 mb-2 lg:mb-6 w-full lg:grid-cols-2 gap-1 flex justify-center items-center'>
                <div className='w-5/6 md:w-2/3 lg:w-7/12 px-6 text-center py-6 lg:py-12 lg:text-left rounded-xl flex-col space-y-6 justify-center bg-savant-card m-auto'>
                    <h1 className='font-bold text-3xl lg:text-4xl text-white'>Welcome to Savant.</h1>
                    <h2 className='text-xl text-white'>We are an ed-tech startup dedicated to making traditional education more <span className='text-blue-400'>exciting, effective</span> and <span className='text-blue-400'>accessible</span>  through our two products, Savant and MetaWeaver.</h2>
                </div>
                <div className='my-6'>
                <img className='object-fill rounded-xl aspect-square w-5/6 md:w-2/3 lg:w-7/12 h-full m-auto' src={vrlogo}></img>
                </div>
            </div>
            </AnimationOnScroll>
        </div>
        <div className='w-screen bg-savant-info-2 p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 m-auto py-2'>
            <img className='object-cover rounded-xl w-full h-fulitems-center justify-center m-auto max-w-3xl m-auto' src={producthome}></img>
            <div className='text-white p-6 w-full m-auto flex flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-blue-400'>Savant</h1>
            <h2 className='text-xl text-white text-left'>A <span className='text-blue-400'>dynamic</span> platform for students and educators to <span className='text-blue-400'>share</span> and <span className='text-blue-400'>experience</span> virtual reality learning content.</h2>
           <Link to="products">
           <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-32">
                Learn More
            </button>
           </Link>
            </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 m-auto py-2'>
            <div className='order-last lg:order-first text-white p-6 w-full m-auto flex flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-blue-400'>MetaWeaver</h1>
            <h2 className='text-xl text-white text-left'>Our groundbreaking software used to seamlessly <span className='text-blue-400'>create</span> digital learning environments.</h2>
           <Link to="products/metaweaver">
           <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-32">
                Learn More
            </button>
           </Link>
            </div>
            <img className='object-cover rounded-xl w-full h-fulitems-center justify-center m-auto max-w-3xl m-auto' src={vrspace}></img>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 py-2 m-auto'>
            <img className='object-cover rounded-xl w-full h-fulitems-center justify-center m-auto max-w-3xl m-auto' src={SAVANTPHONE}></img>
            <div className='text-white p-6 w-full  m-auto flex flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-blue-400'>Savant Companion App</h1>
            <h2 className='text-xl text-white text-left'>A mobile application for Savant users to track student <span className='text-blue-400'>learning</span> progress, attention levels, exam scores, and other valuable <span className='text-blue-400'>metrics</span>.</h2>
            </div>
            </div>
        </div>
        <div className='w-full bg-savant-home flex-col p-4'>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div>
        <h1 className='font-bold text-5xl text-white text-center p-6 m-auto'><span className='text-blue-400'>How it works</span></h1>
        </div>
        <div className='grid grid-cols-1 text-center m-auto p-6 w-full gap-6 items-center'>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto rounded-xl'>Teachers deliver a live lecture.</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">

        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto rounded-xl'>Teachers transform their lesson into a virtual learning environment using MetaWeaver and publish it on the Savant platform. Anyone can then access the lesson and use it to learn.</h2>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">

        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto rounded-xl'>Teachers assign the learning environment in class or for homework. Students use virtual reality to experience the digital environment, learning from it as they progress through the lesson.</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">

        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto  rounded-xl'>Experiential learning increases students' engagement and attention while improving conceptual understanding and content retention.</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">

        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto  rounded-xl'>Teachers use the Savant companion app to track students' performance through metrics such as attention levels, tiem spent in lessons, and goals met to measure the quality of learning.</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">

        <h2 className='text-xl bg-savant-card text-white p-6 py-5 w-full lg:w-3/4 m-auto  rounded-xl'>Students return to the classroom more prepared, engaged, and excited to learn.</h2>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
        </AnimationOnScroll>
        </div>
            </AnimationOnScroll>
        {/* Instagram*/}
        </div>
        <div className='w-full bg-savant-info-2 flex-col p-4'>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div>
        <h1 className='font-bold text-5xl text-white text-blue-400 text-center p-6 m-auto'>Benefits</h1>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='grid w-full grid-cols-1 lg:grid-cols-2 px-12 m-auto'>
            <div className='w-full h-full'></div>
            <div className='w-5/6 h-full relative text-white p-6 py-10 flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'><span className='text-blue-400'>Enhanced</span> student focus</h1>
            <h2 className='text-xl text-white text-left'>Experiential learning increases <span className='text-blue-400'>engagement</span> and <span className='text-blue-400'>focus</span>, while virtual reality separates students from outside distractions.</h2>
         </div>
         </div>
         </AnimationOnScroll>
         <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='grid w-5/6 py-6 relative lg:bottom-8 lg:left-10 lg:pt-0 grid-cols-1 lg:grid-cols-2 px-12 m-auto'>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Genuinely <span className='text-blue-400'>engaging</span> lessons</h1>
            <h2 className='text-xl text-white text-left'>Students <span className='text-blue-400'>adapt</span> to their learning environment by posing questions and <span className='text-blue-400'>solving</span> problems creatively, fostering higher levels of engagement.</h2>
            </div>
         <div className='w-full h-full'></div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='grid w-full relative lg:bottom-24 lg:pt-0 grid-cols-1 lg:grid-cols-2 gap-1 p-6 pt-2 px-12 m-auto'>
            <div className='w-full h-full'></div>
            <div className='w-5/6 h-full relative text-white p-6 py-10 flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Improved content retention</h1>
            <h2 className='text-xl text-white text-left'>Experiences in virtual reality yield improvements in students' abilities to <span className='text-blue-400'>reflect</span>, <span className='text-blue-400'>abstract</span>, and actively experiment, leading to better retention of learned content.</h2>
         </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='grid w-5/6 mb:0 lg:-mb-32 grid-cols-1 relative lg:bottom-40 lg:left-10 lg:pt-0  lg:grid-cols-2 gap-1 px-12 pb-12 m-auto'>
            <div className='w-full h-full text-white p-6 m-auto flex py-10 flex-col gap-4 bg-savant-card rounded-xl flex'>
            <h1 className='font-bold text-3xl text-white'>Cost-effective teaching</h1>
            <h2 className='text-xl text-white text-left'>Savant will cost just a few dollars yearly, far less than other education methods. We hope that our subscription model will make education more <span className='text-blue-400'>affordable</span> and <span className='text-blue-400'>accessible</span>.</h2>
            </div>
         <div className='w-full h-full'></div>
        </div>
        </AnimationOnScroll>
        </div>
        <div className='grid px-8 pb-6 pt-6 my-12 lg:w-5/6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-auto flex gap-4 text-white'>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full h-full p-4 m-auto flex-col items-center bg-savant-card rounded-xl flex'>
                    <img src={arvr} className='aspect-square w-10 h-10 mb-2 mt-2'></img>
                    <h3 className='w-full text-center '>
                    VR makes learning an <span className='text-blue-400'>experience</span> rather than a chore.
                    </h3>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full h-full p-4 m-auto flex-col items-center bg-savant-card rounded-xl flex'>
                    <img src={deg} className='aspect-square w-10 h-10 mb-2 mt-2'></img>
                    <h3 className='w-full text-center '>
                    Immersive digital worlds keep students <span className='text-blue-400'>focused.</span>
                    </h3>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full h-full p-4 m-auto flex-col items-center bg-savant-card rounded-xl flex'>
                    <img src={gaming} className='aspect-square w-10 h-10 mb-2 mt-2'></img>
                    <h3 className='w-full text-center '>
                    Virtual environments offer <span className='text-blue-400'>more flexibility</span> than real-world teaching.
                    </h3>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='w-full h-full p-4 m-auto flex-col items-center bg-savant-card rounded-xl flex'>
                    <img src={businessplan} className='aspect-square w-10 h-10 mb-2 mt-2'></img>
                    <h3 className='w-full text-center '>
                    Subscription-based models are more <span className='text-blue-400'>affordable</span> than others.
                    </h3>
                </div>
                </AnimationOnScroll>
            </div>
       <AnimationOnScroll animateIn="animate__fadeIn">
            <Footer></Footer>
        </AnimationOnScroll>

        </div>
    )
}