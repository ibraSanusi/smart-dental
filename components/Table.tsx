import { Booking } from "@/lib/booking/interfaces";
import {
  consultationTranslations,
  statusTranslations,
  priorityTranslations,
} from "@/lib/dashboard/translations";

interface Props {
  data: Booking[];
  onSort: () => void;
}

function Table({ data, onSort }: Props) {
  return (
    <div className="h-151 overflow-y-auto overflow-x-hidden w-3xl border-2 border-black relative">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="*:py-2 *:px-4 bg-blue-400">
            <th>Nombre</th>
            <th>Tipo</th>
            <th>
              <button onClick={onSort}>Prioridad</button>
            </th>
            <th>Canal</th>
            <th>Estado</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
