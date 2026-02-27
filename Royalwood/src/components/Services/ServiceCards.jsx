import React from "react";
import pool from "../../assets/services/pool.jpg";
import concierge from "../../assets/services/concierge.jpg";
import campfire from "../../assets/services/campfire.jpg";
import balcony from "../../assets/services/balcony.jpg";

const services = [
  {
    title: "Infinity Pool Lounge",
    desc: "Unwind in our forest-view infinity pool with serene sunset reflections and premium lounge comfort.",
    img: pool,
  },
  {
    title: "24/7 Concierge Service",
    desc: "Experience seamless hospitality with personalized assistance available around the clock.",
    img: concierge,
  },
  {
    title: "Outdoor Campfire Evenings",
    desc: "Enjoy magical bonfire nights under the stars surrounded by nature and warm conversations.",
    img: campfire,
  },
  {
    title: "Private Balcony Views",
    desc: "Wake up to breathtaking forest scenery from your private balcony with peaceful morning vibes.",
    img: balcony,
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-50 font-serif">
      <div className="max-w-7xl mx-auto text-center">

        <h2
          className="text-4xl md:text-5xl lg:text-6xl
          font-[var(--font-serif)]
          font-semibold
          tracking-wide
          leading-tight
          mb-6"
        >
          Resort{" "}
          <span className="text-[var(--forest)] italic">
            Facilities
          </span>
        </h2>

        <p
          className="text-[var(--nature-deep)]/80
          text-base md:text-lg lg:text-xl
          max-w-2xl mx-auto
          mb-16
          leading-relaxed
          font-[var(--font-sans)]
          font-light"
        >
          Thoughtfully designed facilities that enhance comfort,
          convenience, and luxury throughout your stay.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden
              bg-white
              shadow-lg
              border border-[var(--emerald)]/20
              transition duration-300 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover
                  transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-left">
                <h3
                  className="text-xl lg:text-2xl
                  font-[var(--font-serif)]
                  font-semibold
                  tracking-wide
                  mb-3
                  text-[var(--forest)]"
                >
                  {item.title}
                </h3>

                <p
                  className="text-[var(--nature-deep)]/80
                  text-sm lg:text-base
                  leading-relaxed
                  font-[var(--font-sans)]"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceCards;