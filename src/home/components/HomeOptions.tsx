import { useState } from "react";
import KPICard from "./KPICard";
import { kpiData } from "../constants/kpi-data";
import FormsManager from "./FormsManager";

const HomeOptions = () => {
  const [currentKPIModal, setCurrentKPIModal] = useState<string | undefined>(
    undefined
  );

  const onCardClick = (id: string) => {
    setCurrentKPIModal(id);
  };

  const onModalClose = () => {
    setCurrentKPIModal(undefined);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <FormsManager formId={currentKPIModal} onModalClose={onModalClose} />
      {kpiData.map(({ id, icon, title, description }) => (
        <KPICard
          key={id}
          icon={icon}
          id={id}
          title={title}
          description={description}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default HomeOptions;
