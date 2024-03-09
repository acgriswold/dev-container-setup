ALTER TABLE "templates" ADD COLUMN "uuid" uuid DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "templates" DROP COLUMN IF EXISTS "id";