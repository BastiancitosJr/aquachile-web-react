import { GetallAuditResponseDto } from "../dtos/cleaning/get-all-audit-response-dto";
import { GetUniqueAuditResponseDto } from "../dtos/cleaning/get-unique-audit-response-dto";
import { CreateObservationAPIDto } from "../dtos/safety/create-observation-api-dto";
import { CreateObservationDto } from "../dtos/safety/create-observation-dto";
import { GetallObservationResponseDto } from "../dtos/safety/get-all-observation-response-dto";
import { AuditResponse } from "../models/cleaning/audit-response";
import { ObservationResponse } from "../models/safety/observation-response";

export const mapGetallAuditResponseDtoToAuditResponse = (
  dtos: GetallAuditResponseDto[]
): AuditResponse[] => {
  return dtos.map((dto) => ({
    id: dto.id,
    isDone: dto.is_done,
    comment: dto.comment,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  }));
};

export const mapUniqueCleaningResponseDtoToAuditResponse = (
  dto: GetUniqueAuditResponseDto
): AuditResponse => {
  return {
    id: dto.id,
    isDone: dto.is_done,
    comment: dto.comment,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
};

export const mapCreateObservationDtoToCreateObservationAPIDto = (
  dto: CreateObservationDto
): CreateObservationAPIDto => {
  return {
    is_done: dto.isDone,
    comment: dto.comment,
    uuid: dto.shiftId,
  };
};

export const mapGetallObservationResponseDtoToAuditResponse = (
  dtos: GetallObservationResponseDto[]
): ObservationResponse[] => {
  return dtos.map((dto) => ({
    id: dto.id,
    isDone: dto.is_done,
    comment: dto.comment,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  }));
};
