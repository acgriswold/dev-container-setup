import { isNotNull } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/drizzle"
import { templates } from "@/migrations/schema"

export async function GET(request: Request) {
    const payload = (await db.select().from(templates).where(isNotNull(templates.uuid)))

    if (!payload) {
        return new NextResponse("Could not find resource...", { status: 404 });
    }

    return NextResponse.json(payload, { status: 200, headers: { 'content-type': 'application/json' } });
}