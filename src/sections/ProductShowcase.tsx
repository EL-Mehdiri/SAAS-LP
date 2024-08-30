import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import SectionHeader from "@/components/sectionHeader";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-t overflow-x-clip from-[#ffffff] to-[#D2DCFF] py-24">
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
