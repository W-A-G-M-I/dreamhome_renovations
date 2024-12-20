import React from "react";
import Hero from "../components/home/hero/Hero";
import Emphasis from "../components/home/emphasis/Emphasis";
import Reason from "../components/home/reasons/Reason";
import Services from "../components/home/our_services/Services";
import Customer from "../components/home/customer/Customer";

const Home = () => {
  return <section>
    <Hero />
    <Emphasis />
    <Reason />
    <Services />
    <Customer />
  </section>;
};

export default Home;
