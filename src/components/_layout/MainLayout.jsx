import { icons } from "../../constants";
import { ChatBot, Footer, Header } from "../_common";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}

      <button className="size-8 bg-tea flex-center fixed bottom-24 right-5 md:right-14 md:bottom-32 border-none rounded-md">
        <img src={icons.arrow} alt="arrow" />
      </button>

      <ChatBot />
      <Footer />
    </>
  );
};

export default MainLayout;
