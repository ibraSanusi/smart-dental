import { Booking, UpdateBookingStatusProps } from "../booking/interfaces";

export class Api {
  static async request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`/api${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`No se pudo hacer nada en (${url})`);
    }

    return response.json() as Promise<T>;
  }

  private static async update<TResponse, TPayload>(
    url: string,
    payload: TPayload
  ): Promise<TResponse> {
    return this.request<TResponse>(url, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  }

  // ===== USO =====

  public static async getBookings(): Promise<Booking[]> {
    const result = await this.request<{ data: Booking[] }>("/booking");
    return result.data;
  }

  public static async updateBookingStatus(
    payload: UpdateBookingStatusProps
  ): Promise<Booking[]> {
    const result = await this.update<
      { data: Booking[] },
      UpdateBookingStatusProps
    >("/booking", payload);
    return result.data;
  }
}
