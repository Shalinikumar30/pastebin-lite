export default function PastePage({
  params,
}: {
  params: { id: string };
}) {
  return <div>Paste ID: {params.id}</div>;
}
