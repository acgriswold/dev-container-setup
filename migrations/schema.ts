import { pgTable, uniqueIndex, serial, text, timestamp } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const templates = pgTable("templates", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	content: text("content"),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		uniqueIdx: uniqueIndex("unique_idx").on(table.name),
	}
});