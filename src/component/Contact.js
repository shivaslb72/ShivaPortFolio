import React from "react";

const Contact =()=>{
 return(
  <div>
 <div>
  <div>
   <p>Contact</p>
   <p>Submit the from below to get touch with me</p>
  </div>
  <div>
   <form action="">
    <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
    <input type="text" name="email" placeholder="Enter Your email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
    <textarea name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex  items-center rounded-md hover:scale-110 duration-300">Lets talk</button>

   </form>
  </div>
 </div>
  </div>
 )
}

export default Contact