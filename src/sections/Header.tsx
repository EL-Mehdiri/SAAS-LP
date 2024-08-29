import Image from "next/image";
export const Header = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <div className="inline-flex gap-1 items-center">
        <p>Get started for free</p>
        <div className="h-4 w-4 inline-flex justify-center items-center">
          <Image
            width={4}
            height={4}
            src={"../assets/arrow-right.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
