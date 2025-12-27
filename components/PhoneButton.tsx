import { ContactProps } from "@/lib/booking/interfaces";
import PhoneIcon from "./ui/PhoneIcon";
import { contactViaWhatsapp } from "@/lib/dashboard/whatsapp";

function PhoneButton({ phone, message }: ContactProps) {
  return (
    <button
      className="size-6"
      onClick={() => contactViaWhatsapp(phone, message)}
    >
      <PhoneIcon />
    </button>
  );
}

export default PhoneButton;
