import { Booking } from "@/lib/booking/interfaces";
import {
  consultationTranslations,
  statusTranslations,
  priorityTranslations,
} from "@/lib/dashboard/translations";
import { contactViaWhatsapp } from "@/lib/dashboard/whatsapp";
import { WhatsApp } from "./ui/WhatsappIcon";
import { PhoneIcon } from "lucide-react";

interface Props {
  data: Booking[];
  onSort: () => void;
}

const phone = "34631752039";
const message =
  "Hola Ana, te escribimos desde la clínica dental. Hemos recibido tu solicitud para una consulta. ¿Podemos hablar?";

function Table({ data, onSort }: Props) {
  return (
    <div className="h-151 overflow-y-auto overflow-x-hidden w-5xl border-2 border-black relative">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="*:py-2 *:px-4 bg-blue-400 *:text-start">
            <th>Nombre</th>
            <th>Tipo</th>
            <th>
              <button onClick={onSort}>Prioridad</button>
            </th>
            <th>Canal</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((booking) => (
            <tr key={booking.id} className="*:py-2 *:px-4">
              <td>{booking.fullname}</td>
              <td>{consultationTranslations[booking.consultation]}</td>
              <td>{priorityTranslations[booking.priority ?? "low"]}</td>
              <td>{booking.contact_source}</td>
              <td>{statusTranslations[booking.status]}</td>
              <td>
                <div className="py-4 space-x-4">
                  <button
                    className="size-6"
                    onClick={() =>
                      contactViaWhatsapp(
                        phone,
                        message,
                        booking.id,
                        "contacted"
                      )
                    }
                  >
                    <WhatsApp />
                  </button>
                  <button className="size-6">
                    <PhoneIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
