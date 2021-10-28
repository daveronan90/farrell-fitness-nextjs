import "../styles/globals.css";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";
import NavBar from "../Components/NavBar";
import { useEffect } from "react";

library.add(fab);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <Head>
        <title>
          Farrell Fitness {pathname !== "/" ? "|" : "| Gym Fitness & Golf"}{" "}
          {pathname.substring(1).charAt(0).toUpperCase() +
            pathname.substring(2)}
        </title>
        <meta
          name="description"
          content="At Farrell Fitness, we're focused on you and providing you with the tools and solutions you need to achieve your fitness goals."
        />
        <link rel="icon" href="/assets/svg/FF.svg" />
        <meta name="author" content="Dave Ronan" />
        <meta
          name="keywords"
          content="gym, fitness, golf, lifting, gym near me, workout, diet, trackman, wexford gym"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div
        className="font-Roboto text-white grid "
        style={{
          height: "calc(var(--vh,1vh)*100)",
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
