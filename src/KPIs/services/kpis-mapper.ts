import { GetallAuditResponseDto } from "../dtos/cleaning/get-all-audit-response-dto";
import { GetUniqueAuditResponseDto } from "../dtos/cleaning/get-unique-audit-response-dto";
import { GetIncidentsResponseDto } from "../dtos/incidents/get-incidents-response-dto";
import { CreateMonthlyGoalAPIDto } from "../dtos/monthly-goal/create-monthly-goal-api-dto";
import { CreateMonthlyGoalDto } from "../dtos/monthly-goal/create-monthly-goal-dto";
import { CreateProductivityAPIDto } from "../dtos/productivity/create-productivity-api-dto";
import { CreateProductivityDto } from "../dtos/productivity/create-productivity-dto";
import { GetOneProductivityResponseDto } from "../dtos/productivity/get-one-productivity-response-dto";
import { CreateObservationAPIDto } from "../dtos/safety/create-observation-api-dto";
import { CreateObservationDto } from "../dtos/safety/create-observation-dto";
import { GetallObservationResponseDto } from "../dtos/safety/get-all-observation-response-dto";
import { AuditResponse } from "../models/cleaning/audit-response";
import { CleaningResponse } from "../models/cleaning/cleaning-response";
import { IncidentResponse } from "../models/incidents/incident-response";
import { ProductivityResponse } from "../models/productivity/productivity-response";
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

export const mapCreateProductivityDtoToCreateProductivityAPIDto = (
  dto: CreateProductivityDto
): CreateProductivityAPIDto => {
  return {
    packed_tons: dto.packedTons,
    tons_produced: dto.producedTons,
    uuid: dto.shiftId,
  };
};

export const mapGetOneProductivityResponseDtoToProductivityResponse = (
  dto: GetOneProductivityResponseDto
): ProductivityResponse => {
  return {
    id: dto.id,
    packedTons: dto.packed_tons,
    producedTons: dto.tons_produced,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
};

export const mapGetUniqueAuditResponseDtoToCleaningResponse = (
  dto: GetUniqueAuditResponseDto
): CleaningResponse => {
  return {
    id: dto.id,
    isDone: dto.is_done,
    comment: dto.comment,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
};

export const mapGetIncidentsResponseDtoToIncidentResponse = (
  dto: GetIncidentsResponseDto
): IncidentResponse => {
  return {
    id: dto.id,
    comment: dto.comment,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
};

export const mapCreateMonthlyGoalDtoToCreateMonthlyGoalAPIDto = (
  dto: CreateMonthlyGoalDto
): CreateMonthlyGoalAPIDto => {
  return {
    monthly_order: dto.tons,
    uuid: dto.shiftId,
  };
};
