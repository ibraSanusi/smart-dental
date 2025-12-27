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
    <table className="border-2 border-black w-3xl h-151 overflow-x-hidden overflow-y-scroll">
      <thead>
        <tr className="*:py-2 *:px-4 *:text-start bg-blue-400">
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
        {data.map(
          ({
            id,
            fullname,
            consultation,
            priority,
            contact_source,
            status,
          }) => (
            <tr className="*:py-2 *:px-4" key={id}>
              <td>{fullname}</td>
              <td>{consultationTranslations[consultation]}</td>
              <td>{priorityTranslations[priority ?? "low"]}</td>
              <td>{contact_source}</td>
              <td>{statusTranslations[status]}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default Table;
