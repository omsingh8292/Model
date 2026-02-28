import React from 'react';

const RoomCards = ({ data }) => {
  // If data hasn't loaded yet, don't break the app
  if (!data) return null;

  return (
    <div className="room-card">
      <div className="room-card-image">
       <img 
  src={data.image} 
  alt={data.title} 
  crossOrigin="anonymous" 
  loading="lazy"
  className="w-full h-64 object-cover rounded-t-xl" 
/>
      </div>
      <div className="room-card-content" style={{ padding: '15px 0' }}>
        <h3 style={{ margin: '10px 0 5px', fontSize: '1.2rem' }}>{data.title}</h3>
        <p style={{ color: '#b8926a', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {data.price}
        </p>
        <button className="book-btn" style={{ 
          marginTop: '10px', 
          padding: '8px 20px', 
          backgroundColor: '#1a1a1a', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          borderRadius: '4px'
        }}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCards;