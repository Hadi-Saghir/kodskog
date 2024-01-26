"use client";
import React from 'react';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#84735b]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Fyaril'
            backgroundImg="/assets/projects/Fyaril.png"
            projectUrl='/projects/FyarilSearchEngine'
            tech='Azure / Docker / Microservices / TensorFlow'
          />
          <ProjectItem
            title='The Digital Hub'
            backgroundImg="/assets/projects/DigiMentors.png"
            projectUrl='https://digimentor.uni.mau.se'
            tech=' Wordpress / Microsoft Platforms'
            openInNewTab
          />
          <ProjectItem
            title='Smart Coffee Machine'
            backgroundImg="/assets/projects/SmartCoffee.png"
            projectUrl='/projects/SmartCoffeeMachine'
            tech=' Docker / Hosting / MQTT / Micropython / NodeRED'
          />
          <ProjectItem
            title='MovieFlex'
            backgroundImg="/assets/projects/MovieFlexImg.png"
            projectUrl='/projects/MovieFlex'
            tech=' Java Spring Boot / Postgres / Web services'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
