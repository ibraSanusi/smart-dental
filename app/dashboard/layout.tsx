// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-layout">
      <main>{children}</main>
    </section>
  );
}
