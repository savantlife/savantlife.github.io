import Nav from "./Nav"
import Footer from "./Footer"
import arrows from "./assets/science/arrows.png"
import multi from "./assets/science/multi.png"
import galaxy from "./assets/science/galaxy.png"
import people from "./assets/science/people.png"
import LUIS from "./assets/LUIS.svg"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Science() {
    return(
        <div className='bg-savant-home w-screen'>
            <Nav></Nav>
        <div className='p-8 pb-2 px-12 text-white'>
            <div className='m-auto text-left'>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className='font-bold text-3xl py-3'>Why Experiential Learning?</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <p className='font-medium text-lg py-1 pb-6'>
            
            Put simply, experiential learning is learning by doing. The current model of experiential learning is guided by David Kolb’s work on learning styles, published in 1984. This model can be succinctly summarized by a pivotal quote from Kolb:

“Learning is the process whereby knowledge is created through the transformation of experience.”

Experiential learning is described by the Kolb learning cycle, pictured below:
 
            </p>
            </AnimationOnScroll>
            <div style={{ backgroundImage:`url(${galaxy})` }} className='bg-savant-home h-full w-full rounded bg-center bg-cover my-3 mb-8 relative'>
        <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='m-auto md:m-0 relative rounded-xl blur-none bg-opacity-100 p-3 w-full rounded-xl z-10'>
            <div className='grid w-full grid-cols-1 md:grid-cols-1'>
            <div className='w-full h-full text-white p-3 m-auto flex flex-col gap-4 bg-opacity-100 rounded-xl flex'>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <img className='h-full object-contain m-auto py-2' src={arrows}></img>
                </AnimationOnScroll>
            </div>
            <div className='w-full h-full'></div>

            </div>
        </div>
            </AnimationOnScroll>

        </div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <p className='font-medium text-lg py-1 pb-3'>
            We chose to focus on experiential learning because it is the most effective way for humans to learn. After Kolb’s initial work on experiential learning, numerous modern studies have repeatedly validated its superiority over other forms of learning.
<br /><br />
In a study done by researchers at Marshall University in 2020, test participants found increased acceptance and remembrance of new concepts, increased attention and engagement as a result of participating in an experiential learning activity.
<br /><br />
Another study by Brickner and Ettner in 2008 found that students learned more effectively and with increased engagement over traditional methods of learning.
<br /><br />
Smart et al. in 2007 similarly found that active experiential learning promotes more effective and engaging learning through experience, as well as increased attention. 
<br /><br />
There is an overwhelming amount of evidence suggesting that experiential learning is more efficient and natural than other methods. The problem Savant aims to solve is: how can we facilitate experiential learning in schools without actually performing the task in real life? This is where virtual reality comes in.

            </p>
            </AnimationOnScroll>
            </div>
        </div>
        <div className='p-8 pb-2 px-12 text-white'>
            <div className='m-auto text-left'>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className='font-bold text-3xl py-3'>Why VR?</h2>
            </AnimationOnScroll>            
            <AnimationOnScroll animateIn="animate__fadeIn">
            <p className='font-medium text-lg py-1 pb-6'>
            VR, or virtual reality, is a computer-generated simulation of a digital three-dimensional environment that can facilitate interaction via equipment such as digital goggles or gloves fitted with sensors. It is the closest digital approximation that we have to real life using current technology. In the future, this technology will only improve, making VR more accessible to the general public. These are our primary reasons for chosing virtual reality as the new medium for human learning.
            <br /><br />
Using VR in education facilitates experiential learning and allows students to be exposed to a wider variety of experiences than offered in real life. The flexibility of a digital world allows for experiences that would be impossible in a regular classroom setting. For instance, you’d never be able to travel between multiple continents in a matter of minutes to take tours of historical sites. In VR, students are able to explore the world on macro or micro scales, which has myriad applications. Imagine taking a tour of a plant cell in biology class from inside the cell! 
<br /><br />
As a supplement to classroom teaching, research within Volume 15 of the Journal of Cognitive Education and Psychology has found that VR enhances creativity, imagination, and application to real life. 
<br /><br />
According to Alrehaili and Osman’s study in 2019, users showed more motivation and engagement when using VR for learning than traditional methods. 
<br /><br />
Shi, Wang, and Ding in 2019 also found that VR supported better learning outcomes and experiences.
<br /><br />
Virtual reality also provides educators far more data to base their teaching on than 2-D learning mediums such as pen and paper, or YouTube videos. The use of virtual reality goggles and other equipment with sensors makes it possible, for the first time in history, to create rudimentary models of students’ attention while they are learning. Formulating such a model is one of Savant's primary objectives, and we believe it can be achieved using the kind of data generated explicitly through students’ use of VR. 
<br /><br />
These are not the only benefits of virtual reality in education. VR also provides access to experiences that persons with disabilities might otherwise never have exposure to. We hope that virtual reality will be used to even the educational playing field and improve equitability at schools.
<br /><br />
Because of this evidence, we feel that virtual reality is the best way to facilitate experiential learning for students. 
            </p>
            </AnimationOnScroll>
            </div>
        </div>
        <div className='p-8 px-12 text-white'>
            <div className='m-auto text-left'>        
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto py-6'>
                <div>
                <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className='font-bold text-3xl py-3'>Why Personalization?</h2>
            </AnimationOnScroll>   
            <AnimationOnScroll animateIn="animate__fadeIn">
            <p className='font-medium text-lg py-1 pb-6'>
            Personalization, also known to educators as differentiation, refers to the creation of a unique learning experience for each student. This is often referred to as the vision of “school for all”, as cited in the Journal of Studies in Educational Policy by Eikeland and Ohna. The goal of differentiation is to make each student’s learning experiences unique to them based on their habits and preferences. This then increases students’ capacity to absorb content, since relating it to existing memories and experiences “anchors” the new knowledge in their mind.
            <br /><br />
There is a real and compelling need for personalization in education. An article from Freund in 2003 highlights that personalization is applied sparsely in classrooms. 
<br /><br />
Differentiation is easier to implement with Savant’s platform, because each student’s personal profile is constantly updated with new information about how they learn and what they are interested in. We then use this data in our machine learning model to maximize students attention and focus during lessons, further increasing their efficacy.
<br /><br />
Moreover, personalization has been shown to be more effective in improving the learning experience for students and overall quality of learning, according to a study by Chen in 2020. It is evident that curriculum and content that is customized and personalized in line with students’ needs fosters knowledge intake and retention. 
            </p>
            </AnimationOnScroll> 
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
            <img className='w-full lg:w-11/12 m-auto w-full lg:h-full rounded-xl object-cover' src={people}></img>
            </AnimationOnScroll>   
            </div>
            </div>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className='w-full m-auto flex items-center justify-center'>
            <div className='w-full flex m-auto items-center justify-center mb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 relative m-auto py-6 pb-0'>
                <div className='m-auto bg-savant-card z-50 rounded-xl h-fit w-full p-8 text-white text-xl'>
                Our research team plans to complete a comprehensive literature review by December 2022.
                </div>
                <img className='lg:m-0 m-auto lg:w-3/4 w-full rounded-xl relative right:0 lg:right-6' src={multi}></img>
            </div>
            </div>
            </div>
            </AnimationOnScroll>   
            <AnimationOnScroll animateIn="animate__fadeIn">
            <Footer></Footer>
        </AnimationOnScroll>
        </div>
    )
}