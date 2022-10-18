import { motion } from "framer-motion";
import Timetable from "../components/Timetable";
import { classTableData } from "../fixtures/classesTimetableData";
// import { golfTableData } from "../fixtures/golfTimetableData";
import { gymTableData } from "../fixtures/gymTimetableData";

const services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-y-auto grid grid-flow-row gap-10 pb-10 lg:mx-32 text-shadow-xl"
    >
      <section id="gym" className="grid grid-flow-row gap-10">
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
          <h2 className=" mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
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
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
        <div className="relative border-2 py-2 border-ffYellow rounded-md w-10/12 place-self-center">
          <div className="w-6 h-6 rounded-full bg-ffYellow absolute -top-3 -left-3 animate-ping" />
          <div className="w-6 h-6 rounded-full bg-ffYellow absolute -top-3 -left-3" />
          <h1 className="text-center mx-8 lg:text-2xl tracking-tight font-black uppercase w-10/12 leading-9">
            Gym time isn't limited to one hour, if your workout takes longer
            just book additional slots!
          </h1>
        </div>
        <Timetable tableData={gymTableData} />
      </section>
      <section id="classes" className="grid grid-flow-row gap-10">
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
          <h2 className=" mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
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
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
        <Timetable tableData={classTableData} />
      </section>
      <section id="golf" className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/trackman.webm"
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
          <h2 className=" mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
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
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
        {/* <Timetable tableData={golfTableData} /> */}
      </section>
      <section id="physio" className="grid grid-flow-row gap-10">
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
        <div className="mx-8 grid lg:grid-cols-3 gap-10 justify-center text-ffYellow font-black italic">
          <div className="relative lg:row-start-1 lg:col-start-1 ">
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
            Special cups are placed on the skin to create suction. This suction
            increases the blood flow to affected area. Enhanced blood flow under
            the cups draws impurities and toxins away from the nearby tissues
            and organs towards the surface for elimination.
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
        </div>
        <div>
          <a
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
      </section>
      <section id="team" className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/teamVideo.webm"
          playsInline
          autoPlay
          loop
          muted
          poster="/assets/images/bg-min.png"
        ></video>
        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Team Training
          </h1>
          <h2 className=" mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Are you looking to bring you team to the next level, we can help!
          </h2>
        </div>
        <ul className="font-extrabold mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase text-sm">
          <li className="">
            Sport Specific Team Training ideal for Swimming Teams looking to
            build strength and fitness outside of the pool. Farrell Fitness has
            been working with New Ross Swimming Club for the past three years,
            producing some of the best young swimmers in the country.
          </li>
          <li className="">
            Pre-Season Strength and Conditioning Team Training available for
            GAA, Soccer and Rugby Clubs. Farrell Fitness worked with Cushinstown
            GAA over a two year period helping them win the County and Leinster
            Championship. Not only that, they reached the All Ireland Final for
            the first time in the clubs history.
          </li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="mx-8 bg-ffYellow rounded-full font-bold my-2 py-2 px-7 shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Sign up now
          </a>
        </div>
      </section>
      <section id="styku" className="grid grid-flow-row gap-10">
        <video
          src="/assets/videos/stykuVideo.webm"
          playsInline
          autoPlay
          loop
          muted
          poster="/assets/images/bg-min.png"
          className="w-full"
        ></video>

        <div className="space-y-3">
          <h1 className="mx-8 text-4xl tracking-tight font-extrabold w-10/12 leading-9">
            Styku 3D Body Composition
          </h1>
          <h2 className=" mx-8 uppercase tracking-widest font-bold text-lg text-gray-400 leading-5 pb-2">
            Get the most accurate reading to help track your progress!
          </h2>
        </div>
        <ul className="font-extrabold mx-8 text-ffYellow italic space-y-2 list-outside list-disc uppercase text-sm">
          <li className="">
            Lightweight, Portable, and Intuitive
            <br />
            <br />
            Performs a 3D body scan in only 35 seconds, with millions of
            measurements with 2mm accuracy and reconstruct your body in 3D.
          </li>
          <li className="">
            See the Difference in your Body's Shape in 3D.
            <br />
            <br />
            Weight scales often mislead you into thinking you're not making
            progress. Nothing is more illustrative and more motivating then to
            actually see your body transform.
          </li>
        </ul>
        <div>
          <a
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
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
