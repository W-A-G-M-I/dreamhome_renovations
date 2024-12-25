import messageBot from "../assets/icons/message.svg";
import arrow from "../assets/icons/arrow.svg";
import quote from "../assets/icons/quote.svg";
import x from "../assets/icons/x.svg";
import pin from "../assets/icons/pin.svg";
import send from "../assets/icons/send.svg";
import twitterX from "../assets/icons/twitterX.svg";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";

import heroImage from "../assets/images/heroImage.png";
import interiorImage from "../assets/images/interiorImage.png";
import kitchenImage from "../assets/images/kitchenImage.png";
import emphasisImage from "../assets/images/emphasisImage.png";
import bedroomImage from "../assets/images/bedroomImage.png";

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
};

export const images = {
  heroImage,
  interiorImage,
  kitchenImage,
  emphasisImage,
  bedroomImage,
};

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const reviews = [
  {
    customerName: "Sarah Johnson",
    customerReview:
      "The renovation team was incredible! Our kitchen looks amazing and the whole process was smooth and stress-free. Highly recommend their services!",
  },
  {
    customerName: "Michael Brown",
    customerReview:
      "I'm thrilled with the results of our home extension. The team was professional, punctual, and their attention to detail was outstanding. Our home feels brand new!",
  },
  {
    customerName: "Emily Davis",
    customerReview:
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
