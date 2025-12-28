import confetti from "canvas-confetti";

export async function contactViaWhatsapp(
  phone: string,
  message: string,
  bookingId: number,
  statusText: string
) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  //   window.open(url, "_blank");
  const response = await fetch("/api/booking", {
    method: "PUT",
    body: JSON.stringify({ bookingId, statusText }),
  });

  if (!response.ok) return null;

  confetti();
}
