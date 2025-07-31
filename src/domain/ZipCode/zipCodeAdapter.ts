import { ZipCodeApiProps, ZipCodeProps } from "./types";

function toZipCodeDetails(responseApi: ZipCodeApiProps): ZipCodeProps {
  return {
    neighborhood: responseApi.bairro,
    zipCode: responseApi.cep,
    complement: responseApi.complemento,
    ddd: parseInt(responseApi.ddd),
    gia: parseInt(responseApi.gia),
    ibge: parseInt(responseApi.ibge),
    siafi: parseInt(responseApi.siafi),
    locality: responseApi.localidade,
    publicPlace: responseApi.logradouro,
    region: responseApi.regiao,
    state: responseApi.estado,
    uf: responseApi.uf,
    unit: responseApi.unidade,
    error: responseApi.erro
  }
}

export const zipCodeAdapter = {
  toZipCodeDetails
}