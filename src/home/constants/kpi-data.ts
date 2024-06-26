export interface KPIData {
  id: string;
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
  title: "Productividad",
  description: "Gestión del envasado v/s producción",
};

export const auditKPI: KPIData = {
  id: auditId,
  title: "Auditoría Etiquetado",
  description: "Desviaciones en etiquetado",
};

export const cleaningKPI: KPIData = {
  id: cleaningId,
  title: "Validar Limpieza",
  description: "Limpieza en la recepción del turno",
};

export const kpiData: KPIData[] = [
  productivityKPI,
  auditKPI,
  cleaningKPI,
  {
    id: safetyId,
    title: "Observaciones Seguridad",
    description: "Conversaciones de seguridad en el equipo",
  },
  {
    id: incidentsId,
    title: "Incidentes del Turno",
    description: "Accidentes ocurrídos en el turno",
  },
  {
    id: monthlyProgressId,
    title: "Avance Mensual",
    description: "Producción esperada del mes",
  },
];

export const allKpiIds = kpiData.map((kpi) => kpi.id);
