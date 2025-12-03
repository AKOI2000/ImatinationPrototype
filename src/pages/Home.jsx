import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import HorizontalScroll from "../sections/HorizontalScroll";
import Carousel from "../sections/Carousel";
import Footer from "../sections/Footer";
import { Helmet, HelmetData } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Imatinations Studio | Beauty, Fashion, Couples, and
          Headshot Photographer in Lagos
        </title>

        <meta
          name="description"
          content="Imatinations Studio delivers premium beauty, fashion, couples, and headshot photography in Lagos. Clean lighting, editorial quality, and fast delivery for brands and individuals who want striking, timeless images."
        />

        <meta
          name="keywords"
          content="Lagos photographer, beauty photography Lagos, fashion photographer Nigeria, couples photography, headshot photographer Lagos, Imatinations, Abdulmatin Jimoh"
        />

        <link rel="canonical" href="https://imatinations.com" />

        <meta
          property="og:title"
          content="Imatinations Studio | Lagos Photographer"
        />
        <meta
          property="og:description"
          content="Premium beauty, fashion, couples, and headshot photography with editorial quality and clean visual storytelling."
        />
        <meta property="og:url" content="https://imatinations.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="IMAGE_URL_HERE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Imatinations Studio | Lagos Photographer"
        />
        <meta
          name="twitter:description"
          content="Premium beauty, fashion, couples, and headshot photography done with precision and style."
        />
        <meta name="twitter:image" content="IMAGE_URL_HERE" />
      </Helmet>
      <Navbar />
      <Hero />
      <AboutSection />
      <HorizontalScroll />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
