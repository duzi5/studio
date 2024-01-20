import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Take01.scss";
const Take01 = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#letra-container",
        start: "-30% 30%",
        end: "140% top",
        scrub: 2,
        markers: true,
        pin: ".titulo",
      },
    });
    tl.to("#letra-container", {
      textShadow:
        "text-shadow: 2px 2px 2px rgba(206,89,55,0), -2px -3px 11px rgba(252,255,241,0.49), -2px -3px 15px rgba(252,255,241,0.49), -2px -3px 15px rgba(252,255,241,0.18), -2px -3px 15px rgba(252,255,241,0.18);",
    });

    tl.to(
      "#letra-container",
      {
        color: "#ccd",
        textShadow:
          "12px 12px 12px rgba(206,89,55,0), -12px -13px 21px rgba(252,255,241,0.49), -12px -13px 25px rgba(252,255,241,0.49), -2px -3px 15px rgba(252,255,241,0.18), -2px -3px 15px rgba(252,255,241,0.18)",
        fontSize: "400vw",
      },
      ">"
    );
  }, []);

  return (
    <div className="container">

        <h1 className="titulo">
          Stu<span id="letra-container">d</span>io Catavento
        </h1>

    </div>
  );
};

export default Take01;
