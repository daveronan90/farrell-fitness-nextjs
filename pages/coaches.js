import { motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-y-auto grid gap-20 lg:gap-5 py-20 lg:grid-cols-3 lg:mx-32 bg-cover bg-center lg:content-end"
      style={{
        backgroundImage: "url('/assets/images/personalTraining-min.jpg')",
      }}
    >
      <section className="h-full flex flex-col items-center justify-center lg:col-start-2">
        <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/robbie-min.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
            <h2 className="text-lg">Robbie</h2>
            <h1 className="text-2xl font-bold text-ffYellow">
              Owner & Head Coach
            </h1>
            <p className="text-sm">
              Hi, and a warm welcome to Farrell Fitness. Personally I love
              meeting people and connecting with them on a personal level. I try
              to gain asmuch experience and knowledge from everyone I meet.
            </p>
          </div>
        </div>
      </section>
      <section className="h-5/6 flex flex-col items-center justify-center lg:col-start-3 lg:row-start-1">
        <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/eoghan-min.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
            <h2 className="text-lg">Eoghan</h2>
            <h1 className="text-2xl font-bold text-ffYellow">Coach</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              aut assumenda eius non molestiae autem ut ad iure perspiciatis
              consequatur corporis dolor, nemo, .
            </p>
          </div>
        </div>
      </section>
      <section className="h-5/6 flex flex-col items-center justify-center lg:col-start-1 lg:row-start-1">
        <div className="relative mt-24 w-72 h-96 bg-ffYellow rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-ffYellow absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/shannon-min.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center top-24 px-8">
            <h2 className="text-lg">Shannon</h2>
            <h1 className="text-2xl font-bold text-ffYellow">Coach</h1>
            <p className="text-sm">
              Shannon has a huge passion and interest in the health and fitness
              industry. She’s very outgoing and chatty.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default about;
