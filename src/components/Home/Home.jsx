  
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-center items-center p-4 border-2 border-blue-300 text-white  bg-gradient-to-b from-[#1a1a1a] via-[#2e2e2e] to-[#1a1a1a] ">

      {/* Left: Main Text & Button */}
      <div className="flex flex-col items-start w-full pl-10 pr-10  ">
        <h1 className="text-4xl lg:text-8xl font-bold bg-clip-text text-blue-300  animate-none break-words whitespace-normal">
          Olivia Chattopadhyay
        </h1>
        <h2 className="text-2xl lg:text-4xl mt-4 text-gray-300 tracking-wide">
          3rd Year B.Tech Computer Science Student
       </h2>

        
        <button
          onClick={() => navigate('/contact')}
          className="mt-8 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
        >
          Let's Contact 
        </button>
      </div>

      {/* Right: Vertical line + tagline */}
      {/* <div className="flex items-center justify-center pl-5">
        <div className="hidden lg:flex h-50 border-l-2 border-gray-500 mr-6 "></div>
       
        <p className="hidden md:flex text-xl md:text-2xl text-yellow-300 mt-6 font-mono">
        <Typewriter
         words={['Passionate Coder 💻', 'Tech Explorer 🌐', 'Lifelong Learner 🌟']}
         loop={false}
         cursor
         cursorStyle="_"
         typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
        />
</p>

      </div> */}
    </div>
  );
}
