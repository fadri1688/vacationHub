import { json } from "@sveltejs/kit";
import db from "$lib/db";
import { writeFile } from "fs/promises";

export async function POST({ request }) {
  try {
    const data = await request.formData();
    console.log("Empfangene Daten:", data);
    const type = data.get("type"); // Typ: 'trip' oder 'wish'
    const file = data.get("image");
    const description = data.get("shortDesc") || data.get("description");

    if (!type || !file || !description) {
      return json({ error: "Fehlende Eingabedaten." }, { status: 400 });
    }

    // Bildverarbeitung
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = `static/uploads/${file.name}`;
    await writeFile(filePath, buffer);

    if (type === "trip") {
      // Spezifisch für Trips
      const trip = {
        Title: data.get("title"),
        Year: data.get("year"),
        Duration: data.get("day"),
        ShortDescription: description,
        TitleImage: `${file.name}`,
        Accompaniment: data.get("acc")
          ? data
              .get("acc")
              .split(",")
              .map((a) => a.trim())
          : [],
        Country: data.get("coun")
          ? data
              .get("coun")
              .split(",")
              .map((c) => c.trim())
          : [],
        Cities: data.get("cit")
          ? data
              .get("cit")
              .split(",")
              .map((c) => c.trim())
          : [],
      };
      const insertedId = await db.createTrip(trip);
      return json({ success: true, id: insertedId }, { status: 201 });
    } else if (type === "wish") {
      // Spezifisch für Wishes
      const wish = {
        name: data.get("name"),
        pic: `/uploads/${file.name}`,
        countries: data.get("countries"),
      };
      const insertedId = await db.addWish(wish);
      return json({ success: true, id: insertedId }, { status: 201 });
    }else if(type === "day"){
      const entrie = {
        ReiseID: data.get("reiseId"),
        Day: data.get("day"),
        Description: description,
        Images: [`${file.name}`]
      };
      const insertedId = await db.createEntrie(entrie);
      return json({ success: true, id: insertedId }, { status: 201 });
    } else {
      return json({ error: "Ungültiger Typ." }, { status: 400 });
    }
  } catch (error) {
    console.error("Fehler beim Speichern:", error);
    return json({ error: "Serverfehler beim Speichern." }, { status: 500 });
  }
}
