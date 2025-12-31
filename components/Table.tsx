import { Booking, UpdateBookingStatusProps } from "@/lib/booking/interfaces";
import {
  consultationTranslations,
  statusTranslations,
  priorityTranslations,
} from "@/lib/dashboard/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactViaWhatsapp } from "@/lib/dashboard/whatsapp";
import { WhatsApp } from "./ui/WhatsappIcon";
import { PhoneIcon } from "lucide-react";
import { Api } from "@/lib/dashboard/Api";

interface Props {
  data: Booking[];
  onSort: () => void;
}

function Table({ data, onSort }: Props) {
  const message = (name: string) => {
    return `Hola ${name}, te escribimos desde la clínica dental. Hemos recibido tu solicitud para una consulta. ¿Podemos hablar?`;
  };

  const handleSelectChange = async ({
    bookingId,
    statusText,
  }: UpdateBookingStatusProps) => {
    const result = await Api.updateBookingStatus({ bookingId, statusText });

    if (!result) return null;
  };
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
            <th>Contacto</th>
            <th>Ajustes</th>
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
                    onClick={() =>
                      contactViaWhatsapp(
                        `34${booking.phone}`,
                        message(booking.fullname),
                        booking.id,
                        "contacted"
                      )
                    }
                  >
                    <WhatsApp className="size-6" />
                  </button>
                </div>
              </td>
              <td>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange({
                      bookingId: booking.id,
                      statusText: value,
                    })
                  }
                  name="consultation"
                >
                  <SelectTrigger className="w-45 py-6.5 bg-foreground text-white focus-visible:ring-0">
                    <SelectValue placeholder="Cambiar estados" />
                  </SelectTrigger>
                  <SelectContent className="bg-background [&>div>div]:hover:bg-foreground [&>div>div]:hover:text-white">
                    <SelectItem value="new">Nuevo</SelectItem>
                    <SelectItem value="contacted">Contactado</SelectItem>
                    <SelectItem value="scheduled_appointment">
                      Cita agendada
                    </SelectItem>
                    <SelectItem value="not_interested">
                      No interesado
                    </SelectItem>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
