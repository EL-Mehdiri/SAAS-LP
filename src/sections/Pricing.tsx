import SectionHeader from "@/components/sectionHeader";
import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionHeader
          tag="Boost your productivity"
          title="A more effective way to track progress"
          description="Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer."
        />
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:items-end items-center mt-10">
          {pricingTiers.map(
            ({
              title,
              buttonText,
              features,
              inverse,
              monthlyPrice,
              popular,
            }) => (
              <div
                key={title}
                className={`p-10 rounded-3xl max-w-xs w-full  shadow-[0_7px_14px_#EAEAEA] border  ${
                  inverse
                    ? "border-black bg-black text-white"
                    : "border-[#F1F1F1]"
                }  `}
              >
                <div className="flex justify-between">
                  <h3
                    className={`text-lg font-bold ${
                      inverse ? "text-white/60" : "text-black/50"
                    } `}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px] ">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tighter font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={`btn btn-primary ${
                    inverse && "bg-white text-black"
                  } w-full mt-[30px]`}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      className="text-sm flex items-center gap-4"
                      key={feature}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
