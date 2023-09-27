"use client";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import RootLayout from "../../app/layout";

require('dotenv').config({ path: '.env.local' });

const MovieFlexContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/MovieFlex.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MovieFlex</h2>
          <h3> Java Spring Boot / API / Postgres </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-800 mb-6">
            This application was built using Java Spring Boot.
          </p>
          <div className="flex space-x-4">
            <a
              href= {process.env.MOVIEFLEX_API_URL}
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/fireclint/twitch-nextjs-tailwind"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-4">
            <p className="text-center font-bold pb-2 text-gray-800">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Next.js
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Tailwind
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> JavaScript
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Next Auth
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> GitHub Auth
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Google Auth
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-blue-500">Back</p>
        </Link>
      </div>
    </div>
  );
};

const MovieFlex = () => {
  return (
    <RootLayout>
      <MovieFlexContent />
    </RootLayout>
  );
};

export default MovieFlex;
