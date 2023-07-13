import React from "react";
import { contacts } from "../constant/api";
import MainLayout from "../layout/MainLayout";
import Footer from "../components/Footer";

const Contact = () => {
  const { get, info } = contacts;

  return (
    <MainLayout>
      <div name="contact" className="w-full h-screen bg-[#111623] text-white">
        <div className="max-w-xl h-full mx-auto px-5 flex justify-center items-center">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <h1 className="text-5xl font-bold text-center text-[#2ABC7F] ">
              {get}
            </h1>
            <p className="text-center">{info}</p>
            <button className="button text-white"> Say Hello</button>
          </div>
        </div>

        <Footer />
      </div>
    </MainLayout>
  );
};

export default Contact;
