import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBar } from "../Components/NavBar";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        src="/assets/videos/mainVideo.mp4"
        className="fixed inset-0 h-screen w-screen object-cover"
      ></video>
      <div className="fixed inset-0 bg-black bg-opacity-70 w-screen h-full flex flex-col justify-center lg:justify-start">
        <NavBar />
        <div className="pb-24 flex flex-col h-full items-center lg:items-start justify-center lg:ml-48 lg:w-2/5 mx-4">
          <h1 className="flex flex-col">
            <span className="font-thin text-5xl">Welcome To</span>
            <span className="uppercase font-bold text-5xl">
              Farrell Fitness
            </span>
          </h1>
          <p className="my-10">
            The state of the art sporting facility, catering to all your fitness
            needs. Do you want to be the best version of yourself...?
          </p>
          <a
            href="https://www.legitfit.com/"
            className="bg-yellow-700 hover:bg-yellow-500 font-bold py-2 px-4 rounded-full transform transition-all"
          >
            Join us now!
          </a>
        </div>
        <div className="flex absolute bottom-6 space-x-10 items-center justify-center w-full">
          <a href="https://www.facebook.com/farrellfitness17/">
            <FontAwesomeIcon
              className="w-6 h-6 cursor-pointer transition-all hover:text-yellow-700"
              icon={["fab", "facebook"]}
            />
          </a>
          <a href="https://www.instagram.com/farrellfitness17/">
            <FontAwesomeIcon
              className="w-6 h-6 cursor-pointer transition-all hover:text-yellow-700"
              icon={["fab", "instagram"]}
            />
          </a>
        </div>
      </div>
    </>
  );
}
