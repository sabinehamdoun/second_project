import Banner from "@component/app/components/banner";
import Contact from "@component/app/components/contact";
import Footer from "@component/app/components/footer";
import Header from "@component/app/components/header";
import Services from "@component/app/components/services";
import React from "react";

const HomePage = () => {
  return (
    <>
    <Header />
      <Banner
        title={"Welcome to Our Website"}
        subtitle={"Discover our amazing services and products."}
        backImage={"/assets/banner2.jpg"}
      />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
