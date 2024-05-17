import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import order from "@/public/order.png";
import honary from "@/public/honary.png";
import fellowship from "@/public/fellowship.png";
import president from "@/public/president.png";
import knight from "@/public/knight.png";
import ratna from "@/public/ratna.png";

const AwardOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Order of the Indian Empire
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Visvesvaraya was appointed a Companion of the Order of the Indian Empire
        (CIE) in 1911 by King Edward VII.
      </p>
    </div>
  );
};

const AwardTwo = () => {
  return (
    <div className="">
      <p className="font-bold text-4xl text-white">Knight Commander</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Visvesvaraya was knighted as a Knight Commander of the Order of the
        Indian Empire (KCIE) by King George V for his contributions to the
        public good.
      </p>
    </div>
  );
};

const AwardThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Bharat Ratna</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        After India attained independence, Visvesvaraya received the Bharat
        Ratna, India's highest civilian honour, in 1955.
      </p>
    </div>
  );
};

const AwardFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Honary Membership</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        He received an honorary membership from the Institution of Civil
        Engineers, London
      </p>
    </div>
  );
};

const AwardFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Fellowship</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        He received a fellowship from the Indian Institute of Science, Bangalore
      </p>
    </div>
  );
};

const AwardSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">President</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        He was the president of the 1923 session of the Indian Science Congress.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <AwardOne />,
    className: "md:col-span-2",
    thumbnail: order,
  },
  {
    id: 2,
    content: <AwardTwo />,
    className: "col-span-1",
    thumbnail: honary,
  },
  {
    id: 3,
    content: <AwardThree />,
    className: "col-span-1",
    thumbnail: knight,
  },
  {
    id: 4,
    content: <AwardFour />,
    className: "md:col-span-2",
    thumbnail: ratna,
  },
  {
    id: 5,
    content: <AwardFive />,
    className: "col-span-1",
    thumbnail: fellowship,
  },
  {
    id: 6,
    content: <AwardSix />,
    className: "md:col-span-2",
    thumbnail: president,
  },
];

const AwardsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-ball from-neutral-500 via-neutral-400 to-neutral-100 min-h-screen portrait:h-screen w-screen py-20">
      <LayoutGrid cards={cards} />
      <p className="text-neutral-950">click on the image</p>
    </div>
  );
};

export default AwardsPage;
