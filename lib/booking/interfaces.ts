export interface BookingFormRaw {
  fullname: string;
  email: string | null;
  phone: number;
  age: number | null;
  ailment: string;
  availability: Date;
  consultation: string;
  pain: boolean;
}

export interface Booking {
  id: number;
  fullname: string;
  email: string | null;
  phone: number;
  contact_source: string | null;
  ailment: string;
  availability: Date;
  status: "new" | "contacted" | "scheduled_appointment" | "not_interested";
  consultation: string;
  priority?: string;
  pain: boolean;
  created_at: Date;
}

export interface ContactProps {
  phone: string;
  message: string;
}

export interface UpdateBookingStatusProps {
  bookingId: number;
  statusText: string;
}
