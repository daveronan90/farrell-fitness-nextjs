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
  const [zoom, setZoom] = useState(false)
  return (
    <div className="p-8 lg:mx-32 overflow-y-auto grid gap-8 text-center lg:grid-cols-4">
      <h1
        className="lg:col-span-4
      text-4xl tracking-tight font-extrabold leading-9"
      >
        Transformations & Success Stories
      </h1>
      <h2 className="lg:col-span-4 uppercase tracking-widest font-bold lg:text-lg text-gray-400 leading-5">
        Clients who have come to us looking to improve their fitness, change
        their body composition or just to be a bit more healthy
      </h2>
      {images.map((img, idx) => (
        <div key={idx}>
          <Image
            src={img}
            alt={`Transformation ${idx + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default results;
