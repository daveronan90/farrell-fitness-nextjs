import { motion } from "framer-motion";
import { useState } from "react";
import { team } from "../fixtures/staffBios";

const about = () => {
  const [showBio, setShowBio] = useState(null);

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
          onClick={() => setShowBio("Robbie")}
          id="robbie"
          className="h-full flex flex-col items-center justify-center lg:col-start-2"
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
          onClick={() => setShowBio("Shannon")}
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
          onClick={() => setShowBio("Eoghan")}
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
          onClick={() => setShowBio("Cat")}
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
          onClick={() => setShowBio("Rob")}
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
      {team.map(({ name, position, bio, quals, imgUrl }, idx) => {
        return (
          showBio === name && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 -top-20 flex flex-col items-center py-20 px-8 lg:px-24 overflow-y-auto"
              style={{
                background:
                  "linear-gradient(270deg, #000000 38.67%, #5F2800 101.82%)",
              }}
              onClick={() => setShowBio(null)}
              key={idx}
            >
              <h1 className="uppercase leading-10 text-xl lg:text-4xl font-bold tracking-widest">
                meet your coach
              </h1>
              <div>
                <div className="lg:w-1/2 space-y-3 lg:space-y-10 mt-5 lg:mt-10">
                  <h2 className="text-ffYellow uppercase lg:text-2xl font-bold">
                    {name}
                  </h2>
                  <h2 className="text-ffYellow uppercase lg:text-2xl font-bold">
                    {position}
                  </h2>
                  <p className="text-xss lg:text-xs">{bio}</p>
                  <h2 className="text-gray-400 uppercase text-xs lg:text-2xl font-medium underline tracking-widest">
                    Acemdemic qualifications
                  </h2>
                  <ul className="ml-4 list-disc text-xss lg:text-xs">
                    {quals.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <img
                src={`/assets/images/${imgUrl}`}
                alt={name}
                className="absolute lg:-bottom-40 lg:-right-40 scale-90 -bottom-20 -right-20 z-0"
              />
            </motion.div>
          )
        );
      })}
    </motion.div>
  );
};

export default about;
