import { supabase } from "@/lib/supabase";

export async function contactViaWhatsapp(
  phone: string,
  message: string,
  bookingId: number
) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  // window.open(url, "_blank");

  console.log({ bookingId });

  const { error } = await supabase
    .from("booking")
    .update({ status: "contacted" })
    .eq("id", bookingId);

  if (error) {
    console.error("Error updating booking status:", error);
  }
}
