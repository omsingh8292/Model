import React from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

const images = [gallery1, gallery2, gallery3];

const Gallery = () => (
  /* Changed bg-white to bg-nature-bg to match the rest of the site */
  <section id="gallery" className="py-20 bg-nature-bg">
    <div className="container mx-auto text-center mb-12">
      {/* Font matches the Services page branding */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-deep">
        Gallery
      </h2>
      <p className="mt-4 text-nature-leaf font-sans text-lg tracking-wide">
        Explore the beauty of Royal Woods
      </p>
      {/* Added a small divider like the other pages likely have */}
      <div className="w-16 h-1 bg-nature-moss mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transform transition duration-500 bg-white p-2">
          <img 
            src={img} 
            alt={`Gallery ${i + 1}`} 
            className="w-full h-72 object-cover rounded-xl" 
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;