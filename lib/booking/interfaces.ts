export interface BookingFormRaw {
  fullname: string;
  email: string | null;
  phone: number;
  age: number | null;
  ailment: string;
  availability: Date;
  consultation: string;
}

export interface Booking {
  id: number;
  fullname: string;
  email: string | null;
  phone: number;
  contact_source: string | null;
  ailment: string;
  availability: Date;
  status: string;
  consultation: string;
  priority?: string;
}
