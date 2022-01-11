import FFLogo from "../public/assets/svg/FF_Text.svg";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  const router = useRouter();
  const [secondaryMenu, setSecondaryMenu] = useState(false);

  return (
    <header className="lg:mx-32">
      {!secondaryMenu ? (
        <nav className="flex flex-col lg:flex-row lg:flex-shrink items-center lg:justify-evenly w-full">
          <Link href="/">
            <a className="flex py-7 justify-center lg:justify-start lg:w-1/3 lg:mr-8">
              <FFLogo />
            </a>
          </Link>
          <ul className="flex justify-center tracking-wider text-center space-x-1 w-full lg:w-4/6">
            <Link href="/">
              <a
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="">
              <a
                onClick={() => setSecondaryMenu(true)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/coaches">
              <a
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/coaches"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Coaches
              </a>
            </Link>
            <Link href="/results">
              <a
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/results"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Results
              </a>
            </Link>
          </ul>
          <div className="hidden lg:flex lg:w-2/6 space-x-8 transform justify-end">
            <a href="https://www.facebook.com/farrellfitness17/">
              <FontAwesomeIcon
                className="w-8 h-8 cursor-pointer transition-all hover:text-ffYellow"
                icon={["fab", "facebook"]}
              />
            </a>
            <a href="https://www.instagram.com/farrellfitness17/">
              <FontAwesomeIcon
                className="w-8 h-8 cursor-pointer transition-all hover:text-ffYellow"
                icon={["fab", "instagram"]}
              />
            </a>
          </div>
        </nav>
      ) : (
        <nav className="flex flex-col lg:flex-row lg:flex-shrink items-center lg:justify-evenly w-full">
          <Link href="/">
            <a className="flex py-7 justify-center lg:justify-start lg:w-1/3 lg:mr-8">
              <FFLogo />
            </a>
          </Link>
          <ul className="flex justify-center tracking-wider text-center space-x-1 w-full lg:w-4/6">
            <Link href="/services#gym">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#gym"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Gym
              </a>
            </Link>
            <Link href="/services#classes">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#classes"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Classes
              </a>
            </Link>
            <Link href="/services#golf">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#golf"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Golf
              </a>
            </Link>
            <Link href="/services#physio">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#physio"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Physio
              </a>
            </Link>
            <Link href="/services#team">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#team"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Teams
              </a>
            </Link>
            <Link href="/services#styku">
              <a
                onClick={() => setSecondaryMenu(false)}
                className={`border-t-4 lg:border-b-4 lg:border-t-0 w-1/3 ${
                  router.pathname === "/services#styku"
                    ? "border-ffYellow text-ffYellow"
                    : "border-gray-600"
                }`}
              >
                Scan
              </a>
            </Link>
          </ul>
          <div className="hidden lg:flex lg:w-2/6 space-x-8 transform justify-end">
            <a href="https://www.facebook.com/farrellfitness17/">
              <FontAwesomeIcon
                className="w-8 h-8 cursor-pointer transition-all hover:text-ffYellow"
                icon={["fab", "facebook"]}
              />
            </a>
            <a href="https://www.instagram.com/farrellfitness17/">
              <FontAwesomeIcon
                className="w-8 h-8 cursor-pointer transition-all hover:text-ffYellow"
                icon={["fab", "instagram"]}
              />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
export default NavBar;
