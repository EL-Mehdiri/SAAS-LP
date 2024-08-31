"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 flex-none pr-14"
          >
            <Image src={acmeLogo} alt="acme" className="logo-ticker-image" />
            <Image
              src={quantumLogo}
              alt="quantum"
              className="logo-ticker-image"
            />
            <Image src={echoLogo} alt="echo" className="logo-ticker-image" />
            <Image
              src={celestialLogo}
              alt="celestial"
              className="logo-ticker-image"
            />
            <Image src={pulseLogo} alt="pulse" className="logo-ticker-image" />
            <Image src={apexLogo} alt="apex" className="logo-ticker-image" />
            {/* 2  */}
            <Image src={acmeLogo} alt="acme" className="logo-ticker-image" />
            <Image
              src={quantumLogo}
              alt="quantum"
              className="logo-ticker-image"
            />
            <Image src={echoLogo} alt="echo" className="logo-ticker-image" />
            <Image
              src={celestialLogo}
              alt="celestial"
              className="logo-ticker-image"
            />
            <Image src={pulseLogo} alt="pulse" className="logo-ticker-image" />
            <Image src={apexLogo} alt="apex" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
