import Image from "next/image";
import React from "react";
import svm from "@/public/image.png";

const Home = () => {
  return (
    <div className="bg-gradient-ball from-neutral-500 via-neutral-400 to-neutral-100 min-h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-full h-full pt-36 gap-8">
        <Image
          src={svm}
          width={80}
          height={80}
          alt="Sir M. Vishveshvaraya"
          className="w-60 md:w-80 h-72 md:h-96"
        />
        <h1 className="text-deep-black text-4xl lg:text-5xl font-bold">
          Sir M. Visvesvaraya
        </h1>
        <p className="text-deep-black text-justify text-lg font-semibold lg:text-xl p-4 max-w-[48rem]">
          Sir Mokshagundam Visvesvaraya KCIE FASc, more commonly known as Sir M.
          Visvesvaraya, was an Indian civil engineer, statesman, and scholar who
          served as the Diwan of Mysore from 1912 to 1918. He received India's
          highest honour, the Bharat Ratna, in 1955.
        </p>
      </div>
    </div>
  );
};

export default Home;
