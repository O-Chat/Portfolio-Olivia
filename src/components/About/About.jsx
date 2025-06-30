
import profileImg from '../../assets/MyPhoto/Olivia.jpeg'; 


  export default function About() {
    return (
      <div className="flex flex-col md:flex-row gap-x-12 min-h-192  bg-[#1e1e1e] text-white font-mono">
        
        {/* Left Side: Image + Short Bio */}
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center p-8">
          <img
            src={profileImg} 
            alt="Olivia"
            className="w-100 h-100 rounded-full mb-4 border-4 border-green-400 shadow-lg"
          />
          <h2 className="text-3xl font-semibold text-green-400 mb-2">Hi, I'm Olivia!!</h2>
          <p className="text-center text-md text-gray-300">
  A CS undergraduate at IIEST Shibpur with a strong grip on <span className="text-green-400 font-semibold">Data Structures & Algorithms</span> and a love for crafting clean, scalable systems with <span className="text-green-400 font-semibold">Object-Oriented Programming</span>. I enjoy building sleek interfaces with <span className="text-green-400 font-semibold">React.js</span> and diving deep into the logic behind <span className="text-green-400 font-semibold">Cryptographic algorithms</span>. Whether it's designing UIs or decoding ciphers, I'm always ready for a challenge!
</p>

        </div>
  
        {/* Right Side: Academic + Skills + Hobbies */}
        <div className="md:w-3/5 w-full p-8 space-y-6 flex flex-col  justify-center ">
          
          <div>
            <h3 className="text-green-400 text-xl font-semibold mb-2">🎓 Education</h3>
            <ul className="text-gray-300 text-md leading-relaxed list-disc ml-5">
              <li><strong>IIEST Shibpur(West Bengal)</strong> — B.Tech in Computer Science and Technology(2023–2027)<br />Current CGPA: 9.14 (Sem 4)</li>
              <li><strong>Shiv Jyoti Convent School(Kota,Rajasthan)</strong> — Class XII CBSE (2023): 91%</li>
              <li><strong>Smt. Sulochanadevi Singhania School(Thane,Maharashtra)</strong> — Class X ICSE (2021): 98.17%</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-green-400 text-xl font-semibold mb-2">💻 Skills</h3>
            <p className="text-gray-300 text-md">
              C++, C, JavaScript, React.js, Node.js,Express.js, MongoDB, Mongoose, Tailwind CSS
            </p>
          </div>
  
          <div>
            <h3 className="text-green-400 text-xl font-semibold mb-2">🎯 Currently Learning</h3>
            <p className="text-gray-300 text-md">
             Machine Learning Fundamentals
            </p>
          </div>
  
          <div>
            <h3 className="text-green-400 text-xl font-semibold mb-2">🧠 Hobbies</h3>
            <p className="text-gray-300 text-md">
              Drawing, Reading , Debugging , Reading about tech history 
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  
  