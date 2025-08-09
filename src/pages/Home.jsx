import { useLocation } from "react-router";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Banner from "../Components/Banner";
import Feature from "../Components/Feature";
import Gallery from "../Components/Gallery";
import Counter from "../Components/Counter";
import NewsLatter from "../Components/NewsLatter";
import FaqSection from "./FaqSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToGallery) {
      setTimeout(() => {
        scroller.scrollTo("gallery-section", {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }, 200);
    }
  }, [location.state]);

  return (
    <>
      <Banner />
      <Feature />
      <Counter />
      <div id="gallery-section">
        <Gallery />
      </div>
      <FaqSection />
      {/* <NewsLatter /> */}
    </>
  );
};

export default Home;
