import { db } from '../db'
import { templateSeed } from '../mock/seed.mock'
import { TemplatesTable, type Template } from '../schema/templates'

export async function seed(clear:boolean = false) {
    if (clear) {
        console.log(`Clearing all items from ${TemplatesTable.name}`)
        await db.delete(TemplatesTable).returning();
    }

    const insertedTemplates: Template[] = await db
        .insert(TemplatesTable)
        .values(templateSeed)
        .returning()

    console.log(`Seeded ${insertedTemplates.length} items into ${TemplatesTable.name}`)
}
