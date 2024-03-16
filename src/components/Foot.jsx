import React from "react";

const Footer = () => {

  return (
    <section id="footer">
            <div className="footer__inner">
                <h2 className="footer__title">
                    We will
                </h2>
                </div>

        <div className="flex flex-col text-8xl text-black max-md:text-4xl mt-20">
          <div className="flex flex-col self-center px-5 ml-0 max-md:max-w-full max-md:text-4xl">
            <div className="max-md:max-w-full max-md:text-4xl">AI BLOG SERVICE</div>
            <div className="self-start mt-40 ml-36 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              AUDIO READING{" "}
            </div>
            <div className="self-start mt-16 ml-36 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              TEXT & IMAGE{" "}
            </div>
            <div className="self-end mt-24 max-md:mt-10 max-md:text-4xl">
              + text
            </div>
          </div>
          <div className="z-10 mt-0 w-full mix-blend-multiply min-h-[312px] max-md:max-w-full" />
        </div>
                </section>
  );

}

export default Footer;