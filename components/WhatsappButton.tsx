import { ContactProps } from "@/lib/booking/interfaces";
import { WhatsApp } from "./ui/WhatsappIcon";
import { contactViaWhatsapp } from "@/lib/dashboard/whatsapp";

function WhatsappButton({ phone, message }: ContactProps) {
  return (
    <button
      className="size-6"
      onClick={() => contactViaWhatsapp(phone, message)}
    >
      <WhatsApp />
    </button>
  );
}

export default WhatsappButton;
