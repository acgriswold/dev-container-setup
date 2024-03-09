import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const TemplatesTable = pgTable(
  'templates',
  {
    uuid: uuid('uuid').defaultRandom(),
    name: text('name').notNull(),
    extension: text('extension'),
    description: text('description'),
    file: text('file').notNull(),
    type: text('type').notNull(),
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

