import React, { useState } from 'react'
import homeimg from '../../images/home.jpeg'
import banner from '../../images/banner.png'
import keyimg from '../../images/key-removebg-preview.png'
import profilepic from '../../images/profile1.png'

const AboutUs = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [feedback,setFeedback] = useState('')
    const handleSubmit = async(e) => {
        try {
            const res = await fetch('/api/Feedback',{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                Name:name,
                Email:email,
                feedback:feedback
            }), 
        })
        if(!res.ok){
            throw new Error("Somethign went Wrong")
        }
        alert("Feedback Send Sucessfully")
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
  return (
    <div className='pb-30'>
        <div class="bg-gradient-to-t from-[#8ED87B] to-[#DBEED6] h-[400px] text-center flex items-center justify-center">
        <div>
        <p class="text-4xl font-bold">About Us</p>
        <p class="md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis commodi assumenda eum perferendis? <br/>Quaerat dicta commodi eaque unde architecto asperiores repellendus quos deleniti cumque quod. <br/> Reprehenderit, temporibus. Et, modi laborum!</p>
        </div>
     </div>
     <div class="md:flex justify-around">
        <div class="p-10 text-center">
            <p class="text-4xl font-bold underline">Who We Are</p><br/>
            <p class="md:text-xl">
                 Welcome to <strong>Nestify</strong> — your trusted partner in discovering the perfect place to call home. <br/> 
                With over a decade of proven expertise in the real estate industry, we take pride in helping <br/>
                individuals and families navigate the journey of home ownership and rental with confidence. <br/> 
                At Nestify, we specialize in seamlessly connecting buyers, sellers, and renters with properties<br/>
                 that not only meet their needs but also align with their dreams and financial goals. Whether <br/> 
                 you're searching for your first home, looking to sell a property, or seeking a rental that fits your <br/>
                 lifestyle, our team is committed to making your experience smooth, transparent, and rewarding.
                </p>
        </div>
        <div class="mr-10">
            <img class="md:h-100" src={homeimg} alt=""/>
        </div>
     </div>
     
     <div class="relative">
        <img class="w-full md:h-70 h-80 opacity-20" src={banner} alt=""/>
        <div class="md:flex justify-around items-center absolute right-0 left-0 top-0">
            <img class="max-md:mt-5" src={keyimg} alt=""/> 
        <div>
            <p class="text-center md:text-xl ">Our mission is to simplify the property journey by <br/>
                providing transparent, reliable, and customized <br/>
                solutions that suit every lifestyle. Whether you are <br/>
                looking  for your first apartment, a luxurious villa, or <br/>
                commercial space, our expert agents are here to <br/>
                guide you every step of the way.</p>
        </div>
        </div>
     </div>

     <div class="md:flex justify-around items-center mt-10">
        <div>
            <p class="text-4xl font-bold underline text-center">Feedback</p><br/>
            <p class="text-center md:text-xl">At NESTIFY, your satisfaction is our top priority. <br/>
                Whether you had a great experience or believe <br/>
                there's room for improvement, your feedback 
                helps <br/>us grow and serve you better. Please
                take a few <br/> moments to share your thoughts.
                Your insights <br/> help us enhance our products, 
                improve our services,<br/>and create an even better 
                experience for all our customers.</p>
        </div>
        <div class="bg-[#DBEED6] md:w-120 p-10 space-y-3 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit}>
            <p>Name :</p>
            <input class="outline w-[90%] h-10 pl-5 bg-white" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Name"/>
            <p>Emai :</p>
            <input class="outline w-[90%] h-10 pl-5 bg-white" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
            <p>Comment :</p>
            <textarea class="outline w-[90%] h-20 pl-5 bg-white" value={feedback} onChange={(e)=>setFeedback(e.target.value)} placeholder="Max 500 Characters"></textarea>
            <button class="bg-[#095B15] text-white text-lg p-2 ml-35 rounded-lg" type="submit">Submit</button>
            </form>
        </div>
     </div>
     {/* <span class="text-4xl font-bold underline flex justify-center mt-10">User Feedback</span>
     <div class="grid md:grid-cols-2 mt-5 p-5 md:ml-10 gap-5">

      <div class="md:w-200 w-73 p-3 shadow-2xl">
        <div class="flex space-x-4">
          <img class="h-12 rounded-full" src={profilepic} alt=""/>
          <p class="font-bold">Rahul Nair <br/><span class="font-normal">February 22, 2025</span></p>
        </div>
          <p>The property listing was accurate and the agent was very responsive. Had a smooth experience from viewing to finalizing!</p>
      </div>
     </div> */}
    </div>
  )
}

export default AboutUs