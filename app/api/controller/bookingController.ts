import { BookingFormRaw } from "@/lib/booking/interfaces";
import { NextRequest } from "next/server";
import { fetchBookings, saveBooking } from "../services/bookingServices";

export async function createBooking(request: NextRequest) {
  const formData = await request.formData();

  const fullname = formData.get("fullname") as string;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as number | null;
  const age = formData.get("age") as number | null;
  const ailment = formData.get("ailment") as string | null;
  const availability = formData.get("availability") as Date | null;
  const consultation = formData.get("consultation") as string | null;

  if (!fullname || !phone || !ailment || !availability || !consultation) {
    return null;
  }

  const payload: BookingFormRaw = {
    fullname,
    email,
    phone,
    age,
    ailment,
    availability,
    consultation,
  };

  const { error } = await saveBooking(payload);

  if (error) throw new Error("No se ha podido crear la reserva.");
}

export async function getBookings() {
  const { error, data } = await fetchBookings();

  if (error) throw new Error("No se ha podido recuperar reservas.");

  return data;
}
