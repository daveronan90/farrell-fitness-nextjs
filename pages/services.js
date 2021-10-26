const services = () => {
  return (
    <main
      className="overflow-y-auto"
    >
      <section className="h-full flex flex-col justify-evenly">
        <video src="/assets/videos/OpenGym.mp4" autoPlay loop muted></video>
        <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
          Open Gym
        </h1>
        <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
          Join our State of the art open gym
        </h2>
        <ul className="mx-8 text-yellow-600 italic space-y-2 list-outside list-disc uppercase">
          <li>Fully stocked Free weight Section</li>
          <li>dedicate full racks</li>
          <li>Full suite of weighted machines</li>
          <li>mobility and strechting tools and equipment available</li>
        </ul>
        <div>
          <a
            href="/"
            className="mx-8 bg-yellow-700 rounded-full font-bold py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
      </section>
      <section className="h-full flex flex-col justify-evenly">
        <video
          src="/assets/videos/classesVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
        <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
          Classes
        </h1>
        <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
          Why not check out one of our classes
        </h2>
        <ul className="mx-8 text-yellow-600 italic space-y-2 list-outside list-disc uppercase">
          <li>strength and conditioning</li>
          <li>beginner classes</li>
          <li>everyone has their own weights and equipment</li>
          <li>
            classes lead by one of our highly trained and frendily coaches
          </li>
        </ul>
        <div>
          <a
            href="/"
            className="mx-8 bg-yellow-700 rounded-full font-bold py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
      </section>
      <section className="h-full flex flex-col justify-evenly">
        <video src="/assets/videos/trackman.mp4" autoPlay loop muted></video>
        <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
          Trackman
        </h1>
        <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
          Are you looking to improve you scores, we can help!
        </h2>
        <ul className="mx-8 text-yellow-600 italic space-y-2 list-outside list-disc uppercase">
          <li>tour accuracy simulator</li>
          <li>dial in you swing </li>
          <li>club yardage analysis</li>
          <li>try playing the top courses around the world</li>
        </ul>
        <div>
          <a
            href="/"
            className="mx-8 bg-yellow-700 rounded-full font-bold py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
      </section>
    </main>
  );
};

export default services;
