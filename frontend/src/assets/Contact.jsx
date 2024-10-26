import React from "react";
import { Github, Mail} from 'lucide-react';

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
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
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <Mail className="w-6 h-6 mr-3" />
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
export default Contact;     