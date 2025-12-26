"use client";

import Table from "@/components/Table";
import { Booking } from "@/lib/booking/interfaces";
import { Api } from "@/lib/dashboard/Api";
import { computePriority } from "@/lib/dashboard/utils";
import { useEffect, useState } from "react";

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

  return <Table bookings={bookings} />;
}

export default DashboardPage;
