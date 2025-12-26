import { Input } from "./ui/input";

interface Props {
  id: string;
  label: string;
  value: string;
  name: string;
}

function Checkbox({ id, label, value, name }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input type="checkbox" id={id} name={name} value={value} />
    </div>
  );
}

export default Checkbox;
