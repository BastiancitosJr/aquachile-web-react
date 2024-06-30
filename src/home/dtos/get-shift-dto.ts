export type ShiftType = "TARDE" | "MAÑANA" | "NOCHE";

export interface GetShiftDto {
  id: string;

  shift: ShiftType;

  end_time: null | Date;

  updated_at: Date;

  created_at: Date;
}
