"use client";

import Table from "@/components/Table";
import { Booking } from "@/lib/booking/interfaces";
import { Api } from "@/lib/dashboard/Api";
import { computePriority } from "@/lib/dashboard/utils";
import { useEffect, useState } from "react";

const priorityOrder: Record<string, number> = {
  high: 1,
  medium: 2,
  low: 3,
};

function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>();
  useEffect(() => {
    (async () => {
      const bookingsResult = await Api.getBookings();
      const prioriciedBookings = bookingsResult.map((booking) => {
        return computePriority(booking);
      });
      setBookings(prioriciedBookings);
    })();
  }, []);

  if (!bookings) return <div>No hay datos aún...</div>;

  const handleSorting = () => {
    const result = [...bookings].sort(
      (a, b) => priorityOrder[a.priority ?? 0] - priorityOrder[b.priority ?? 0]
    );
    setBookings(result);
  };

  return <Table onSort={handleSorting} data={bookings} />;
}

export default DashboardPage;
