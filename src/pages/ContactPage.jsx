import React from "react";
import { contacts } from "../constant/api";

import MainLayout from "../layout/MainLayout";
import Footer from "../components/Footer";

const ContactPage = () => {
  const { get, info, button } = contacts;

  return (
    <MainLayout>
      <div
        name="contact"
        className="w-full min-h-screen bg-[#111623] text-white pt-40 lg:pt-60"
      >
        <div className="max-w-xl h-full mx-auto px-5 flex justify-center items-center">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <h1 className="text-5xl font-bold text-center text-[#2ABC7F] ">
              {get}
            </h1>
            <p className="text-center">{info}</p>
            <button className="font-bold px-12 py-3 rounded-lg border border-[#2ABC7F] hover:bg-[#2ABC7F] transition duration-300">
              {button}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default ContactPage;
