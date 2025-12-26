// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen grid place-content-center">
      <main>{children}</main>
    </section>
  );
}
