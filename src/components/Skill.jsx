import React from "react";

const Skill = () => {
    return (
        <div className="flex flex-col flex-1 whitespace-nowrap">
        <div className="flex gap-5 justify-between items-end">
          <div className="flex flex-col flex-1 self-stretch font-bold">
            <div className="text-4xl">Skills</div>
            </div>
        </div>
        <div className="justify-center self-start px-4 py-2.5 mt-5 text-sm font-bold text-white bg-blue-400 rounded-[104.928px]">
          LANGUAGE
        </div>
        <div className="flex gap-5 mt-3.5 text-2xl">
          <div>NodeJS</div>
          <div>Express</div>
          <div>Go</div>
        </div>
        <div className="justify-center self-start px-4 py-2.5 mt-5 text-sm font-bold text-white bg-blue-400 rounded-[104.928px]">
          FRAMEWORK
        </div>
        <div className="flex gap-5 mt-3.5 text-2xl">
          <div>NodeJS</div>
          <div>Express</div>
          <div>Go</div>
        </div>
        <div className="justify-center self-start px-4 py-2.5 mt-5 text-sm font-bold text-white bg-blue-400 rounded-[104.928px]">
          DATABASE
        </div>
        <div className="flex gap-4 mt-3 text-2xl">
          <div>MongoDB</div>
          <div>SQL</div>
          <div>Firebase</div>
        </div>
      </div>
    );
}

export default Skill;
