import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@api";
import { zipCodeService } from "../zipCodeService";

interface Props {
  zipCode: string;
}
export function useGetZipCodeDetails({ zipCode }: Props) {
  const { data, isLoading, isError, isRefetching, refetch } = useQuery({
    queryKey: [QueryKeys.getZipCodeDetails, zipCode],
    queryFn: () => zipCodeService.getZipCodeDetails(zipCode)
  })

  return {
    isLoading,
    data,
    isError,
    isRefetching,
    refetch
  }
}