import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
    	  <div className="absolute w-full h-full">
    	    <div className="absolute w-[1200px] h-[1200px] bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-float-1 top-[-600px] left-[-300px]" />
    	    <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-float-2 bottom-[-500px] right-[-200px]" />
    	    <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-pink-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-3 top-[20%] right-[30%]" />
    	  </div>
    	  <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-white/80 to-purple-50/80 backdrop-blur-sm relative scroll-smooth">
    	    <div className="animate-scroll">
    	      {[...Array(200)].map((_, index) => (
    	        <div key={index} className="p-4 m-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 animate-slide-down animate-bounce-subtle" style={{animationDelay: `${index * 0.05}s`}}>
    	          <div className="flex items-center justify-center space-x-3">
    	            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 animate-pulse">I love you</span>
    	            <div className="flex space-x-1 animate-bounce">
    	              <span className="text-3xl transform hover:scale-125 hover:rotate-12 transition-transform duration-300 animate-beat">❤️</span>
    	              <span className="text-3xl transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 animate-beat-delayed">❤️</span>
    	              <span className="text-3xl transform hover:scale-125 hover:rotate-12 transition-transform duration-300 animate-beat">❤️</span>
    	            </div>
    	          </div>
    	        </div>
    	      ))}
    	    </div>
    	    <style jsx>{`
    	      .animate-scroll {
    	        animation: autoscroll 200s linear infinite;
    	      }
    	      @keyframes autoscroll {
    	        0% {
    	          transform: translateY(0);
    	        }
    	        100% {
    	          transform: translateY(-100%);
    	        }
    	      }
    	      @keyframes slide-down {
    	        0% {
    	          opacity: 0;
    	          transform: translateY(-20px);
    	        }
    	        100% {
    	          opacity: 1;
    	          transform: translateY(0);
    	        }
    	      }
    	      .animate-slide-down {
    	        animation: slide-down 0.5s ease-out forwards;
    	      }
    	      @keyframes float-1 {
    	        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    	        50% { transform: translate(100px, 100px) rotate(180deg) scale(1.1); }
    	      }
    	      @keyframes float-2 {
    	        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    	        50% { transform: translate(-100px, -100px) rotate(-180deg) scale(1.1); }
    	      }
    	      @keyframes float-3 {
    	        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    	        50% { transform: translate(50px, -50px) rotate(90deg) scale(1.1); }
    	      }
    	      @keyframes beat {
    	        0%, 100% { transform: scale(1); }
    	        50% { transform: scale(1.2); }
    	      }
    	      @keyframes bounce-subtle {
    	        0%, 100% { transform: translateY(0); }
    	        50% { transform: translateY(-5px); }
    	      }
    	      .animate-float-1 {
    	        animation: float-1 15s infinite ease-in-out;
    	      }
    	      .animate-float-2 {
    	        animation: float-2 20s infinite ease-in-out;
    	      }
    	      .animate-float-3 {
    	        animation: float-3 17s infinite ease-in-out;
    	      }
    	      .animate-beat {
    	        animation: beat 0.8s infinite;
    	      }
    	      .animate-beat-delayed {
    	        animation: beat 0.8s infinite 0.2s;
    	      }
    	      .animate-bounce-subtle {
    	        animation: bounce-subtle 2s infinite;
    	      }
    	    `}</style>
    	  </div>
    	</div> 
            </div>
  )
}

