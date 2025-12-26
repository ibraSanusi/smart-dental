"use client";

import { Booking } from "@/lib/booking/interfaces";
import { Api } from "@/lib/dashboard/Api";
import { computePriority } from "@/lib/dashboard/utils";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>();
  useEffect(() => {
    (async () => {
      const bookingResult = await Api.getBookings();
      const data = computePriority(bookingResult.data);
      setBookings(data);
    })();
  }, []);

  if (!bookings) return <div>No hay datos aún...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Prioridad</th>
          <th>Canal</th>
          <th>Estado</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.fullname}</td>
            <td>{booking.consultation}</td>
            <td>{booking.priority ?? "-"}</td>
            <td>{booking.contact_source}</td>
            <td>{booking.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DashboardPage;
