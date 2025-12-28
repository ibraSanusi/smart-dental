import confetti from "canvas-confetti";
import { Api } from "./Api";

export async function contactViaWhatsapp(
  phone: string,
  message: string,
  bookingId: number,
  statusText: string
) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  //   window.open(url, "_blank");
  const result = await Api.updateBookingStatus({ bookingId, statusText });

  if (!result) return null;

  confetti();
}
