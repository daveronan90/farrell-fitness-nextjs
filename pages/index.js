import FFLogo from "../public/assets/svg/FF.svg";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-evenly md:grid md: grid-cols-2">
      <FFLogo />
      <div className="mx-4">
        <h2 className="uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
          State of the art gym
        </h2>
        <h1 className="text-4xl tracking-tight font-extrabold w-10/12 leading-9">
          Get in the best shape of your life!
        </h1>
      </div>
      <a
        href="/"
        className="bg-yellow-700 rounded-full font-bold py-2 px-7 shadow-md"
      >
        Join up Now!
      </a>
    </main>
  );
}
