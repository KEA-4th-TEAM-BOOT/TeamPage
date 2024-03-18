import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { memberText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Member = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    const teamPaths = ['/moon', '/song', '/seung', '/seul', '/gyu', '/seong']

    return (
        <section id="member" ref={horizontalRef}>
            <div className="member__inner">
                <h2 className="member__title">
                    Member
                </h2>
                <div className="member__wrap">
                    {memberText.map((port, key) => (
                        <article
                            className={`member__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a
                                href={port.code}
                                target="_blank"
                                className="img"
                                rel="noreferrer noopener"
                            >
                                <div className="bg-white rounded-3xl aspect-square min-h-[269px] flex justify-center items-center" >
                                <img src={port.img} alt={port.name} className="w-[300px] h-[300px]"  />
                                </div>
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="role">{port.role}</p>
                            <Link
                               to={teamPaths[key]}
                                className="site"
                                rel="noreferrer noopener"
                            >
                                사이트 보기
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Member;