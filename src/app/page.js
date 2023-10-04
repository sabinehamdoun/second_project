import Banner from "./components/banner";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
