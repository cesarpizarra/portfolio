import React from "react";
import { contacts } from "../constant/index";
import Footer from "../components/Footer";

const Contact = () => {
  const { get, info } = contacts;
  const email = "cpizarra002@gmail.com";
  const subject = "Hello from My Website";
  const body = "I'd like to say hello!";

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section data-aos="fade-up" id="contact" className="mt-48 lg:mt-36">
      <div className="max-w-xl mx-auto px-5 flex justify-center items-center ">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 justify-center items-center"
        >
          <h1 className="text-3xl font-bold text-center text-[cyan] ">{get}</h1>
          <p className="text-justify text-white">{info}</p>
          <a href={emailLink}>
            <button className="shadow__btn">Say Hello</button>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
