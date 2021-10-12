import "../styles/globals.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";

library.add(fab);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-Roboto text-white bg-black">
      <Head>
        <title>
          Farrell Fitness {pathname !== "/" ? "|" : ""}{" "}
          {pathname.substring(1).charAt(0).toUpperCase() +
            pathname.substring(2)}
        </title>
        <link rel="icon" href="/assets/svg/FF.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
