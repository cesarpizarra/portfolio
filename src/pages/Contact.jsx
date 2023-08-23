import React from "react";
import { contacts } from "../constant/index";
import Footer from "../components/Footer";
const Contact = () => {
  const { get, info } = contacts;

  return (
    <section id="contact">
      <div className="max-w-xl h-screen mx-auto px-5 flex justify-center items-center ">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 justify-center items-center"
        >
          <h1 className="text-3xl font-bold text-center text-[cyan] ">{get}</h1>
          <p className="text-justify text-white">{info}</p>
          <button className="shadow__btn"> Say Hello</button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
