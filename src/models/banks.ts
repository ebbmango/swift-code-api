import { countryCodes } from "../constants/countries-iso2.ts";

type CountryISO2 = keyof typeof countryCodes;
type CountryName = typeof countryCodes[CountryISO2];

interface Bank {
  swiftCode: string;
  bankName: string;
  address: string;
  countryISO2: CountryISO2;
  countryName: CountryName;
  isHeadquarter: boolean;
}

interface Branch extends Bank {
  isHeadquarter: false;
}

interface Headquarter extends Bank {
  isHeadquarter: true;
  branches: Branch[];
}

export type { CountryISO2, CountryName, Branch, Headquarter };