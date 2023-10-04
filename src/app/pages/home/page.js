import Banner from "@component/app/components/banner";
import Contact from "@component/app/components/contact";
import Services from "@component/app/components/services";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner
        title={"Welcome to Our Website"}
        subtitle={"Discover our amazing services and products."}
        backImage={"/assets/banner2.jpg"}
      />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
