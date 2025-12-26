import { Booking } from "@/lib/booking/interfaces";

export function computePriority(data: Booking) {
  const { consultation, pain, ailment, availability, created_at } = data;

  console.log({ consultation, pain, ailment, availability, created_at });

  data = { ...data, priority: "low" };

  if (
    consultation === "urgency" &&
    pain &&
    ailment.includes("sangre") &&
    new Date(created_at).getHours() > new Date().getHours() - 10
  )
    data = { ...data, priority: "high" };
  if (
    ["implants", "cosmetic_dentistry", "orthodontics"].includes(consultation) &&
    !pain &&
    availability &&
    created_at.getHours() > new Date().getHours() - 10
  )
    data = { ...data, priority: "medium" };

  return data;
}
