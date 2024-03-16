import React from "react";

import banner from "../assets/img/Banner.png";

const Banner = () => {
    return (
        <section id="intro">
                <div class="img">
                        <img src={banner} alt="배너이미지" />
                    </div>
        </section>
    );
};

export default Banner;