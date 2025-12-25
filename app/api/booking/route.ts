import { NextRequest } from "next/server";
import { createBooking } from "../controller/bookingController";

export async function POST(request: NextRequest) {
  try {
    await createBooking(request);
    return new Response(
      JSON.stringify({ result: "ok", message: "Reserva creada correctamente" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        result: "nok",
        message: "Error al crear la reserva",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
