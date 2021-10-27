import React from "react";
import Image from "next/image";
import Slider from "react-slick";

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
  let settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mx-8 lg:mx-32 relative">
      <div className="absolute top-0 left-0 right-0 lg:left-40 lg:right-40 bottom-0">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx}>
              <Image src={img} alt={`Transformation ${idx + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default results;
