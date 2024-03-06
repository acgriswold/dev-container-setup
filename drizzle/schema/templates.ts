import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const TemplatesTable = pgTable(
  'templates',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    content: text('content'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (templates) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(templates.name),
    }
  }
)

export type Template = InferSelectModel<typeof TemplatesTable>
export type NewTemplate = InferInsertModel<typeof TemplatesTable>

