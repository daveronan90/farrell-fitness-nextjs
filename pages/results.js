import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../public/assets/images",
    false,
    /.*transformation.*\.(png|jpe?g|svg)$/
  )
);

const results = ({ reviews }) => {
  const [activeImg, setActiveImg] = useState("");
  const [activeReview, setActiveReview] = useState("");

  const createExcerpt = (text) => {
    let trimmedString = text.substr(0, 100);

    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    return trimmedString + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8 lg:mx-32 overflow-y-auto grid gap-8 text-center lg:grid-cols-3"
    >
      <h1
        className="lg:col-span-3
      text-4xl tracking-tight font-extrabold leading-9"
      >
        Reviews & Transformations
      </h1>
      <h2 className="lg:col-span-3 uppercase tracking-widest font-bold lg:text-lg text-gray-400 leading-5">
        Clients who have come to us looking to improve their fitness, change
        their body composition or improve their lifestyles
      </h2>
      <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
        {reviews.slice(0, 3).map(({ author_name, rating, text }, idx) => (
          <div
            key={idx}
            className={`space-y-4 rounded-lg p-4 bg-opacity-90 bg-bioGray backdrop-filter backdrop-blur-lg col-span-1 ${
              activeReview === idx.toString()
                ? "fixed z-20 transform lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 left-0 right-0"
                : ""
            }`}
          >
            <div className="flex items-center justify-center">
              <span className="text-ffYellow transform scale-175 px-4">
                &#8220;
              </span>
              <p
                className={`text-sm lg:text-lg ${
                  activeReview === ""
                    ? "hover:text-ffYellow cursor-pointer"
                    : ""
                }`}
                id={idx}
                onClick={(e) => {
                  console.log(e.target.id);
                  e.target.id === activeReview
                    ? setActiveReview("")
                    : setActiveReview(e.target.id);
                }}
              >
                {activeReview !== idx.toString() ? createExcerpt(text) : text}
              </p>
              <span className="text-ffYellow transform scale-175 px-4">
                &#8221;
              </span>
            </div>
            <div className="flex items-center justify-center">
              {[...Array(rating).keys()].map((idx) => (
                <p key={idx}>&#11088;</p>
              ))}
            </div>
            <p className="italic border-t border-ffYellow">
              {author_name
                .toLowerCase()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.substr(1))
                .join(" ")}
            </p>
          </div>
        ))}
      </div>
      <h1
        className="lg:col-span-3
      text-4xl tracking-tight font-extrabold leading-9 hover:text-ffYellow"
      >
        <a href="https://www.google.ie/maps/place/Farrell+Fitness/@52.3865674,-6.9318581,17z/data=!4m7!3m6!1s0x4842b6b899f0bce7:0x68eb6b7c600b3055!8m2!3d52.3865674!4d-6.9296694!9m1!1b1">
          See more reviews...
        </a>
      </h1>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={
            activeImg === idx.toString()
              ? "fixed z-20 transform lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 left-0 right-0"
              : ""
          }
        >
          <Image
            src={img}
            alt={`Transformation ${idx + 1}`}
            id={idx}
            onClick={(e) => {
              console.log(e.target.id);
              e.target.id === activeImg
                ? setActiveImg("")
                : setActiveImg(e.target.id);
            }}
          />
        </div>
      ))}
      <div
        className={
          activeImg === "" ? "hidden" : "z-10 fixed inset-0 bg-black opacity-75"
        }
        onClick={() => setActiveImg("")}
      />
      <div
        className={
          activeReview === ""
            ? "hidden"
            : "z-10 fixed inset-0 bg-black opacity-75"
        }
        onClick={() => setActiveReview("")}
      />
    </motion.div>
  );
};

export default results;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ57zwmbi2QkgRVTALYHxr62g&fields=reviews&key=AIzaSyAE-Nvqy7hNMDDwcktKdYuEFbc9wuH4pRk"
  );

  const { result } = await res.json();

  return {
    props: result,
  };
};
