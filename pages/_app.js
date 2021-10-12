import "../styles/globals.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { NavBar } from "../Components/NavBar";

library.add(fab);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-Roboto text-white">
      <Head>
        <title>Farrell Fitness</title>
        <link rel="icon" href="/assets/svg/FF.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
