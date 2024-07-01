import { CreateCleaningAPIDto } from "../../KPIs/dtos/cleaning/create-cleaning-api-dto";
import { CreateCleaningDto } from "../../KPIs/dtos/cleaning/create-cleaning-dto";
import { CreateShiftResponseDto } from "../dtos/create-shift-response-dto";
import { GetShiftDto } from "../dtos/get-shift-dto";
import { ShiftInformation } from "../models/shift-information";

export const mapGetShiftDtoToShiftInformation = (
  dto: GetShiftDto
): ShiftInformation => {
  const endTime = dto.end_time ? new Date(dto.end_time) : null;

  return {
    id: dto.id,
    shiftName: dto.shift,
    endTime,
    updatedAt: new Date(dto.updated_at),
    createdAt: new Date(dto.created_at),
  };
};

export const createShiftResponseDto = (
  dto: CreateShiftResponseDto
): ShiftInformation => {
  return mapGetShiftDtoToShiftInformation(dto);
};

export const CreateCleaningDtoToCreateCleaningAPIDto = (
  domainDto: CreateCleaningDto
): CreateCleaningAPIDto => {
  return {
    done: domainDto.isDone,
    comment: domainDto.comment,
    uuid: domainDto.shiftId,
  };
};
