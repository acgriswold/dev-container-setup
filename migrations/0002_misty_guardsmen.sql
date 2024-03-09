ALTER TABLE "templates" RENAME COLUMN "content" TO "file";--> statement-breakpoint
ALTER TABLE "templates" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "templates" ALTER COLUMN "type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "templates" ALTER COLUMN "file" SET NOT NULL;