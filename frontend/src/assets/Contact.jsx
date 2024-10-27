import React from "react";
import { BiLogoDevTo } from "react-icons/bi";
import { Github, Mail, Linkedin} from 'lucide-react';

const Contact = () => (
    <section id="contact" className="py-20 bg-orange-200">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Wish to Collaborate? Fell free to get in touch ...</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col space-y-6">
            <a 
              href="https://github.com/skanenje" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <Github className="w-6 h-6 mr-3" />
              github.com/skanenje
            </a>
            <a 
              href="mailto:swapomuse@gmail.com"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <Mail className="w-6 h-6 mr-3" />
              swapomuse@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/swabri-musa-565350291/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <Linkedin className="w-6 h-6 mr-3" />
              https://www.linkedin.com/in/swabri-musa/
            </a>
            <a 
              href="https://dev.to/skanenje" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <BiLogoDevTo className="w-6 h-6 mr-3" />
              dev.to/skanenje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
export default Contact;     