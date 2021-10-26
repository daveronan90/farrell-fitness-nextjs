const about = () => {
  return (
    <main className="overflow-y-auto">
      <section className="h-full flex flex-col items-center justify-center">
        <div className="relative mt-24 w-72 h-96 bg-yellow-700 rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-yellow-700 absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/robbie.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center bottom-16 px-8">
            <h2 className="text-lg">Robbie</h2>
            <h1 className="text-2xl font-bold text-yellow-700">
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
      <section className="h-full flex flex-col items-center justify-center">
        <div className="relative mt-24 w-72 h-96 bg-yellow-700 rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-yellow-700 absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/eoghan.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center bottom-16 px-8">
            <h2 className="text-lg">Eoghan</h2>
            <h1 className="text-2xl font-bold text-yellow-700">Coach</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              aut assumenda eius non molestiae autem ut ad iure perspiciatis
              consequatur corporis dolor, nemo, .
            </p>
          </div>
        </div>
      </section>
      <section className="h-full flex flex-col items-center justify-center">
        <div className="relative mt-24 w-72 h-96 bg-yellow-700 rounded-3xl">
          <div className="absolute inset-0 top-2 bg-bioGray rounded-3xl " />
          <div className="rounded-full h-48 w-48 bg-yellow-700 absolute -top-24 left-12" />
          <div
            className="rounded-full h-44 w-44 bg-black absolute -top-22 left-14 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/shannon.jpg')" }}
          />
          <div className="absolute flex flex-col justify-center items-center text-center bottom-16 px-8">
            <h2 className="text-lg">Shannon</h2>
            <h1 className="text-2xl font-bold text-yellow-700">Coach</h1>
            <p className="text-sm">
              Shannon has a huge passion and interest in the health and fitness
              industry. She’s very outgoing and chatty.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default about;
