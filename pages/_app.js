import "../styles/globals.css";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";
import NavBar from "../Components/NavBar";

library.add(fab);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>
          Farrell Fitness {pathname !== "/" ? "|" : ""}{" "}
          {pathname.substring(1).charAt(0).toUpperCase() +
            pathname.substring(2)}
        </title>
        <link rel="icon" href="/assets/svg/FF.svg" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div
        className="font-Roboto text-white grid h-screen"
        style={{
          backgroundImage: "url('/assets/images/bg-min.png')",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
