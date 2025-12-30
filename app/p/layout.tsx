import { ReactNode } from "react";

export default function PLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section style={{ padding: "2rem" }}>
      {children}
    </section>
  );
}
