import { motion } from "framer-motion";
import Timetable from "../components/Timetable";
import { classTableData } from "../fixtures/classesTimetableData";
import { golfTableData } from "../fixtures/golfTimetableData";
import { gymTableData } from "../fixtures/gymTimetableData";

const services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-y-auto grid grid-flow-row gap-10 pb-10 lg:mx-32"
    >
      <section className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/OpenGym.mp4"
          playsInline
          autoPlay
          loop
          muted
          poster="/assets/images/bg-min.png"
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Open Gym
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Join our State of the art open gym
          </h2>
        </div>
        <ul className="font-extrabold mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
          <li>Fully stocked Free weight Section</li>
          <li>dedicate full racks</li>
          <li>Full suite of weighted machines</li>
          <li>mobility and strechting tools and equipment available</li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
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
          poster="/assets/images/bg-min.png"
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Classes
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Why not check out one of our classes
          </h2>
        </div>
        <ul className="font-extrabold mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
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
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
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
          poster="/assets/images/bg-min.png"
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Trackman
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Are you looking to improve you scores, we can help!
          </h2>
        </div>
        <ul className="font-extrabold mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase">
          <li>tour accuracy simulator</li>
          <li>dial in you swing </li>
          <li>club yardage analysis</li>
          <li>try playing the top courses around the world</li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
        {/* <Timetable tableData={golfTableData} /> */}
      </section>
      <section className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/ptVideo.mp4"
          playsInline
          autoPlay
          loop
          muted
          poster="/assets/images/bg-min.png"
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Physical Therapy
          </h1>
          <h2 className="mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Do you suffer from aches and pain or mobilty issues, we can help!
          </h2>
        </div>
        <div className="mx-8 grid lg:grid-cols-3 gap-10 justify-center text-shadow-xl font-black">
          <div className="relative lg:row-start-1 lg:col-start-1">
            <img
              className="h-full w-full"
              src="/assets/images/sports-massage.jpg"
              alt="needling"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <h1 className="absolute z-20 bottom-2 right-4 text-xl">
              Sports Massage
            </h1>
          </div>
          <p>
            Sports massage is reported to have many beneficial effects. Sports
            massage can be used pre-performance, post-performance, during
            training, or for rehabilitation. From elite athletes to recreational
            exercisers. Learn more about it by getting in touch.
          </p>
          <div className="relative lg:row-start-1 lg:col-start-2">
            <img
              className="h-full w-full"
              src="/assets/images/dry-needle.jpg"
              alt="needling"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <h1 className="absolute z-20 bottom-2 right-4 text-xl">
              Dry Needling
            </h1>
          </div>
          <p>
            With Dry needling you get fast results. Dry needling inserts tiny
            pins into the body, but only in areas of tight muscles. This helps
            promote blood flow into those areas and loosen up the muscles. This
            provides relief to those areas immediately. Learn more about it by
            getting in touch.
          </p>
          <div className="relative lg:row-start-1 lg:col-start-3">
            <img
              className="h-full w-full"
              src="/assets/images/cupping.jpg"
              alt="needling"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <h1 className="absolute z-20 bottom-2 right-4 text-xl">Cupping</h1>
          </div>
          <p>
            Cupping therapy is one of the oldest and most effective method of
            releasing the toxins from body tissue and organs. It is a practice
            where special cups are placed on the skin to create suction. This
            causes the tissue beneath the cup to be drawn up and swell causing
            increase in blood flow to affected area. Enhanced blood flow under
            the cups draws impurities and toxins away from the nearby tissues
            and organs towards the surface for elimination.
          </p>
        </div>
        <div>
          <a
            href="https://legitfit.com/authenticate/signin/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default services;
