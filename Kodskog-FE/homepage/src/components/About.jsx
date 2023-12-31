"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest justify-normal text-[#84735b]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <div className="py-2 text-gray-600">
            Hey there! I'm Hadi, a tech enthusiate on a journey through the tech universe. It all began in 2020 while I was studying IT in Business, and since then, I've been on a relentless quest for innovative solutions and endless learning.
          </div>

          <div className="py-2 text-gray-600">
            Along this exciting journey, I've ventured into diverse realms of the tech world, from crafting embedded systems to orchestrating elegant system architectures. I've explored the wonders of artificial intelligence and machine learning, dabbled in the art of data analysis, and delved deep into the intricate world of databases, among other pursuits. I aim to be a master of machine learning and a jack of many tech trades.
          </div>

          <div className="py-2 text-gray-600">
            Collaboration is at the heart of tech development, and I take pride in being a team player with strong leadership skills when the situation demands. I value the input and ideas of my colleagues and work closely with stakeholders to ensure successful project delivery.
          </div>
          
          <div className="py-2 text-gray-600">
            To stay at the forefront of the ever-evolving field of full stack development, I'm committed to continuous learning. I stay updated with the latest trends and technologies through extensive reading, hands-on experimentation, and real-world applications. My ultimate goal is to master the realm of machine learning while continuing to craft efficient code and architectural solutions for complex systems. I aspire to contribute to the advancement of technology and leave a tangible impact on the industry.
          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="relative w-full h-auto shadow-xl shadow-gray-400 rounded-xl overflow-hidden">
          <div className="aspect-w-12 aspect-h-20">
            <Image
              src="/assets/About.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
