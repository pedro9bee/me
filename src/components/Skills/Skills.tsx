import React from 'react';
import { Progress } from 'antd';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
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
  );
};

export default Skills;