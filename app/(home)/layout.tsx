import Header from "@/components/Header";
import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full">
      <Header />
      {children}
    </main>
  );
}

export default HomeLayout;
