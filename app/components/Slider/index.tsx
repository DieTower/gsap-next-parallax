"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ReactNode, Children, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export const Slider = ({ children }: Props) => {
  const container = useRef(null);
  const length = Children.count(children);
  const childrens = Children.toArray(children);
  const main = childrens.shift();

  useGSAP(
    () => {
      childrens.map((_children, index) => {
        gsap.to(`#child-${index}`, {
          scrollTrigger: {
            trigger: `#container-${index}`,
            toggleActions: "restart pause reverse none",
            start: "top bottom",
            end: "center center",
            scrub: true,
            markers: true,
          },
          y: "-100%",
          duration: 3,
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`w-full h-[${length * 100}vh]`}>
      <div className="fixed w-full min-h-screen">
        <div className="absolute top-0 w-full h-screen">{main}</div>
        {childrens.map((children, index) => (
          <div
            key={index}
            id={`child-${index}`}
            className={`absolute -bottom-[100vh] left-0 w-full h-screen`}
          >
            {children}
          </div>
        ))}
      </div>
      <div className="w-full min-h-screen"></div>
      {childrens.map((_children, index) => (
        <div
          key={index}
          id={`container-${index}`}
          className="w-full min-h-screen"
        >{`container-${index}`}</div>
      ))}
    </div>
  );
};
