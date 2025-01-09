import React from "react";
import Satelite from "../../assets/satelite2.jpg";

const Banner2 = () => {
  return (
    <div className="relative z-50 pb-12 text-white bg-black">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="p-4 space-y-3 border-b-2 border-l-2 border-l-sky-800 border-b-sky-800 xl:pr-36">
            <p data-aos="fade-up" className="uppercase text-sky-800">Our Mission</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl uppercase">Rapidcast</h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              porro deserunt tenetur incidunt! Reprehenderit temporibus eveniet
              asperiores perspiciatis ab iusto rerum consequuntur minus quis
              praesentium rem perferendis, aliquam cumque repellat voluptatum
              quidem.
            </p>
            <button data-aos="fade-up" data-aos-delay="700" className="primary-button">Learn More</button>
          </div>
          <div data-aos="zoom-in">
            <img src={Satelite} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
