import db from "$lib/db.js";

export async function load({ params }) {
  const tripId = params.trip_id;
  let trips = await db.getTripStorys(tripId);
  
  console.log("-------------:  ");
  console.dir(trips);
  return {
    trips,
  };
}
