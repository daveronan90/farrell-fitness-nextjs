import FFLogo from "../public/assets/svg/FF_Text.svg";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="md:mx-32">
      <nav className="flex flex-col md:flex-row md:flex-shrink items-center md:justify-evenly w-full">
        <div className="flex py-7 justify-center md:justify-start md:w-1/3 md:mr-8">
          <FFLogo />
        </div>
        <ul className="flex justify-center tracking-wider text-center space-x-1 w-full md:w-4/6">
          <Link href="/">
            <a
              className={`border-t-4 md:border-b-4 md:border-t-0 w-1/3 ${
                router.pathname === "/"
                  ? "border-yellow-700 text-yellow-700"
                  : "border-gray-600"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/services">
            <a
              className={`border-t-4 md:border-b-4 md:border-t-0 w-1/3 ${
                router.pathname === "/services"
                  ? "border-yellow-700 text-yellow-700"
                  : "border-gray-600"
              }`}
            >
              Services
            </a>
          </Link>
          <Link href="/coaches">
            <a
              className={`border-t-4 md:border-b-4 md:border-t-0 w-1/3 ${
                router.pathname === "/coaches"
                  ? "border-yellow-700 text-yellow-700"
                  : "border-gray-600"
              }`}
            >
              Coaches
            </a>
          </Link>
        </ul>
        <div className="hidden md:flex md:w-2/6 space-x-8 transform justify-end">
          <a href="https://www.facebook.com/farrellfitness17/">
            <FontAwesomeIcon
              className="w-8 h-8 cursor-pointer transition-all hover:text-yellow-700"
              icon={["fab", "facebook"]}
            />
          </a>
          <a href="https://www.instagram.com/farrellfitness17/">
            <FontAwesomeIcon
              className="w-8 h-8 cursor-pointer transition-all hover:text-yellow-700"
              icon={["fab", "instagram"]}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
