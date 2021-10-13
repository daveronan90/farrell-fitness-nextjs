import { NavBar } from "../Components/NavBar";

const about = () => {
  return (
    <div className="">
      <NavBar />
      <div className="mx-4 py-10 grid grid-cols-1 grid-flow-row gap-4 md:gap-10 lg:grid-cols-3">
        <img className="col-span-1 md:col-span-3" src="/assets/images/personalTraining.jpg" alt="Team Trainers" />
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="relative hover:shadow-3xl cursor-pointer transform transition-all"
        >
          <div
            style={{
              clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
            }}
            className="absolute bg-gradient-to-tr to-black from-yellow-900 bottom-0 left-0 right-0 h-1/5"
          >
            <span className="absolute bottom-0 right-0 uppercase font-bold pr-3 opacity-70 italic">
              Shannon
              Trainer
            </span>
          </div>
          <img
            src="/assets/images/shannon.jpg"
            alt="Profile picture of shannon"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="relative hover:shadow-3xl cursor-pointer transform transition-all row-start-2 row-end-3 lg:col-start-2 lg:col-end-3"
        >
          <div
            style={{
              clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
            }}
            className="absolute bg-gradient-to-tr to-black from-yellow-900 bottom-0 left-0 right-0 h-1/5"
          >
            <span className="absolute bottom-0 right-0 uppercase font-bold pr-3 opacity-70 italic">
              Robbie
              Owner
            </span>
          </div>
          <img
            src="/assets/images/robbie.jpg"
            alt="Profile picture of robbie"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="relative hover:shadow-3xl cursor-pointer transform transition-all"
        >
          <div
            style={{
              clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
            }}
            className="absolute bg-gradient-to-tr to-black from-yellow-900 bottom-0 left-0 right-0 h-1/5"
          >
            <span className="absolute bottom-0 right-0 uppercase font-bold pr-3 opacity-70 italic">
              Eoghan Trainer
            </span>
          </div>
          <img
            src="/assets/images/eoghan.jpg"
            alt="Profile picture of eoghan"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
