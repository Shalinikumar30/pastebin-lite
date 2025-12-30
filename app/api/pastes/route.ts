import { redis } from "@/lib/redis";
import { v4 as uuid } from "uuid";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body?.content || typeof body.content !== "string" || !body.content.trim()) {
    return Response.json({ error: "Invalid content" }, { status: 400 });
  }

  const { ttl_seconds, max_views } = body;

  if (ttl_seconds !== undefined && (!Number.isInteger(ttl_seconds) || ttl_seconds < 1)) {
    return Response.json({ error: "Invalid ttl_seconds" }, { status: 400 });
  }

  if (max_views !== undefined && (!Number.isInteger(max_views) || max_views < 1)) {
    return Response.json({ error: "Invalid max_views" }, { status: 400 });
  }

  const id = uuid();
  const createdAt = Date.now();

  await redis.set(`paste:${id}`, {
    content: body.content,
    createdAt,
    ttl_seconds: ttl_seconds ?? null,
    max_views: max_views ?? null,
    views: 0
  });

  return Response.json({
    id,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/p/${id}`
  });
}