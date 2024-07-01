import { useState } from "react";
import KPICard from "./KPICard";
import { kpiData } from "../constants/kpi-data";
import FormsManager from "./FormsManager";
import ShiftInformationCard from "./ShiftInformationCard";
import { ShiftInformation } from "../models/shift-information";
import { ToastContainer } from "react-toastify";

interface Props {
  shiftInformation: ShiftInformation;
}

const HomeOptions = ({ shiftInformation }: Props) => {
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
    <>
      <ShiftInformationCard
        className="mb-10"
        shiftInformation={shiftInformation}
      />
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <FormsManager
          formId={currentKPIModal}
          onModalClose={onModalClose}
          shiftId={shiftInformation.id}
        />
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
    </>
  );
};

export default HomeOptions;
