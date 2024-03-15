import React from "react";
import Intro from "./Intro";
import Personal from "./Personal";
import Education from "./Education";
import Skill from "./Skill";
import Header from "./Header";

const TeamPage = () => {
    return (
        <div className="space-y-10"> {/* 섹션 간의 수직 간격을 더 넓힘 */}
            <Header />
            <div className="flex space-x-40 flex-mb-30"> {/* 첫 번째 row의 컴포넌트 사이의 수평 간격을 더 넓힘 */}
                <Intro />
                <Personal />
            </div>
            <br></br>
            <div className="flex space-x-12-y-20"> {/* 두 번째 row의 컴포넌트 사이의 수평 간격을 더 넓힘 */}
                <Education />
                <Skill />
            </div>
        </div>
    );
};

export default TeamPage;
