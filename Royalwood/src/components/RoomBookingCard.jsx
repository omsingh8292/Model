import React, { useState } from "react";

const RoomBookingCard = ({ room }) => {

const [mainImage,setMainImage] = useState(room.image)
const [guests,setGuests] = useState(1)

if(!room) return null

return (

<div className="bg-white rounded-2xl shadow-xl w-[560px] overflow-hidden">

{/* Main Image */}

<img
src={mainImage}
className="w-full h-[300px] object-cover"
/>

{/* Gallery */}

<div className="flex gap-2 p-3">

{room.gallery?.map((img,i)=>(
<img
key={i}
src={img}
onClick={()=>setMainImage(img)}
className="w-20 h-16 object-cover rounded cursor-pointer hover:scale-105"
/>
))}

</div>

<div className="p-6">

<h2 className="text-2xl font-semibold">
{room.title}
</h2>

<p className="text-green-800 font-bold mt-2">
{room.price}
</p>

{/* Dates */}

<div className="grid grid-cols-2 gap-4 mt-4">

<input type="date"
className="border p-2 rounded"/>

<input type="date"
className="border p-2 rounded"/>

</div>

{/* Guests Counter */}

<div className="flex items-center gap-4 mt-6">

<p className="text-gray-600">Guests</p>

<button
onClick={()=>guests>1 && setGuests(guests-1)}
className="px-3 py-1 bg-gray-200 rounded"
>
-
</button>

<span>{guests}</span>

<button
onClick={()=>setGuests(guests+1)}
className="px-3 py-1 bg-gray-200 rounded"
>
+
</button>

</div>

{/* Book Button */}

<button className="w-full mt-6 bg-green-800 text-white py-3 rounded-lg hover:bg-green-900">

Reserve Room

</button>

</div>
// all things are in the card, so we close the card div here
</div>

)

}

export default RoomBookingCard