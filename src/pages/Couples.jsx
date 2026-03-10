import { useState } from "react";
import { useEffect } from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

function Couples() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState([])
  
    useEffect(() => {
      async function getImages() {
        try {
          setLoading(true);
          const res = await fetch(
            "/api/getImages?folder=COUPLES",
            {
              headers: { "Content-Type": "application/json" },
              method: "GET",
            }
          );
          if (!res.ok)
            throw new Error("Failed to fetch the images, please reload");
  
          const data = await res.json();
  
          setImages(data.images);
          console.log(data.images);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      getImages();
    }, []);
  
    return (
      <>
        <Navbar />
  
        <div className="work-section">
          <div className="container">
              <div className="page-heading">
                  <h2>Couples</h2>
              </div>
  
              {loading && <Loading />}
              {!loading && images &&  <Gallery images={images}/>}
          </div>
        </div>
  
        <Footer />
      </>
    );
}

export default Couples
