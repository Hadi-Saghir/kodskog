"use client";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import RootLayout from "../../app/layout";

const MovieFlexContent = () => {
  const movieFlexUrl = process.env.NEXT_PUBLIC_MOVIEFLEX_URL;
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <img
          className="absolute z-1 w-full h-full object-cover"
          src="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/MovieFlexImg.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MovieFlex</h2>
          <h3> Java Spring Boot / Postgres / Web services </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-800 mb-6">
            This game was built originally using Java Spring Boot
          </p>
          <div className="flex space-x-4">
            <a
              href="https://movieflex.hadisaghir.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/Hadi-Saghir/kodskog/tree/main/Kodskog-MovieFlex"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out">
                Code
              </button>
            </a>
          </div>
          <p className="text-gray-800 mb-6">
            <br />
            The original application was built as part of the course web
            services course at Malmö University with the following team:
          </p>
          <ul>
            <li>
              <a href="https://github.com/havaeng"> Anthon Haväng </a>
            </li>
            <li>
              <a href="https://github.com/patriknotvincent">
                {" "}
                Vincent Parik Westlund{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/Majdshikh"> Majd Shikh Mohamad </a>
            </li>
            <li>
              <a href="https://github.com/Avokjart"> Slobodanka Trajkova </a>
            </li>
          </ul>
          <p className="text-gray-800 mb-6">
            <br />I dove into CI/CD pipelines, cloud services, and
            provisioning/orchestration by deploying a game on AWS, playing
            around with Docker and Kubernetes for kicks. Then, I decided to
            level up the game's look by redoing the UI in React, in order to
            sharpen my web dev skills.{" "}
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-4">
            <p className="text-center font-bold pb-2 text-gray-800">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Java Spring
                Boot
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> HTML
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> JavaScript
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> CSS
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Spotify API
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> (O/I)MDB
                API
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> React
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Docker &
                Kubernetes
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> AWS &
                Vercel
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
