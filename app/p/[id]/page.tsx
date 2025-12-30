import { redis } from "@/lib/redis";

export default async function Page({ params }: { params: { id: string } }) {
  const paste = await redis.get<any>(`paste:${params.id}`);
  if (!paste) return <h1>404</h1>;

  return <pre>{paste.content}</pre>;
}