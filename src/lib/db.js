import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("VacationHub"); // select database

//////////////////////////////////////////
// VacatioinHub
//////////////////////////////////////////

// Get all Trips
async function getTrips() {
  let trips = [];
  try {
    const collection = db.collection("Trips");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    trips = await collection.find(query).toArray();
    trips.forEach((trip) => {
      trip._id = trip._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return trips;
}

// Get trip by id
// Bis jetzt noch nicht gebraucht - wird evt für Suchfunktion benötigt
async function getTrip(id) {
  let trip = null;
  try {
    const collection = db.collection("Trips");
    const query = { _id: new ObjectId(id) }; // filter by id
    trip = await collection.findOne(query);

    if (!trip) {
      console.log("No trip with id " + id);
      // TODO: errorhandling
    } else {
      trip._id = trip._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return trip;
}

// Get trip by id
async function getTripStorys(id) {
  let trips = [];
  try {
    const collection = db.collection("Entries");
    const query = {"ReiseID": id }; // filter by id
    trips = await collection.find(query).toArray();
    trips.forEach((trip) => {
      trip._id = trip._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return trips;
}
// create movie
// Example movie object:
/* 
{ 
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten"
} 
*/
async function createTrip(trip) {
  try {
    const collection = db.collection("Trips");
    const result = await collection.insertOne(trip);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

async function createEntrie(entrie) {
  try {
    const collection = db.collection("Entries");
    const result = await collection.insertOne(entrie);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated movie or null, if movie could not be updated
async function updateMovie(movie) {
  try {
    let id = movie._id;
    delete movie._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: movie });

    if (result.matchedCount === 0) {
      console.log("No movie with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Movie with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete movie by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteTrip(id) {
  try {
    const collection = db.collection("Trips");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No Trip with id " + id);
    } else {
      console.log("Trip with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// Get all Wishlist Attributes
async function getWishes() {
  let wishes = [];
  try {
    const collection = db.collection("Wishlist");
    const query = {};
    wishes = await collection.find(query).toArray();
    wishes.forEach((wishes) => {
      wishes._id = wishes._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return wishes;
}

// Add a new wish to the Wishlist collection
async function addWish({ name, countries, shortDesc, pic }) {
  try {
    const collection = db.collection("Wishlist");
    const result = await collection.insertOne({
      Name: name,
      Countries: countries.split(",").map((c) => c.trim()), // Convert to array
      ShortDesc: shortDesc,
      Pic: pic, // Path to the uploaded image
    });

    return result.insertedId.toString(); // Return the inserted ID as a string
  } catch (error) {
    console.error("Fehler beim Hinzufügen des Wunsches:", error);
    throw new Error("Fehler beim Hinzufügen des Wunsches");
  }
}

// export all functions so that they can be used in other files
export default {
  getTrips,
  getTrip,
  getTripStorys,
  createTrip,
  createEntrie,
  deleteTrip,
  getWishes,
  addWish,
};
