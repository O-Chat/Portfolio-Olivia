
export default function Skills() {
  const dsaSkills = ['C', 'C++'];
  const devSkills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS'];
  const tools = ['Linux', 'Git'];
  const cryptoSkills = [
    'Cryptography Basics',
    'AES',
    'RSA',
    'Digital Signature',
    'Digital Envelope',
    'Digital Certificate'
  ];

  const renderSkillTag = (skill) => (
    <span
      key={skill}
      className="px-3  bg-[#373757] text-blue-200 py-1 m-1 rounded-full text-md font-mono border border-blue-500 hover:bg-blue-500 transition"
    >
      {skill}
    </span>
  );

  return (
    
    <div className="p-8 bg-[#1e1e1e] text-white min-h-screen font-sans ">
      
      <h1 className="text-4xl font-bold mb-6 text-blue-400">💡 SKILLS</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-100">📚  Data Structures and Algorithms</h2>
        <div className="flex flex-wrap">
          {dsaSkills.map(renderSkillTag)}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">🛠️ Web Development</h2>
        <div className="flex flex-wrap">
          {devSkills.map(renderSkillTag)}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-300">📦  Tools & Platforms</h2>
        <div className="flex flex-wrap">
          {tools.map(renderSkillTag)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-purple-300">🔐 Cryptography</h2>
        <div className="flex flex-wrap">
          {cryptoSkills.map(renderSkillTag)}
        </div>
      </div>
    </div>
  );
}
