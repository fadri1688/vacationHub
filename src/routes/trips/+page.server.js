import db from "$lib/db.js"

export async function load() {
    let trips = await db.getTrips();
    return {
        trips
    }
}

export const actions = { 
    delete: async ({ request }) => {
        const data = await request.formData();
        let id = data.get('trip_id');
        console.log('data:', id);
        await db.deleteTrip(id); 
      }
}
