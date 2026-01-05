import { NextResponse } from "next/server";
import { safeJoinUpload, ensureDirs } from "@/lib/storage";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: { path: string[] } }) {
  ensureDirs();
  const rel = params.path.join("/");
  const full = safeJoinUpload(rel);
  if (!fs.existsSync(full)) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const data = fs.readFileSync(full);
  const ext = path.extname(full).slice(1).toLowerCase();
  const type = ext === "png" ? "image/png"
    : ext === "webp" ? "image/webp"
    : (ext === "jpg" || ext === "jpeg") ? "image/jpeg"
    : "application/octet-stream";

  return new NextResponse(data, {
    headers: {
      "content-type": type,
      "cache-control": "public, max-age=31536000, immutable"
    }
  });
}
