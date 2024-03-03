import { sql } from '@vercel/postgres'
import { db } from '@/drizzle/db'
import { TemplatesTable, Template, NewTemplate } from './tables/templates'

const newTemplate: NewTemplate[] = [
  {
    name: 'Typescript + vercel',
    description: 'Simple starter kit for setting up vercel + typescript dev container.',
    content: 'RUN download files',
  },
  {
    name: 'SSH management studio',
    description: 'SSH managment kit to generate/ assign private + public ssh keys',
  },
]

export async function seed() {
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(255) NOT NULL,
        content VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `)
  console.log(`Created "templates" table`)

  const insertedTemplates: Template[] = await db
    .insert(TemplatesTable)
    .values(newTemplate)
    .returning()
  console.log(`Seeded ${insertedTemplates.length} users`)

  return {
    createTable,
    insertedTemplates,
  }
}
