import { db } from "../db";
import { TemplatesTable } from "../schema/templates";

export async function truncate() {
    console.log(`Clearing all items from templates`)
    await db.delete(TemplatesTable).returning();
}