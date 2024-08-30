import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
    </>
  );
}
