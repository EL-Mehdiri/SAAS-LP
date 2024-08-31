import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import Socialinsta from "@/assets/social-insta.svg";
import Sociallinkedin from "@/assets/social-linkedin.svg";
import Socialpin from "@/assets/social-pin.svg";
import Socialyoutube from "@/assets/social-youtube.svg";

import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:blur before:bottom-0  before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center  gap-6 mt-6 ">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <a href="#">Carears</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <Socialinsta />
          <Sociallinkedin />
          <Socialpin />
          <Socialyoutube />
        </div>
        <p className="mt-6">&copy; 2023 SaaS. All rights reserved.</p>
      </div>
    </footer>
  );
};
