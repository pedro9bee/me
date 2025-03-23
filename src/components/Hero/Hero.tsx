import React from 'react';
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6" style={{
      backgroundImage: 'url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-6">Senior Backend Engineer</h1>
            <p className="text-xl mb-8">20+ years of experience developing scalable solutions with Node.js, AWS, and modern cloud technologies</p>
            <div className="flex items-center mb-6">
              <GlobalOutlined className="mr-2" />
              <span>Portugal (Remote)</span>
            </div>
            <div className="flex space-x-4">
              <Button icon={<LinkedinOutlined />} className="!rounded-button" href="https://linkedin.com" target="_blank">LinkedIn</Button>
              <Button icon={<GithubOutlined />} className="!rounded-button" href="https://github.com" target="_blank">GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;