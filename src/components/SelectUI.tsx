import { FormLabel, Select } from "@chakra-ui/react";

interface SelectUIProps {
  options: string[];
  id: string;
  value: string;
}

function SelectUI(props: SelectUIProps) {
  return (
    <>
      <FormLabel htmlFor={props.id}>{props.value}</FormLabel>
      <Select id={props.id} placeholder={props.value}>
        {props.options?.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </Select>
    </>
  );
}

export default SelectUI;
