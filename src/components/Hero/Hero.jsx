import React from "react";
import Moon from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="relative h-full text-white bg-black/20">
      <div className="flex items-center justify-center h-full p-4">
        <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              tempora magnam? In, sequi enim. Tempora natus quos voluptates,
              quas doloribus, cupiditate velit, nihil tempore aliquam obcaecati
              nesciunt provident temporibus blanditiis enim dolore voluptatem?
              Corporis expedita vel accusamus odit, iusto quod. Rerum ipsum
              ducimus maiores nam molestias, pariatur distinctio fuga quibusdam.
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className="primary-button">Learn More</button>
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* Surgace Section */}
      <img
        className="absolute bottom-0 right-0 w-full brightness-50"
        src={Moon}
        alt=""
      />
      {/* Bottom Gradient Section */}
      <div className=" absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Hero;
