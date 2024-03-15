import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col flex-1 self-end mt-20 max-md:mt-10">
      <h1 className="text-6xl text-black max-md:text-4xl">
        Choi <br /> SeongJoon
      </h1>
      <div className="shrink-0 mt-8 bg-blue-300 h-[15px] rounded-[104.928px] w-[84px]" />
      <p className="mt-8 text-4xl text-zinc-800">
        Hello there, I'm a
        <br />
        <span className="font-bold text-zinc-800">Fullstack dev</span>
        <br />
        Based in Korea
        <br />
      </p>
    </section>
  );
}

export default Intro
