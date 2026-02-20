import React from "react";
import Navbar from "./Navbar";
import FormLayout from "../common/FormLayout";
import InfoLayout from "../common/InfoLayout";
import FooterSection from "./FooterSection";

const FeedBackLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />
      {/* Contenu principal */}
      <main className="flex-1">
        {/* top bar comme l’image */}
        <div className="h-14 bg-[#F5F5F5]">
          {/* Title */}
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold md:text-3xl">
              Get in Touch with Us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-md  text-gray-500">
              the purpose of these text is simulating the description that will
              come after the headline that will catch the users attention
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-10">
          {/* Content */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FormLayout />
            <InfoLayout />
          </div>
        </div>
      </main>

      {/* Footer = partie noire */}
      <FooterSection />
    </div>
  );
};

export default FeedBackLayout;
