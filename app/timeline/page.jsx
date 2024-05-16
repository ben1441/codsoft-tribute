import React from "react";

const timelines = [
  {
    title: "Birth",
    date: "15 September 1861",
    description:
      "Visvesvaraya was born on 15 September 1861 in Muddenahalli village in the Kingdom of Mysore (now in Karnataka, India).",
  },
  {
    title: "Education",
    date: "1881",
    description:
      "He completed his BA from Central College, Bangalore, and pursued civil engineering at College of Science, Pune.",
  },
  {
    title: "Career",
    date: "1884",
    description:
      "He started his career as an Assistant Engineer at the Public Works Department of Bombay and later joined the Indian Irrigation Commission.",
  },
  {
    title: "Diwan of Mysore",
    date: "1912",
    description:
      "He served as the Diwan of Mysore from 1912 to 1918 and was instrumental in the development of Mysore state.",
  },
  {
    title: "Bharat Ratna",
    date: "1955",
    description:
      "He received India's highest honour, the Bharat Ratna, in 1955 for his contributions to the nation.",
  },
];

const TimelinePage = () => {
  return (
    <div className="bg-gradient-ball from-neutral-500 via-neutral-400 to-neutral-100 min-h-screen w-screen">
      <div className="pt-36 pb-10 flex flex-col items-center justify-center min-h-screen w-full">
        {timelines.map((timeline, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <div className="bg-white/30 p-2 w-80 md:w-[30rem] rounded-xl backdrop-blur">
              <h1 className="text-deep-black text-2xl font-bold">
                {timeline.title}
              </h1>
              <p className="text-neutral-950 text-lg">{timeline.date}</p>
              <p className="text-neutral-950 text-lg">{timeline.description}</p>
            </div>
            <div
              className={
                index != timelines.length - 1 ? "w-1 h-16 bg-white" : ""
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
