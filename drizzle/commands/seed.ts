import { db } from '@/drizzle/db'
import { templateSeed } from '@/drizzle/mock/seed.mock'
import { TemplatesTable, type Template } from '@/drizzle/schema/templates'

export async function seed(clear:boolean = false) {
    if (clear) {
        console.log(`Clearing all items from templates`)
        await db.delete(TemplatesTable).returning();
    }

    const insertedTemplates: Template[] = await db
        .insert(TemplatesTable)
        .values(templateSeed)
        .returning()

    console.log(`Seeded ${insertedTemplates.length} items into templates`)
}
