import React from "react";
import arrayDestruct from "../../assets/portfoilio/arrayDestruct1.jpg"
import installNode from "../../assets/portfoilio/installNode.jpg"
import navbar from "../../assets/portfoilio/navbar.jpg"
import reactParallax from "../../assets/portfoilio/reactParallax.jpg"
import reactSmooth from "../../assets/portfoilio/reactSmooth.jpg"
import reactWeather from "../../assets/portfoilio/reactWeather.jpg"


const Portfolio = () => {
 const portfolios = [
   {
     id: 1,
     src: arrayDestruct,
   },
   {
     id: 2,
     src: reactParallax,
   },
   {
     id: 3,
     src: navbar,
   },
   {
     id: 4,
     src: reactSmooth,
   },
   {
     id: 5,
     src: installNode,
   },
   {
     id: 6,
     src: reactWeather,
   },
 ];

 const handleDemoClick = (id) => {
  switch (id) {
    case 1:
      window.open("https://namaste-react-chi.vercel.app/", "_blank");
      break;
    // Add more cases for other portfolio items if needed
    default:
      break;
  }
};

const handleCodeClick = (id) => {
  switch (id) {
    case 1:
      window.open("https://github.com/shivaslb72/Namaste-React.git", "_blank");

      break;
    // Add more cases for other portfolio items if needed
    default:
      break;
  }
};

 return (
   <div
     name="portfolio"
     className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
   >
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
       <div className="pb-8">
         <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           Portfolio
         </p>
         <p className="py-6">Check out some of my work right here</p>
       </div>

       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
         {portfolios.map(({ id, src }) => (
           <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
             <img
               src={src}
               alt=""
               className="rounded-md duration-200 hover:scale-105"
               style={{height:"195px",width:"366px"}}
             />
             <div className="flex items-center justify-center">
               <button onClick={() => handleDemoClick(id)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 Demo
               </button>
               <button onClick={() => handleCodeClick(id)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 Code
               </button>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Portfolio;