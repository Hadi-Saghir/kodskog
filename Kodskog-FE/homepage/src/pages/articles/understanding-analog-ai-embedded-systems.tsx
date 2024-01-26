"use client";
import React from "react";
import RootLayout from "../../app/layout";
import Image from "next/image";

const ArticleContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[20vh] relative">
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/lines.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Embedded Systems</h2>
          <h3> Understanding Analog AI, Currecnt Challenges, and Prospects </h3>
        </div>
      </div>
      <div className="w-screen h-[80vh] relative">
        <iframe
          src="https://medium.com/@hadisaghir00/machine-learning-no-dataset-available-use-the-hustle-strategy-b8b0fcbb51e1?source=friends_link&sk=a277eb6cb19801ec0fb581063d1a0ee2"
          className="w-full h-full absolute inset-0"
        />
      </div>
    </div>
  );
};

const Article = () => {
  return (
    <RootLayout>
      <ArticleContent />
    </RootLayout>
  );
};

export default Article;






