export async function load({ params }) {
  const tripId = params.trip_id;
  console.log("-------------:  ");
  console.dir(tripId);
  return {
    tripId,
  };
}
