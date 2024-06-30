import { Spinner as FlowbiteSpinner } from "flowbite-react";

interface Props {
  color?: string;
  ariaLabel?: string;
}

const Spinner = ({
  color = "enterpriseOrange",
  ariaLabel = "Spinner de carga",
}: Props) => {
  return <FlowbiteSpinner color={color} aria-label={ariaLabel} size="2xl" />;
};

export default Spinner;
