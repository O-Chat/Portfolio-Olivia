import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";

function Footer(){
    return(
        <div className="bg-[#1e1e1e] border-b-1 border-t-1 border-[#3d3c3c] text-white flex flex-row justify-between">
           
            <a
        href="https://github.com/O-Chat"
        target="_blank"
        className="flex items-center gap-1 text-gray-300 hover:text-blue-400 pl-5 pt-1 pb-1">
         {/* Git Branch SVG Icon */}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75a.75.75 0 01.75.75v1.25a.75.75 0 01-.75.75.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75zM7.5 9.75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM7.5 18a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0v-1.25a.75.75 0 01.75-.75zM7.5 6.75h9M16.5 6.75v4.5m0 0h-9m9 0v6m0 0h-9"/>
        </svg>
        <span className="text-sm">main</span>
      </a>
           
            <div className="flex flex-row item-center pr-5 gap-2">
            <img
    src="./src/assets/JSXLogo/JSX.png"  
    alt="JSX Logo"
    className="h-5 w-5 "/> ReactJS

            </div>
            </div>
    )
}
export default Footer;