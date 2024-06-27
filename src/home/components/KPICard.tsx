import { Card } from "flowbite-react";
import { IconType } from "react-icons";

interface Props {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  onClick?: (id: string) => void;
  className?: string;
}

const KPICard = ({
  id,
  icon: Icon,
  title,
  description,
  onClick,
  className,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Card className={`${className}`} onClick={handleClick}>
      <Icon className="w-full" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default KPICard;
