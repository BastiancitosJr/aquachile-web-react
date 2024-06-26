import {
  auditId,
  cleaningId,
  incidentsId,
  monthlyProgressId,
  productivityId,
  safetyId,
} from "../constants/kpi-data";

export interface GetKPIsShowStateResponse {
  productivity: boolean;
  audit: boolean;
  cleaning: boolean;
  safety: boolean;
  incidents: boolean;
  monthlyProgress: boolean;
}

export const getKPIsShowState = (kpiId?: string): GetKPIsShowStateResponse => {
  return {
    productivity: productivityId === kpiId,
    audit: auditId === kpiId,
    cleaning: cleaningId === kpiId,
    safety: safetyId === kpiId,
    incidents: incidentsId === kpiId,
    monthlyProgress: monthlyProgressId === kpiId,
  };
};
