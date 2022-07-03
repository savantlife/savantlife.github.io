import Nav from './Nav'
import Footer from "./Footer"
import rut from './assets/team/rut.png'
import oliver from './assets/team/oliver.png'
import sunny from './assets/team/sunny.png'
import brianna from './assets/team/brianna.png'
import deshik from './assets/team/deshik.png'
import chai from './assets/team/chai.png'
import claudia from './assets/team/claudia.png'
import neha from './assets/team/neha.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



export default function Team() {
    return(
        <div className='bg-savant-home w-screen'>
            <Nav></Nav>
            <div className='p-3 px-8'>
            <h2 className='font-bold text-3xl py-3 text-white text-center'>About Us</h2>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='m-auto w-fit bg-savant-card p-6 px-12 text-white my-4 rounded-xl'>
                    <h1 className='font-bold text-2xl text-center p-1 py-3'>Our Mission and Vision</h1>
                    <h2 className='font-medium text-xl text-center p-1'>Our mission is to <span className='text-blue-400'>revolutionize</span> the way educational content is delivered.
                    </h2>
                    <h2 className='font-medium text-xl text-center p-1'>                    We envision a world with <span className='text-blue-400'>immersive</span>, <span className='text-blue-400'>engaging</span>, and <span className='text-blue-400'>effective</span> education.

                    </h2>
                </div>
                </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className='w-full lg:w-5/6 rounded-xl p-6 m-auto text-white my-6'>
            <h1 className='font-bold text-2xl text-center p-1 py-3'>C-Team</h1>
            <div className='flex flex-row space-x-5 m-auto w-full pt-4'>
            <div className='m-auto w-1/3 space-y-2 flex flex-col'>
                    <img src={sunny} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2'>
                    Srujanesh <br></br>Gunda      
                    </h2>
                    <h3 className='font-medium text-md text-gray-300 m-auto text-center'>CEO</h3>
                    <a href="https://linkedin.com/in/srujaneshgunda">
                    <h3 className='font-medium text-md hover:font-bold text-gray-100 m-auto text-center'>LinkedIn</h3>
                    </a>
                </div>
                <div className='bg-savant-info-2 w-2/3 m-auto text-white text-md overflow-y-auto p-6 rounded-xl h-48'>
                Srujanesh is an experienced leader in education. He first co-founded and was president of a national community health company to improve medical education for the community in 2016, working with the New Jersey State Legislature to pass a community education bill titled “Assembly Bill A4484: the Student Samaritan Initiative”. Srujanesh is also a certified instructor by the AHA and ASHI in emergency medicine education. Srujanesh is also a former tutor, helping students ace subjects with deep conceptual understanding in middle school and high school subjects with a stellar track record among his students. After 5 years of teaching, Srujanesh moved into the ed-tech space as a researcher and designer to help move education forward with more experimental methods. With the Rutgers Consulting Group, Srujanesh provided actionable recommendations for Soochak, an ed-tech startup based in Bihar as an analyst. Selected for the prestigious Menon Labs (now Hyphen) Ed-Tech Fellowship, Srujanesh and his team built a prototype to use a machine learning algorithm within a mobile app product to help make learning more engaging and effective for students in Sierra Leone, in partnership with Rising Academies, an international startup with several locations in Africa. Srujanesh and his team were also recently selected for the competitive Steelcase Social Innovation Fellowship to address Equity in Education, building a tool to help students succeed academically in college. 
                </div>
            </div>
            <div className='flex flex-row space-x-5 w-full pt-4'>
            <div className='m-auto w-1/3 space-y-2 flex flex-col'>
                    <img src={neha} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2'>
                    Neha <br />Karnam     
                    </h2>
                    <h3 className='font-medium text-md text-gray-300 m-auto text-center'>COO</h3>
                    <a href="https://www.linkedin.com/in/nehakarnam/">
                    <h3 className='font-medium text-md hover:font-bold text-gray-100 m-auto text-center'>LinkedIn</h3>
                    </a>
                </div>
                <div className='bg-savant-info-2 w-2/3 m-auto text-white text-md overflow-y-auto p-6 rounded-xl h-48'>
                Neha is currently pursuing technology consulting, and has a diversified and well-rounded skilset in regards to cases and the business world through preperation from Rutgers Consulting Group. She is an Incoming Indirect Sounrcing Intern at L'Oréal for Summer of 2022 and IBM Accelerate Participant on the Consulting Track, She holds numerous e-board positions within the business and tech sector of Rutgers Business School. For example Business Information Tech Society, Rutgers Enactus, and the the Consulting Analyst Program. She has also participated in pro-bono consulting cases and a Product Management fellowship. 
                </div>
            </div>
            <div className='flex flex-row space-x-5 w-full pt-4'>
            <div className='m-auto w-1/3 space-y-2 flex flex-col'>
                    <img src={oliver} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2'>
                    Oliver <br />Kisza      
                    </h2>
                    <h3 className='font-medium text-md text-gray-300 m-auto text-center'>CFO</h3>
                    <a href="https://www.linkedin.com/in/oliver-kisza-8b1795193/">
                    <h3 className='font-medium text-md hover:font-bold text-gray-100 m-auto text-center'>LinkedIn</h3>
                    </a>

                </div>
                <div className='bg-savant-info-2 w-2/3 m-auto text-white text-md overflow-y-auto p-6 rounded-xl h-48'>
                Oliver currently works at a proprietary trading firm designing, developing and deploying algorithmic trading strategies in financial markets. He is also pursuing a degree in finance with a concentration in Statistics at Rutgers University. Oliver provides financial consulting services to clients regarding estate planning, monthly budgeting, and tax efficiency. He enjoys playing tennis in his spare time, having spent more than six years coaching children and adults of all ages to prepare for and succeed at state and national level tournaments. Oliver is incredibly passionate about unique opportunities for improving the lives of many people, especially through innovations in new technologies.
                </div>
            </div>
           
            <div className='flex flex-row space-x-5 w-full pt-4'>
            <div className='m-auto w-1/3 space-y-2 flex flex-col'>
                    <img src={claudia} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2'>
                    Claudia <br />Santacruz         
                    </h2>
                    <h3 className='font-medium text-md text-gray-300 m-auto text-center'>CRO</h3>
                    <a href="https://www.linkedin.com/in/claudia-santacruz-3b1613222/">
                    <h3 className='font-medium text-md hover:font-bold text-gray-100 m-auto text-center'>LinkedIn</h3>
                    </a>

                </div>
                <div className='bg-savant-info-2 w-2/3 m-auto text-white text-md overflow-y-auto p-6 rounded-xl h-48'>
                Claudia is an honors student at Rutgers New Brunswick studying Cognitive Science. Claudia has mentorship experience both in academia and for University equity and inclusion in programs aiding underrepresented college students. She has determined work within the field of cognitive neuroscience including a research fellowship based on her study proposal of the integration of experiential learning within the education system. Claudia currently is pursing an internship working with stakeholders at Prophet consultancy company based in NY, with the goal of targeting Neurodiversity within the community at Rutgers. She possesses the skills and mindset of an innovator in her field with an active membership in the Innovation, Design and Entrepreneurship Academy at Rutgers.
                </div>
            </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">

            <div className='rounded-xl p-6 m-auto text-white my-6'>
            <h1 className='font-bold text-2xl text-center p-1 py-3'>Members</h1>

            <div className='items-center justify-center m-auto grid grid-cols-2 w-full lg:w-3/4 gap-4 pt-4 md:grid-cols-2 justify-center lg:grid-cols-4'>
            <div className='m-auto space-y-3 flex flex-col justify-center'>
                    <img src={chai} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2 p-1 pb-2'>
                    Chaitanya <br></br>Kadimisetty      
                    </h2>
                </div>
                <div className='m-auto space-y-3 flex flex-col justify-center'>
                    <img src={deshik} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2 p-1 pb-2'>
                    Deshik <br></br>Iyengar      
                    </h2>
                </div>
                <div className='m-auto space-y-3 flex flex-col justify-center'>
                    <img src={rut} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2 p-1 pb-2'>
                    Rut <br />Mehta 
                    </h2>
                </div>
                <div className='m-auto space-y-3 flex flex-col justify-center'>
                    <img src={brianna} className='rounded-xl aspect-square m-auto'></img>
                    <h2 className='font-medium text-xl m-auto text-center pt-2 p-1 pb-2'>
                    Brianna <br />Lischy         
                    </h2>
                </div>
            </div>
            </div>
            </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <Footer></Footer>
        </AnimationOnScroll>
        </div>
    )
}