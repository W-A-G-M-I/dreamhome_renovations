import React from "react";
import { reviews } from "../../../constants";
import ReviewCard from "./ReviewCard";

const Customer = () => {
  return (
    <section className="py-10 bg-faint md:py-20 padded">
      <h2 class="font-heading text-2xl md:text-[40px] text-charcoal text-center">
        Satisfied Customers
      </h2>

      <div className="mt-14 md:flex-apart gap-x-10">
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.name} />
        ))}
      </div>
    </section>
  );
};

export default Customer;
