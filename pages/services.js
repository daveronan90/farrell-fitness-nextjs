import Timetable from "../Components/Timetable";
import { classTableData } from "../fixtures/classesTimetableData";
import { golfTableData } from "../fixtures/golfTimetableData";
import { gymTableData } from "../fixtures/gymTimetableData";

const services = () => {
  return (
    <main className="overflow-y-auto grid grid-flow-row gap-10 pb-10 lg:mx-32">
      <section className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/OpenGym.mp4"
          playsInline
          autoPlay
          loop
          muted
          poster=""
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Open Gym
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Join our State of the art open gym
          </h2>
        </div>
        <ul className="mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
          <li>Fully stocked Free weight Section</li>
          <li>dedicate full racks</li>
          <li>Full suite of weighted machines</li>
          <li>mobility and strechting tools and equipment available</li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
        <Timetable tableData={gymTableData} />
      </section>
      <section className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/classesVideo.mp4"
          playsInline
          autoPlay
          loop
          muted
          poster=""
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Classes
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Why not check out one of our classes
          </h2>
        </div>
        <ul className="mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
          <li>strength and conditioning</li>
          <li>beginner classes</li>
          <li>everyone has their own weights and equipment</li>
          <li>
            classes lead by one of our highly trained and frendily coaches
          </li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
        <Timetable tableData={classTableData} />
      </section>
      <section className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/trackman.mp4"
          playsInline
          autoPlay
          loop
          muted
          poster=""
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Trackman
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Are you looking to improve you scores, we can help!
          </h2>
        </div>
        <ul className="mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
          <li>tour accuracy simulator</li>
          <li>dial in you swing </li>
          <li>club yardage analysis</li>
          <li>try playing the top courses around the world</li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md"
          >
            Sign up for pricing!
          </a>
        </div>
        <Timetable tableData={golfTableData} />
      </section>
    </main>
  );
};

export default services;
