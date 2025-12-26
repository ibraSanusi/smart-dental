import { NextRequest } from "next/server";
import { createBooking, getBookings } from "../controller/bookingController";

export async function POST(request: NextRequest) {
  try {
    await createBooking(request);
    return new Response(
      JSON.stringify({
        result: "ok",
        message: "Reserva creada correctamente",
        data: null,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        result: "nok",
        message: "Error al crear la reserva",
        data: null,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await getBookings();
    return new Response(
      JSON.stringify({
        result: "ok",
        message: "Reserva creada correctamente",
        data: result,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        result: "nok",
        message: "Error al crear la reserva",
        data: null,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
