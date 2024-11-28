import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
      <div className="max-w-2xl text-gray-600 text-center">
        <p className="mb-4">
          Hi, I'm <span className="text-gray-900 font-semibold">[Your Name]</span>, a passionate developer with a love for crafting modern and responsive web applications. My journey into web development started with a curiosity about how the internet works and has since grown into a full-fledged passion for creating beautiful and functional digital experiences.
        </p>
        <p className="mb-4">
          I specialize in <span className="font-medium text-gray-800">React, TypeScript, and modern front-end frameworks</span>. Beyond coding, I enjoy exploring new technologies, solving problems, and continuously learning to stay ahead in this dynamic field.
        </p>
        <p>
          When I'm not coding, you can find me [insert hobbies/interests like "reading, hiking, or experimenting with photography"].
        </p>
      </div>
    </div>
  );
};

export default About;
