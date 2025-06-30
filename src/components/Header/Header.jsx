import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';


function Header(){
    return(
        <div className="grid grid-cols-3 items-center text-white bg-[#1e1e1e] border-b-1 border-[#3d3c3c] p-1.5 gap-2">
            <div className=" flex items-center gap-1 text-sm overflow-hidden">
                {/* <button className="rounded-md p-1 "> */}
               
                    <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS" 
                    className="h-5 w-auto object-contain" />
                    
                  
                    {/* </button> */}
                <div className=" hidden grid-cols-8 md:grid gap-1 text-sm ">   
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">File</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Edit</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Selection</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">View</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Go</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Run</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Terminal</button>
                <button className="rounded-md p-1 hover:bg-[#3c3c3c] truncate">Help</button>  
                </div>              
            </div>
            <div className="bg-[#3c3c3c]  border-1 rounded-md border-[#5c5959] gap-2 flex items-center justify-center w-full h-full overflow-hidden">
                
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png" 
                    alt="s" 
                    className="h-6 w-6 shrink-0  ">
                    </img>                         */}
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />

                    <p className="truncate text-sm text-center">CodePersona - Olivia Chattopadhyay</p>               
            </div>
            <div className="flex justify-end">
            <Cog6ToothIcon className="h-5 w-5 text-gray-400" />
                {/* <p className="text-sm">Settings</p> */}
            </div>
        </div>
    )
}
export default Header;