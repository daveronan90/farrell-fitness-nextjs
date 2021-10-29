import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import FFLogo from "../public/assets/svg/FF.svg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col items-center justify-evenly lg:grid lg: grid-cols-2 lg:mx-32"
    >
      <FFLogo className="col-start-2 lg:transform lg:scale-150 justify-self-center" />
      <div className="mx-4 lg:mx-0 col-start-1 row-start-1">
        <h2 className="uppercase tracking-widest font-bold text-lg lg:text-2xl text-gray-400 leading-5 pb-2">
          State of the art gym
        </h2>
        <h1 className="text-4xl lg:text-6xl tracking-tight font-extrabold w-10/12 leading-9">
          Get in the best shape of your life!
        </h1>
        <div className="mt-8">
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="bg-ffYellow rounded-full font-bold py-2 px-7 shadow-md"
          >
            Join up Now!
          </a>
        </div>
      </div>
      <a
        className="mt-10 border-t-2 text-center lg:border-b-2 lg:border-t-0 w-1/3 border-ffYellow hover:text-ffYellow"
        href="https://www.google.ie/maps/place/Farrell+Fitness/@52.3865674,-6.9318581,17z/data=!3m1!4b1!4m5!3m4!1s0x4842b6b899f0bce7:0x68eb6b7c600b3055!8m2!3d52.3866102!4d-6.9296475"
      >
        Find us here
      </a>
      <div className="lg:hidden  flex lg:w-2/6 space-x-8 transform justify-end">
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
    </motion.div>
  );
}
