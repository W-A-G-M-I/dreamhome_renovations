import React from "react";
import { TitleDesc } from "../_common";
import { ourProcess } from "../../constants";

function Midddletext() {
  return (
    <div className="py-10 padded">
      <TitleDesc
        containerStyle="text-center"
        title="Our Process"
        titleStyle="text-2xl lg:text-[40px] font-heading mb-4"
        desc={ourProcess}
        descStyle="text-sm lg:text-lg"
      />
    </div>
  );
}
export default Midddletext;
