type SectionHeaderProps = {
  title: string;
  description: string;
  tag: string;
};

const SectionHeader = ({ title, description, tag }: SectionHeaderProps) => {
  return (
    <div className="max-w-[540px] mx-auto ">
      <div className="flex justify-center">
        <div className="tag">{tag}</div>
      </div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mt-5">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
