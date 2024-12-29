import { reasons } from "../../../constants";
import ReasonCard from "./ReasonCard";

const Reason = () => {
  return (
    <section class="bg-white py-20 padded">
      <h2 className="text-2xl text-center font-heading md:text-[40px]">
        Why Choose Us
      </h2>

      <div className="items-start mt-10 space-y-6 md:mt-24 md:space-y-0 md:flex">
        {reasons.map((reason) => (
          <ReasonCard {...reason} key={reason.title1} />
        ))}
      </div>
    </section>
  );
};

export default Reason;
