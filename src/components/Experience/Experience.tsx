import React from 'react';
import { Timeline } from 'antd';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <Timeline mode="alternate" className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Timeline.Item key={index}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl">{exp.company}</h3>
                <p className="text-gray-600">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;