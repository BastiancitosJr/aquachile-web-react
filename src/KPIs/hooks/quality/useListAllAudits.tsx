import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";

interface AuditResponseDto {
  id: number;

  is_done: boolean;

  comment: string;

  created_at: Date;

  updated_at: Date;
}

const useListAllAudits = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getAll = async (): Promise<AuditResponseDto[]> => {
    try {
      const allAudits: AuditResponseDto[] = await get(
        `labeling-qualities-shift/${shiftId}`
      );
      return allAudits;
    } catch (err) {
      return [];
    }
  };

  return getAll;
};

export default useListAllAudits;
