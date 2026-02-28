import React from "react";
// Path: Up one level to src, then into components/Data
import { roomsData } from "../components/Data/RoomsData";
// Path: Up one level to src, then into components/Home
import RoomCards from "../components/Home/RoomCards";

const Rooms = () => {
  return (
    <div className="rooms-page">
      <div
        className="rooms-header"
        style={{ textAlign: "center", padding: "40px 0" }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Royalwood Collections
        </h1>
        <p style={{ color: "#555", fontSize: "1.2rem" }}>
          Explore our 20+ luxury stays designed for royalty.
        </p>
      </div>

      <div className="rooms-grid">
        {roomsData.map((room) => (
          /* We pass the whole 'room' object as a prop called 'data' */
          <RoomCards key={room.id} data={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
