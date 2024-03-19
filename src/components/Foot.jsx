import React from "react";

const Footer = () => {

  return (
    <section id="footer">
      <div className="footer__inner">
        <h2 className="footer__title">
          We will
        </h2>
      </div>

      <div className="flex flex-col items-start px-20 text-7xl text-black max-md:px-5 max-md:text-4xl">
        <div className="self-end text-8xl max-md:max-w-full max-md:text-4xl">
          Our Blog Service offer Text To Speach
        </div>
        <div className="mt-20 ml-28 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Target{" "}
        </div>
        <div className="mt-8 ml-40 text-5xl leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        &bull; Users using public transportation
          <br />
          &bull; Driver
          <br />
          &bull; Visually Impaired{" "}
        </div>
        <div className="mt-16 ml-28 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Purpose{" "}
        </div>
        <div className="mt-8 ml-40 text-5xl leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        &bull; The author of the article learns his or her voice so that other users
          can hear their own learned voice.
          <br />
          <br />
          &bull; Additionally, it may be difficult to directly look at the smartphone
          while using public transportation or driving on the way to or from work.
          <br />
          <br />
          &bull; In this case, you can use the audio conversion service to listen to
          various types of texts and acquire various information.
          <br />
        </div>
      </div>
    </section>
  );

}

export default Footer;