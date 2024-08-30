import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-t overflow-x-clip from-[#ffffff] to-[#D2DCFF] py-24">
      <div className="container  ">
        <div className="max-w-[540pc] mx-auto ">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress{" "}
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src={tubeImage}
            alt="tube"
            height={248}
            className="absolute hidden md:block bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
