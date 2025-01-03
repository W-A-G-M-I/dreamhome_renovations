import messageBot from "../assets/icons/message.svg";
import arrow from "../assets/icons/arrow.svg";
import quote from "../assets/icons/quote.svg";
import x from "../assets/icons/x.svg";
import pin from "../assets/icons/pin.svg";
import send from "../assets/icons/send.svg";
import twitterX from "../assets/icons/twitterX.svg";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
import bot from "../assets/icons/bot.svg";

import heroImage from "../assets/images/heroImage.png";
import interiorImage from "../assets/images/interiorImage.png";
import kitchenImage from "../assets/images/kitchenImage.png";
import emphasisImage from "../assets/images/emphasisImage.png";
import bedroomImage from "../assets/images/bedroomImage.png";
import process1 from "../assets/images/process1.jpg";
import process2 from "../assets/images/process2.jpg";
import process3 from "../assets/images/process3.jpg";
import process4 from "../assets/images/process4.jpg";

export const icons = {
  messageBot,
  arrow,
  quote,
  x,
  pin,
  send,
  twitterX,
  facebook,
  youtube,
  bot,
};

export const images = {
  heroImage,
  interiorImage,
  kitchenImage,
  emphasisImage,
  bedroomImage,
  process1,
  process2,
  process3,
  process4,
};

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const reviews = [
  {
    name: "Sarah Johnson",
    review:
      "The renovation team was incredible! Our kitchen looks amazing and the whole process was smooth and stress-free. Highly recommend their services!",
  },
  {
    name: "Michael Brown",
    review:
      "I'm thrilled with the results of our home extension. The team was professional, punctual, and their attention to detail was outstanding. Our home feels brand new!",
  },
  {
    name: "Emily Davis",
    review:
      "Dream House Renovations exceeded our expectations. They turned our outdated bathroom into a luxurious space. The craftsmanship and design expertise were top-notch!",
  },
];

export const contactDetails = {
  location: "No 3, Lekki Zone 9",
  email: "dhr_info@official.com",
  phone: "0700-000-7000",
};

export const contactTheme = {
  light: "text-charcoal bg-white",
  dark: "text-white bg-charcoal",
};

export const socialLinks = [
  { title: "fb", icon: icons.facebook },
  { title: "youtube", icon: icons.youtube },
  { title: "x", icon: icons.twitterX },
];

export const aboutText =
  "Dream Home Renovations, where your vision becomes reality. We are passionate about transforming spaces and creating stunning homes that reflect your style and needs.";

export const ourProcess =
  "At Dream Home Renovations, we prioritize a seamless experience for our clients. Our process begins with an in-depth consultation to understand your vision and needs.";

export const ourProcessSteps = [
  {
    title: "Initial Consultation",
    imageSrc: images.process1,
    summary:
      "We begin with an in-depth consultation to understand your vision and needs.",
  },
  {
    title: "Design and Planning",
    imageSrc: images.process2,
    summary:
      "Our design team collaborates with you to create detailed plans and visualizations.",
  },
  {
    title: "Construction and Quality Assurance",
    imageSrc: images.process3,
    summary:
      "Our skilled team executes the renovation with precision, maintaining high-quality standards throughout the process.",
  },
  {
    title: "Final Walkthrough and Handover",
    imageSrc: images.process4,
    summary:
      "We conduct a thorough walkthrough to ensure your complete satisfaction before delivering the beautifully renovated space.",
  },
];

export const reasons = [
  {
    title1: "Expert",
    title2: "Craftsmanship",
    description:
      "Our team of skilled professionals brings years of experience and dedication to each project, ensuring the highest quality workmanship.",
  },
  {
    title1: "Personalized",
    title2: "Design",
    description:
      "We believe in creating spaces that reflect your unique style and needs.",
  },
  {
    title1: "Transparent",
    title2: "Process",
    description:
      "From the initial consultation to the final walkthrough, we maintain open communication and transparency.",
  },
  {
    title1: "Customer",
    title2: "Satisfaction",
    description:
      "Your satisfaction is our top priority. We stand behind our work with a comprehensive guarantee, and we’re committed to making sure you are completely happy with the results.",
  },
];
