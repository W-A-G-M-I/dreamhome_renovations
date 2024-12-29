import { aboutText } from "../../constants";
import { TitleDesc } from "../_common";

function CenteredText() {
  return (
    <div className="py-10 lg:py-20 flex-center padded">
      <TitleDesc
        title="About Dream Home Renovations"
        desc={aboutText}
        containerStyle="text-center w-full max-w-[800px]"
        titleStyle="font-heading mb-4 text-2xl lg:text-[40px] text-charcoal"
        descStyle="text-sm lg:text-lg leading-relaxed"
      />
    </div>
  );
}
export default CenteredText;
