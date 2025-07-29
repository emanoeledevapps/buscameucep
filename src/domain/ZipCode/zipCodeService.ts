import { ZipCodeProps } from "./types";
import { zipCodeAdapter } from "./zipCodeAdapter";
import { zipCodeApi } from "./zipCodeApi";

async function getZipCodeDetails(zipCode: string): Promise<ZipCodeProps> {
  const response = await zipCodeApi.getZipCodeDetails(zipCode)
  return zipCodeAdapter.toZipCodeDetails(response)
}

export const zipCodeService = {
  getZipCodeDetails
}