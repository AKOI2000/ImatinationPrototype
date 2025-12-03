import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Beauty = lazy(() => import("./pages/Beauty"));
const Couples = lazy(() => import("./pages/Couples"));
const Fashion = lazy(() => import("./pages/Fashion"));
const Headshoot = lazy(() => import("./pages/Headshoot"));

function App() {

  
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Works />} />
        <Route path="/portfolio/beauty-photography" element={<Beauty />} />
        <Route path="/portfolio/couples-photography" element={<Couples />} />
        <Route path="/portfolio/fashion-photography" element={<Fashion />} />
        <Route path="/portfolio/headshot-photography" element={<Headshoot />} />
      </Routes>

      {/* <Home /> */}

    </Suspense>
    </>
  )
}

export default App
