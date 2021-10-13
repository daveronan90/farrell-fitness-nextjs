import FFLogo from "../public/assets/svg/FF_Text.svg";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

export const NavBar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`w-full p-4 flex flex-col items-center justify-center md:justify-between md:pl-48 md:py-10 md:flex-row transition-all transform ease-in-out duration-500 ${
        isOpen && "bg-yellow-700"
      }`}
    >
      <FFLogo className="md:w-auto h-12 w-52" />
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
      </div>
      <ul
        className={`${
          isOpen ? "" : "hidden space-x-8"
        } uppercase md:flex transform transition-all ease-in-out duration-500`}
      >
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <div
            className={`${
              router.pathname === "/" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/services">
            <a>services</a>
          </Link>
          <div
            className={`${
              router.pathname === "/services" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/coaches">
            <a>Coaches</a>
          </Link>
          <div
            className={`${
              router.pathname === "/coaches" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
      </ul>
    </div>
  );
};
