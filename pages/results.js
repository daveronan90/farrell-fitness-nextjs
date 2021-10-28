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

const results = () => {
  const [active, setActive] = useState("");

  return (
    <div className="p-8 lg:mx-32 overflow-y-auto grid gap-8 text-center lg:grid-cols-4">
      <h1
        className="lg:col-span-4
      text-4xl tracking-tight font-extrabold leading-9"
      >
        Transformations & Results
      </h1>
      <h2 className="lg:col-span-4 uppercase tracking-widest font-bold lg:text-lg text-gray-400 leading-5">
        Clients who have come to us looking to improve their fitness, change
        their body composition or improve their lifestyles
      </h2>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={
            active === idx.toString()
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
              e.target.id === active ? setActive("") : setActive(e.target.id);
            }}
          />
        </div>
      ))}
      <div
        className={active === "" ? "hidden" : "z-10 fixed inset-0 bg-black opacity-75"}
        onClick={() => setActive("")}
      />
    </div>
  );
};

export default results;
