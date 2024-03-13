import { pgTable, uniqueIndex, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const templates = pgTable("templates", {
	name: text("name").notNull(),
	description: text("description"),
	file: text("file").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
	type: text("type").notNull(),
	uuid: uuid("uuid").defaultRandom(),
},
(table) => {
	return {
		uniqueIdx: uniqueIndex("unique_idx").on(table.name),
	}
});