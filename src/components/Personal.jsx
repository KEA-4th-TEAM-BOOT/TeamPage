import React from "react";

const Personal = ({ person }) => {
  return (
    <div className="flex flex-col pl-12 text-xl font-bold text-white whitespace-nowrap max-w-[485px] max-md:pl-5">
      <div className="flex flex-col items-center self-end pt-20 pb-10 bg-blue-500 rounded-full aspect-square w-[375px] max-md:pr-5 relative">
        <div className="relative overflow-hidden aspect-[1.03] w-[205px]">
          <img
            loading="lazy"
            src={person.img}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="justify-center self-start px-11 py-4 bg-blue-300 shadow-lg rounded-[104.928px] max-md:pr-7 max-md:pl-5 max-md:max-w-full mt-4">
          {person.email}
        </div>
      </div>
      <a
        href={person.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3.5 px-4 py-1 bg-blue-300 shadow-lg rounded-[104.928px] max-md:flex-wrap max-md:px-5"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e4e53459838d7fcc8e34850f7a3426d12ba5bdd5ad1b01dde7bd3985b99026?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          alt="Social Icon"
          className="shrink-0 aspect-[0.98] w-[41px]"
        />
        <span className="flex-auto my-auto">{person.github}</span>
      </a>
    </div>
  );
};

export default Personal;
