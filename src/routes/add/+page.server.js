import db from "$lib/db.js";
import { writeFile } from "fs/promises";

export const actions = {
  new: async ({ request }) => {
    const data = await request.formData();
    const file = data.get("image");

    if (!file) {
      return { success: false, error: "Kein Bild hochgeladen" };
    }

    // Lese den Dateiinhalt als ArrayBuffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = `static/uploads/${file.name}`;
    await writeFile(filePath, buffer);

    // Erstelle den Trip mit Bildpfad
    let trip = {
      Title: data.get("title"),
      Year: data.get("year"),
      Duration: data.get("day"),
      ShortDescription: data.get("description"),
      Accompaniment: data.get("acc")
        ? data
            .get("acc")
            .split(",")
            .map((name) => name.trim()) // String in Array umwandeln
        : [], // Leeres Array, falls "acc" leer ist
      Country: data
        .get("coun")
        .split(",")
        .map((name) => name.trim()),
      Cities: data
        .get("cit")
        .split(",")
        .map((name) => name.trim()),
      TitleImage: file.name, // Bildpfad speichern
    };

    console.log("Test Create", trip);

    await db.createTrip(trip); // Speichert den Trip mit Bildpfad in der Datenbank
    return { success: true };
  },
};
