import axios from "axios";

const sendMail = async (options) => {
  try {
    await axios.post("/api/", options);
    console.log("good");
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
