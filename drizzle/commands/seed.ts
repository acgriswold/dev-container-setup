import { db } from '@/drizzle/db'
import { seed as mockSeed } from '@/drizzle/mock/seed.mock'
import { TemplatesTable, type Template } from '@/drizzle/schema/templates'

export async function seed() {
    const insertedTemplates: Template[] = await db
        .insert(TemplatesTable)
        .values(mockSeed)
        .returning()

    console.log(`Seeded ${insertedTemplates.length} items into templates`)
}
