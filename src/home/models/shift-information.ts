export type ShiftNameType = "TARDE" | "MAÑANA" | "NOCHE";

export interface ShiftInformation {
  id: string;

  shiftName: ShiftNameType;

  endTime: null | Date;

  updatedAt: Date;

  createdAt: Date;
}
