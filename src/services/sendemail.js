import axios from "axios";

const sendMail = async (options, url = "/send-mail") => {
  try {
    await axios.post(`/api${url}`, options);
    console.log("good");
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
