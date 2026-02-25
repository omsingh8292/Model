import React from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";

const gallery = [
  {
    img: gallery1,
    title: "Forest View",
    desc: "Beautiful forest scenery around the resort.",
  },
  {
    img: gallery2,
    title: "Royal Garden Cottage",
    desc: "Peaceful cottages built inside nature for premium relaxation.",
  },
  {
    img: gallery3,
    title: "Luxury Night Stay",
    desc: "Warm lighting and premium rooms for a luxury night experience.",
  },
  {
    img: gallery4,
    title: "Nature Walking Trails",
    desc: "Green open gardens and peaceful walking trails inside resort.",
  },
];

const Gallery = () => (
  <section id="gallery" className="py-24 bg-nature-bg">
    {/* Title */}
    <div className="container mx-auto text-center mb-16 px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-deep">
        Gallery
      </h2>
      <p className="mt-4 text-nature-leaf text-lg">
        Explore the beauty of Royal Woods
      </p>
      <div className="w-20 h-1 bg-nature-moss mx-auto mt-4 rounded-full"></div>
    </div>

    {/* SAME GRID SIZE AS ROOMS */}
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      {gallery.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden border border-nature-moss/10"
        >
          {/* Image */}
          <div className="overflow-hidden h-64">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Card Text */}
          <div className="p-6 flex flex-col flex-grow text-center">
            <h3 className="text-2xl font-serif font-semibold mb-2 text-nature-deep">
              {item.title}
            </h3>
            <p className="text-nature-deep/70 font-sans">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
