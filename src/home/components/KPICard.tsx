import { Card } from "flowbite-react";

interface Props {
  title: string;
  description: string;
  href: string;
  className?: string;
}

const KPICard = ({ title, description, href, className }: Props) => {
  return (
    <Card href={href} className={`${className}`}>
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
