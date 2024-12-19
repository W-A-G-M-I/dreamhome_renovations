import { ChatBot, Footer, Header } from "../_common";
import Modal from "../_common/Modal";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ChatBot />
      <Footer />
    </>
  );
};

export default MainLayout;
