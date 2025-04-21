import countryCodes from "../constants/countries-iso2.json" with { type: "json" };

type CountryISO2 = keyof typeof countryCodes;

interface Bank {
  swiftCode: string;
  bankName: string;
  address: string;
  countryISO2: CountryISO2;
  countryName: string;
  isHeadquarter: boolean;
}

interface Branch extends Bank {
  isHeadquarter: false;
}

interface Headquarter extends Bank {
  isHeadquarter: true;
  branches: Branch[];
}

export type { CountryISO2, Branch, Headquarter };