import "./emphasis.css";
import { Btn, TitleDesc } from "../../_common";

const Emphasis = () => {
  return (
    <section className="py-10 md:py-20 md:padded">
      <div className="flex flex-col items-center mx-auto md:flex-row">
        <div className="image h-[300px] w-full  md:w-1/2 bg-[rgba(143,143,143,0.6)] bg-cover bg-top bg-fixed bg-blend-multiply order-last md:order-none border" />

        <article className="flex-col w-full p-5 pb-10 flex-center md:w-1/2">
          <TitleDesc
            title="The Leading Bay Area Remodeling Compoany"
            desc=" I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font."
            titleStyle="font-heading md:text-3xl text-2xl text-charcoal"
            descStyle="text-sm mt-3"
          />

          <Btn
            text="More About Us"
            containerStyle="text-sm flex-center h-10 w-[160px] mt-6 self-start"
          />
        </article>
      </div>
    </section>
  );
};

export default Emphasis;
