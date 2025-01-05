import { json } from "@sveltejs/kit";
import db from "$lib/db";
import { writeFile } from "fs/promises";

export async function POST({ request }) {
  const data = await request.formData();
  const file = data.get("image");
  const name = data.get("name");
  const countries = data.get("countries");
  const shortDesc = data.get("shortDesc");

  if (!file || !name || !countries || !shortDesc) {
    return json({ error: "Fehlende Eingabedaten." }, { status: 400 });
  }

  // Speichern des Bildes im Ordner `static/uploads`
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = `static/uploads/${file.name}`;
  await writeFile(filePath, buffer);

  // Speichern in der Datenbank
  try {
    const insertedId = await db.addWish({
      name,
      countries,
      shortDesc,
      pic: `/uploads/${file.name}`, // Relativer Pfad zum Bild
    });

    return json({ success: true, id: insertedId }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Speichern des Eintrags:", error);
    return json({ error: "Fehler beim Speichern des Eintrags." }, { status: 500 });
  }
}


