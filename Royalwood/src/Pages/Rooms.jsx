import React, { useState, useMemo } from "react";
// Importing your existing data
import roomsData from "../components/Data/roomsData"; 
import RoomCards from "../components/Home/RoomCards";

const Rooms = () => {
  // 1. STATE MANAGEMENT
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000); // Adjust default based on your highest price
  const [sortBy, setSortBy] = useState("Default");

  // 2. DYNAMIC FILTERING LOGIC
  // This runs every time a user interacts with the UI
  const filteredRooms = useMemo(() => {
    return roomsData
      .filter((room) => {
        // Handle Category/Type Filter
        // (Ensures it works even if your data uses 'category' or 'type' keys)
        const roomType = room.type || room.category; 
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(roomType);

        // Handle Price Filter
        // (Cleans strings like "$1,200" into numbers like 1200)
        const numericPrice = typeof room.price === 'string' 
          ? parseInt(room.price.replace(/[^0-9]/g, "")) 
          : room.price;
        const matchesPrice = numericPrice <= maxPrice;

        return matchesType && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "Low to High") return a.price - b.price;
        if (sortBy === "High to Low") return b.price - a.price;
        return 0; 
      });
  }, [selectedTypes, maxPrice, sortBy]);

  // Helper to toggle checkboxes
  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER SECTION */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Royalwood Luxury Collection
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Showing {filteredRooms.length} of {roomsData.length} available properties
              </p>
            </div>

            {/* SORTING DROPDOWN */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Sort:</span>
              <select 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 border-none rounded-full px-6 py-2 text-sm font-semibold focus:ring-2 focus:ring-rose-500 transition-all"
              >
                <option value="Default">Featured</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR FILTERS */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

              {/* PRICE SLIDER */}
              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-gray-700">Max Budget</label>
                  <span className="text-rose-600 font-bold">${maxPrice}</span>
                </div>
                <input 
                  type="range" min="100" max="5000" step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              {/* DYNAMIC CATEGORIES */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Property Type</h3>
                {["Luxury Suite", "Villa", "Budget"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeToggle(type)}
                      className="w-5 h-5 rounded border-gray-300 text-rose-500 focus:ring-rose-500 cursor-pointer transition-all"
                    />
                    <span className="text-gray-600 group-hover:text-black transition-colors">{type}</span>
                  </label>
                ))}
              </div>

              <button 
                onClick={() => {setSelectedTypes([]); setMaxPrice(5000);}}
                className="w-full mt-8 py-3 text-xs font-bold text-gray-400 hover:text-rose-500 uppercase tracking-widest border-t transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </aside>

          {/* ROOM CARDS GRID */}
          <main className="lg:w-3/4">
            {filteredRooms.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredRooms.map((room) => (
                  <RoomCards key={room.id} data={room} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">No rooms found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Rooms;