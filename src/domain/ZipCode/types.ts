export interface ZipCodeProps {
  zipCode: string;
  publicPlace: string;
  complement: string;
  unit: string;
  neighborhood: string;
  locality: string;
  uf: string;
  state: string;
  region: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
}

export interface ZipCodeApiProps {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}