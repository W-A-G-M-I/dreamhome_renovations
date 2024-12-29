import { ourProcessSteps } from "../../constants";
import AlbumCard from "./AlbumCard";

function Album() {
  return (
    <section className="flex-wrap lg:flex">
      {ourProcessSteps.map((step, index) => (
        <AlbumCard
          {...step}
          key={step.title}
          orderLast={(index === 0 || index === 1) && true}
        />
      ))}
    </section>
  );
}

export default Album;
