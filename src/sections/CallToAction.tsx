"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip py-24"
    >
      <div className="container text-center">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            style={{
              translateY,
            }}
            src={starImage.src}
            alt="star"
            width={360}
            className="absolute -left-[400px] -top-[137px] hidden md:block"
          />
          <motion.img
            src={springImage.src}
            style={{
              translateY,
            }}
            alt="spring"
            width={360}
            className="absolute -right-[350px] -top-[19px] hidden md:block"
          />
        </div>
        <div className="flex justify-center gap-1 items-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
