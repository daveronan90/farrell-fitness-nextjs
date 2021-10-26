import FFLogo from "../public/assets/svg/FF_Text.svg";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export const NavBar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex flex-col items-center">
      <nav className="w-full">
        <div className="flex py-7 justify-center">
          <FFLogo />
        </div>
        <ul className="flex justify-between tracking-wider text-center space-x-1">
          <Link href="/">
            <a
              className={`border-t-4 w-1/3 ${
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
              className={`border-t-4 w-1/3 ${
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
              className={`border-t-4 w-1/3 ${
                router.pathname === "/coaches"
                  ? "border-yellow-700 text-yellow-700"
                  : "border-gray-600"
              }`}
            >
              Coaches
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
