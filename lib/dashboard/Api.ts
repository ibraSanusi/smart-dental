import { Booking } from "../booking/interfaces";

export class Api {
  static async request(url: string, headers?: RequestInit) {
    const response = await fetch(`/api${url}`, { ...headers });

    if (!response.ok) throw new Error(`No se pudo recuperar nada de (${url})`);
    return await response.json();
  }

  public static async getBookings(): Promise<Booking[]> {
    const result = await this.request("/booking");
    return result.data;
  }
}
