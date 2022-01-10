import { motion } from "framer-motion";
import { useState } from "react";
import { team } from "../fixtures/staffBios";

const about = () => {
  const { name, bio, quals, position } = team[0];

  const [showRob, setShowRob] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-y-auto flex flex-col py-20 lg:mx-32 bg-cover bg-center lg:content-end lg:space-y-16 space-y-8"
      style={{
        backgroundImage: "url('/assets/images/personalTraining-min.jpg')",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-8 lg:space-y-0 lg:flex-row lg:justify-around">
        <section
          id="robbie"
          className="h-full flex flex-col items-center justify-center lg:col-start-2"
          onClick={() => setShowRob(true)}
        >
          <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
            <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
            <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
            <div
              className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/robbie-min.jpg')",
              }}
            />
            <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
              <h2 className="text-lg">Robbie</h2>
              <h1 className="text-2xl font-bold text-ffYellow">
                Owner & Head Coach
              </h1>
              <p className="text-sm">
                Hi, and a warm welcome to Farrell Fitness. Personally I love
                meeting people and connecting with them on a personal level. I
                try to gain asmuch experience and knowledge from everyone I
                meet.
              </p>
            </div>
          </div>
        </section>
        <section
          id="shannon"
          className="h-full flex flex-col items-center justify-center lg:col-start-1"
        >
          <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
            <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
            <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
            <div
              className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/shannon-min.jpg')",
              }}
            />
            <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
              <h2 className="text-lg">Shannon</h2>
              <h1 className="text-2xl font-bold text-ffYellow">Coach</h1>
              <p className="text-sm">
                Shannon has a huge passion and interest in the health and
                fitness industry. She’s very outgoing and chatty.
              </p>
            </div>
          </div>
        </section>
        <section
          id="eoghan"
          className="h-full flex flex-col items-center justify-center lg:col-start-3"
        >
          <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
            <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
            <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
            <div
              className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/eoghan-min.jpg')",
              }}
            />
            <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
              <h2 className="text-lg">Eoghan</h2>
              <h1 className="text-2xl font-bold text-ffYellow">Coach</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aut assumenda eius non molestiae autem ut ad iure
                perspiciatis consequatur corporis dolor, nemo, .
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-around">
        <section
          id="cat"
          className="h-full flex flex-col items-center justify-center"
        >
          <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
            <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
            <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
            <div
              className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/cat.jpg')",
              }}
            />
            <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
              <h2 className="text-lg">Cat</h2>
              <h1 className="text-2xl font-bold text-ffYellow">Manager</h1>
              <p className="text-sm">
                Hi, and a warm welcome to Farrell Fitness. Personally I love
                meeting people and connecting with them on a personal level. I
                try to gain asmuch experience and knowledge from everyone I
                meet.
              </p>
            </div>
          </div>
        </section>
        <section
          id="rob"
          className="h-full flex flex-col items-center justify-center "
        >
          <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
            <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
            <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
            <div
              className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/robC.jpg')",
              }}
            />
            <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
              <h2 className="text-lg">Rob Conway</h2>
              <h1 className="text-2xl font-bold text-ffYellow">Coach</h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                fugiat inventore quisquam, numquam alias quidem earum quibusdam
                blanditiis commodi nesciunt id minus fuga enim voluptas sed eos!
                Exercitationem, hic minus.
              </p>
            </div>
          </div>
        </section>
      </div>
      {showRob && (
        <div
          className="fixed inset-0 -top-20 flex flex-col items-center py-20 px-8 lg:px-24"
          style={{
            background:
              "linear-gradient(270deg, #000000 38.67%, #5F2800 101.82%)",
          }}
          onClick={() => setShowRob(false)}
        >
          <h1 className="uppercase leading-10 text-xl lg:text-4xl font-bold tracking-widest">
            meet your coach
          </h1>
          <div>
            <div className="lg:w-1/2 space-y-3 lg:space-y-10 mt-5 lg:mt-10">
              <h2 className="text-ffYellow uppercase lg:text-2xl font-bold">
                robbie farrell
              </h2>
              <h2 className="text-ffYellow uppercase lg:text-2xl font-bold">
                owner & head coach
              </h2>
              <p className="text-xss lg:text-xs">
                Hi, and a warm welcome to Farrell Fitness. Personally I love
                meeting people and connecting with them on a personal level. I
                try to gain as much experience and knowledge from everyone I
                meet. Learning about my clients gives me a deep appreciation to
                the level of detail that they require to reach their goals.
                Whether that is to improve their sporting performance, build
                muscle, lose weight, lose body fat or just improve general
                health. I will give each client 110% because that is how I would
                like to be treated no matter where I go. I pride myself on my
                honesty and work ethic. I feel that’s why I really connect with
                all my clients because I genuinely care about each one.
                Everybody has a story to tell and I am more than happy to listen
                to you!
              </p>
              <h2 className="text-gray-400 uppercase text-xs lg:text-2xl font-medium underline tracking-widest">
                Acemdemic qualifications
              </h2>
              <ul className="ml-4 list-disc text-xss lg:text-xs">
                <li>
                  First Class Bachelor of Arts (Honours) Degree in Sports
                  Management and Coaching
                </li>
                <li>Bachelor of Arts Degree in Sport and Exercise</li>
                <li>Professional Diploma in Nutritional Therapy</li>
                <li>
                  National Diploma in Orthopedic Sports Massage & Injury
                  Management
                </li>
                <li>National Diploma in Sports Massage Therapy</li>
                <li>Dry Needling Techniques for Muscular Structures</li>
                <li>Sports Dry Cupping Therapy</li>
                <li>Level 1 - Olympic Weightifting</li>
                <li>TPI Level 1 Certification</li>
                <li>Trackman Level 1 & 2</li>
                <li>UEFA B Football License Diploma</li>
                <li>RLSS Pool Lifeguard</li>
                <li>SCQF Level 6 in Higher Sports Leadership</li>
                <li>SCQF Level 5 in Community Sports</li>
                <li>SCQF Level 4 in Sports Leadership</li>
                <li>Occupational First Aid</li>
                <li>STYKU Body Composition Certificate</li>
              </ul>
            </div>
          </div>
          <img
            src="/assets/images/robbieBio.png"
            alt="robbie"
            className="absolute lg:-bottom-40 lg:-right-40 scale-90 -bottom-20 -right-20 z-0"
          />
        </div>
      )}
    </motion.div>
  );
};

export default about;
