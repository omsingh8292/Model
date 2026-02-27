import React from "react";
import onamImg from "../../assets/services/onam.jpg";
import safariImg from "../../assets/services/safari.jpg";
import raftingImg from "../../assets/services/rafting.jpg";
import natureImg from "../../assets/services/nature.jpg";

const festivalData = [
  {
    title: "Onam Festival",
    desc: "Celebrate Kerala’s traditions with floral decorations, cultural performances and festive riverside feasts.",
    img: onamImg,
  },
  {
    title: "Sanctuary Safari",
    desc: "Discover wildlife through guided jungle safaris in serene natural surroundings.",
    img: safariImg,
  },
  {
    title: "River Rafting",
    desc: "Experience thrilling water adventures amidst breathtaking forest landscapes.",
    img: raftingImg,
  },
  {
    title: "Wyonda Nature Trail",
    desc: "Reconnect with nature through peaceful forest walks and immersive eco experiences.",
    img: natureImg,
  },
];

const FestivalEvents = () => {
  return (
    <section className="py-20 bg-[#cfd5cf] text-[var(--nature-deep)]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl
          font-[var(--font-serif)]
          font-semibold
          tracking-wide
          leading-tight
          mb-6
          font-serif"
          
        >
          Festival & Seasonal{" "} 
          <span className="text-[var(--forest)] italic">
            Events
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-[var(--nature-deep)]/80
          text-base md:text-lg lg:text-xl
          max-w-2xl mx-auto
          mb-16
          leading-relaxed
          font-[var(--font-sans)]
          font-light"
        >
          Celebrate culture, adventure, and nature through unforgettable
          experiences at Royal Woods.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {festivalData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden
              bg-white
              shadow-lg
              border border-[var(--emerald)]/20
              transition duration-300 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

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

export default FestivalEvents;