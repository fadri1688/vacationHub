import db from "$lib/db.js"

export async function load() {
    let wishes = await db.getWishes();
    return {
        wishes
    }
}