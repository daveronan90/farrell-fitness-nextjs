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
          <Link href="/products">
            <a>Products</a>
          </Link>
          <div
            className={`${
              router.pathname === "/products" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <div
            className={`${
              router.pathname === "/about" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
          <div
            className={`${
              router.pathname === "/contact" ? "bg-yellow-700" : "bg-opacity-0"
            } h-1 w-1/2 rounded-full mt-2`}
          />
        </div>
      </ul>
    </div>
  );
};
