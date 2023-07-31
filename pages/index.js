import Header from "../components/header";
import HeroContainer from "../components/hero-container";
import PropertiesByArea from "../components/properties-by-area";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import FooterContainer from "../components/footer-container";
import Head from "next/head";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your dream home" />
      </Head>
      <div className="relative bg-gray-white w-full  flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <HeroContainer />
        <PropertiesByArea />
        <AreaPropertiesContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <FooterContainer />
      </div>
    </>
  );
};

export default LandingPage;
