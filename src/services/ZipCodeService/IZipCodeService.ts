export interface ZipCodeDetailsProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface IZipCodeService {
  getZipCodeDetails: (zipcode: string) => Promise<ZipCodeDetailsProps>;
}
