import React from "react";
import stay from "../../assets/Services/stay.jpg";
import spa from "../../assets/Services/spa.jpg";
import adventure from "../../assets/Services/adventure.jpg";
import dining from "../../assets/Services/dining.jpg";

const experiences = [
  {
    title: "Luxury Forest Stay",
    desc: "Wake up to breathtaking forest views in premium wooden suites crafted for elegance and serenity.",
    img: stay,
  },
  {
    title: "Spa & Wellness Retreat",
    desc: "Rejuvenate your body and soul with aroma therapies and peaceful forest yoga sessions.",
    img: spa,
  },
  {
    title: "Adventure & Nature Trails",
    desc: "Explore thrilling trekking paths, cycling trails, and magical bonfire evenings.",
    img: adventure,
  },
  {
    title: "Royal Dining Experience",
    desc: "Indulge in gourmet cuisine, candle-light dinners, and organic farm-to-table delicacies.",
    img: dining,
  },
];

const CuratedExperiences = () => {
  return (
   <section className="py-24 bg-nature-bg">
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
      Curated{" "}
      <span className="text-[var(--forest)] italic">
        Experiences
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
      Thoughtfully designed experiences that blend luxury, nature,
      and unforgettable moments at Royal Woods.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {experiences.map((item, index) => (
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

export default CuratedExperiences;
