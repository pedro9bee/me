// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Progress, Timeline, message } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [form] = Form.useForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.a addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (values: any) => {
    message.success('Thank you for your message! I will get back to you soon.');
    form.resetFields();
  };

  const skills = [
    { name: 'Node.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'AWS', level: 92 },
    { name: 'CDK', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 87 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-gray-800 font-semibold text-xl">Pedro Lemos</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 cursor-pointer">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 cursor-pointer">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 cursor-pointer">Experience</a>
            <Button type="primary" className="!rounded-button bg-blue-600 text-white hover:bg-blue-700">Contact Me</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern abstract technology background with subtle blue gradient and flowing lines, perfect for a tech professional portfolio hero section background&width=1440&height=800&seq=1&orientation=landscape&flag=dea479ff0f4492ad8e5a6df70d41fe2e)',
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://public.readdy.ai/ai/img_res/26f04829c5862a793058a1e5c92dbbbb.jpg"
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress percent={skill.level} showInfo={false} strokeColor="#3498DB" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          <Timeline mode="alternate" className="max-w-4xl mx-auto">
            <Timeline.Item>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl">TUI Group</h3>
                <p className="text-gray-600">2023 - Present</p>
                <p className="mt-2">Developed microfrontend solutions for 18+ markets, implemented Lambda functions with BFF, achieved 70%+ test coverage</p>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl">Reflaunt</h3>
                <p className="text-gray-600">2022 - 2023</p>
                <p className="mt-2">Created AWS infrastructure, integrated multi-market systems via API/SFTP</p>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl">Yandeh</h3>
                <p className="text-gray-600">2021</p>
                <p className="mt-2">Led development team, implemented Infrastructure as Code with Terraform</p>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Form form={form} onFinish={handleContactSubmit} layout="vertical">
                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input placeholder="Your Name" size="large" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                  <Input placeholder="Your Email" size="large" />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                  <Input.TextArea placeholder="Your Message" rows={4} />
                </Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="!rounded-button">
                  Send Message
                </Button>
              </Form>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailOutlined className="text-blue-600 mr-3" />
                    <span>pedro9bee@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneOutlined className="text-blue-600 mr-3" />
                    <span>+351 925 534 747</span>
                  </div>
                  <div className="flex items-center">
                    <GlobalOutlined className="text-blue-600 mr-3" />
                    <span>Portugal (Remote)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

