import { IconType } from "react-icons";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { AiOutlineClear } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

export interface KPIData {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

export const productivityId = "productivityKpiId";
export const auditId = "auditKpiId";
export const cleaningId = "cleaningKpiId";
export const safetyId = "safetyKpiId";
export const incidentsId = "incidentsKpiId";
export const monthlyProgressId = "monthlyProgressKpiId";

export const productivityKPI: KPIData = {
  id: productivityId,
  icon: AiOutlineBarChart,
  title: "Productividad",
  description: "Gestión del envasado v/s producción",
};

export const auditKPI: KPIData = {
  id: auditId,
  icon: HiOutlineClipboardDocumentCheck,
  title: "Auditoría Etiquetado",
  description: "Desviaciones en etiquetado",
};

export const cleaningKPI: KPIData = {
  id: cleaningId,
  icon: AiOutlineClear,
  title: "Validar Limpieza",
  description: "Limpieza en la recepción del turno",
};

export const safetyKPI: KPIData = {
  id: safetyId,
  icon: MdOutlineSecurity,
  title: "Observaciones Seguridad",
  description: "Conversaciones de seguridad en el equipo",
};

export const incidentsKPI: KPIData = {
  id: incidentsId,
  icon: CgDanger,
  title: "Incidentes del Turno",
  description: "Accidentes ocurridos en el turno",
};

export const monthlyGoalKPI: KPIData = {
  id: monthlyProgressId,
  icon: FaRegCalendarAlt,
  title: "Pedido Mensual",
  description: "Producción esperada del mes",
};

export const kpiData: KPIData[] = [
  productivityKPI,
  auditKPI,
  cleaningKPI,
  safetyKPI,
  incidentsKPI,
  monthlyGoalKPI,
];

export const allKpiIds = kpiData.map((kpi) => kpi.id);
