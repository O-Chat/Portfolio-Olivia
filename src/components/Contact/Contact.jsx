
  export default function Contact() {
    return (
      <div className=" text-green-400 bg-[#1e1e1e] font-mono p-6 text-sm md:text-3xl">
        <pre>
  {`{ 
  "name": "Olivia Chattopadhyay",`}
        </pre>
        <pre>
          {`  "phone": `}
          <a href="tel:+919356528461" className="text-blue-400 hover:underline">
            "+91-9356528461"
          </a>
          {`,`}
        </pre>
        <pre>
          {`  "email": `}
          <a href="mailto:olivia.chat2005@gmail.com" className="text-blue-400 hover:underline">
            "olivia.chat2005@gmail.com"
          </a>
          {`,`}
        </pre>
        <pre>
          {`  "linkedin": `}
          <a
            href="https://linkedin.com/in/olivia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            "https://linkedin.com/in/olivia"
          </a>
          {`,`}
        </pre>
        <pre>
          {`  "github": `}
          <a
            href="https://github.com/O-Chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            "https://github.com/O-Chat"
          </a>
          {`,`}
        </pre>
        <pre>
          {`  "instagram": `}
          <a
            href="https://instagram.com/olivia_ig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            "https://instagram.com/olivia_ig"
          </a>
        </pre>
        <pre>{`}`}</pre>
      </div>
    );
  }
  
  