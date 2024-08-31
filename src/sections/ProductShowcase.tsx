"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b overflow-x-clip from-[#ffffff] to-[#D2DCFF] py-24"
    >
      <div className="container  ">
        <SectionHeader
          tag="Boost your productivity"
          title="A more effective way to track progress"
          description="Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer."
        />
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid"
            height={262}
            width={262}
            style={{ translateY }}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <motion.img
            src={tubeImage.src}
            alt="tube"
            height={248}
            width={248}
            style={{ translateY }}
            className="absolute hidden md:block bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
