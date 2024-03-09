import { NextRequest, NextResponse } from "next/server";
import * as fs from 'fs';
import * as path from 'path';
import { eq } from "drizzle-orm";

import { db } from "@/drizzle";
import { templates } from "@/migrations/schema";


export async function GET(request: NextRequest) {
    const templateId = path.basename(request.nextUrl.pathname);
    const payload = (await db.select().from(templates).where(eq(templates.uuid, templateId))).at(0);

    if (!payload) {
        return new NextResponse("Could not find resource...", { status: 404 });
    }

    const file = path.resolve(payload.file);
    const content = fs.readFileSync(file);
    const res = new NextResponse(content, { headers: { 'content-type': payload.type ?? "", 'content-size': content?.length.toString() ?? "" } });
    return res;
}
