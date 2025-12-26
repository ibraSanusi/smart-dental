import { Input } from "./ui/input";

interface Props {
  id: string;
  label: string;
  value: string;
}

function Checkbox({ id, label, value }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input type="checkbox" id={id} value={value} />
    </div>
  );
}

export default Checkbox;
