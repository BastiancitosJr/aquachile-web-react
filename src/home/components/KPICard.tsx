import { Card } from "flowbite-react";

interface Props {
  id: string;
  title: string;
  description: string;
  onClick?: (id: string) => void;
  className?: string;
}

const KPICard = ({ id, title, description, onClick, className }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Card className={`${className}`} onClick={handleClick}>
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
