export default function PastePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Paste Page</h1>
      <p>Paste ID: {params.id}</p>
    </div>
  );
}
