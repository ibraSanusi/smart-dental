import { BookingFormRaw } from "@/lib/booking/interfaces";
import { supabase } from "@/lib/supabase";

export async function saveBooking(payload: BookingFormRaw) {
  return await supabase.from("booking").insert(payload).select();
}

export async function fetchBookings() {
  return await supabase.from("booking").select("*");
}
