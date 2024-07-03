import { GetallAuditResponseDto } from "../dtos/cleaning/get-all-audit-response-dto";
import { AuditResponse } from "../models/cleaning/audit-response";

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
