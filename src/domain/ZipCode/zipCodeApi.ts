import { viaCepApi } from "../../api/viaCepApi";
import { ZipCodeApiProps } from "./types";

async function getZipCodeDetails(zipCode: string): Promise<ZipCodeApiProps> {
  const response = await viaCepApi.get<ZipCodeApiProps>(`/ws/${zipCode}/json`)
  return response.data
}

export const zipCodeApi = {
  getZipCodeDetails
}