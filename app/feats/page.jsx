// "use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

import blockSystem from "@/public/block-system.png";
import muddy from "@/public/muddy.png";
import college from "@/public/college.png";
import economic from "@/public/economic.png";

const FeatOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Block system of Irrigation
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Providing benefits of irrigation over a large number of villages and
        populations in each village within blocks.
      </p>
    </div>
  );
};

const FeatTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">"muddy and discoloured"</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Solved the problem of "muddy and discoloured" water in Sukkur, located
        on the banks of the Indus.
      </p>
    </div>
  );
};

const FeatThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Government Engineering College in Bengaluru
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Founded the Government Engineering College in Bengaluru, a prestigious
        institution later renamed as University of Visvesvaraya College of
        Engineering in his honour.
      </p>
    </div>
  );
};

const FeatFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Economic Planning</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        He is widely recognized as an early advocate and practitioner of
        Economic Planning in India, called the Visvesvaraya Plan, which he
        presented in a book titled “Planned Economy in India”.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <FeatOne />,
    className: "md:col-span-2",
    thumbnail: blockSystem,
  },
  {
    id: 2,
    content: <FeatTwo />,
    className: "col-span-1",
    thumbnail: muddy,
  },
  {
    id: 3,
    content: <FeatThree />,
    className: "col-span-1",
    thumbnail: college,
  },
  {
    id: 4,
    content: <FeatFour />,
    className: "md:col-span-2",
    thumbnail: economic,
  },
];

const FeatsPage = () => {
  return (
    <div className="bg-gradient-ball from-neutral-500 via-neutral-400 to-neutral-100 min-h-screen w-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
};

export default FeatsPage;
