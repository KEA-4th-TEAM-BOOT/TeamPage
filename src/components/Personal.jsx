import React from "react";

const Personal = () => {
    const socialLinks = [
        {
          url: "https://github.com/JoonJun-e",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/15e4e53459838d7fcc8e34850f7a3426d12ba5bdd5ad1b01dde7bd3985b99026?apiKey=a9a9d68966df47cab33790d709ea20f1&",
        },
      ];
    return (
        <div className="flex flex-col flex-1 pl-12 my-auto text-xl font-bold text-white whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-col self-end pt-20 pr-16 pb-10 max-w-full bg-blue-500 rounded-full w-[375px] max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1444cb72cea36e64bd4a7abf99e1f1eeb789d86cff637c324c3bd168266a35?apiKey=a9a9d68966df47cab33790d709ea20f1&"
          alt="Profile"
          className="self-end mt-2 max-w-full aspect-[1.03] w-[205px]"
        />
        <div className="justify-center self-start px-11 py-4 bg-blue-300 shadow-lg rounded-[104.928px] max-md:pr-7 max-md:pl-5 max-md:max-w-full">
          joooonn522@gmail.com
        </div>
      </div>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3.5 px-6 py-1 bg-blue-300 shadow-lg rounded-[104.928px] max-md:flex-wrap max-md:px-5"
        >
          <img
            loading="lazy"
            src={link.icon}
            alt="Social Icon"
            className="shrink-0 aspect-[0.98] w-[41px]"
          />
          <span className="flex-auto my-auto">{link.url}</span>
        </a>
      ))}
    </div>
  );
}

export default Personal