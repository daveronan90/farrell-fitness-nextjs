import FFLogo from "../public/assets/svg/FF.svg";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-evenly md:grid md: grid-cols-2 md:mx-32">
      <FFLogo className="col-start-2 md:transform md:scale-150 justify-self-center"/>
      <div className="mx-4 md:mx-0 col-start-1 row-start-1">
        <h2 className="uppercase tracking-widest font-bold text-lg md:text-2xl text-gray-400 leading-5 pb-2">
          State of the art gym
        </h2>
        <h1 className="text-4xl md:text-6xl tracking-tight font-extrabold w-10/12 leading-9">
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
    </main>
  );
}
