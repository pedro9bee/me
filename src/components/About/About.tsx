import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              With over two decades of experience in backend development, I've had the privilege of working with innovative startups and established enterprises across multiple continents. My journey has taken me from Brazil to Portugal, Canada, and beyond, allowing me to bring a global perspective to every project.
            </p>
            <p className="text-lg mb-6">
              I specialize in building scalable, cloud-native solutions using modern technologies. My approach combines technical expertise with strategic thinking, ensuring that every solution not only meets current needs but is also future-proof.
            </p>
            <p className="text-lg">
              I'm passionate about serverless architecture and container technologies, constantly exploring new ways to optimize and improve system performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;