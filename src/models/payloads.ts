// Base model used across all endpoints
interface BankListing {
  address: string;
  bankName: string;
  countryISO2: string;
  isHeadquarter: boolean;
  swiftCode: string;
}

// |   (GET)    |  /v1/swift-codes/:swiftCode        |  RESPONSE  |  Returns a branch's details
// |   (POST)   |  /v1/swift-codes                   |  REQUEST   |  Payload to create a bank
interface BranchListing extends BankListing {
  countryName: string;
}

// |   (GET)    |  /v1/swift-codes/:swiftCode        |  RESPONSE  |  Returns a headquarter + its branches
interface HeadquarterListing extends BranchListing {
  branches: BankListing[];
}

// |   (GET)    |  /v1/swift-codes/country/:ISO2code |  RESPONSE  |  Returns all SWIFT codes in a country
interface CountryListing {
  countryISO2: string;
  countryName: string;
  swiftCodes: BankListing[];
}

// |   (POST)   |  /v1/swift-codes                   |  RESPONSE  |  Acknowledges creation
// |  (DELETE)  |  /v1/swift-codes/:swift-code       |  RESPONSE  |  Acknowledges deletion
interface ApiResponse {
  message: string;
}

/*
    ---------------------------------------------------------------------------
    |  (METHOD)  |  ENDPOINT PATH                     |    TYPE    |  PURPOSE  |
    ---------------------------------------------------------------------------

    METHOD   →  HTTP verb (GET, POST, etc.)
    PATH     →  REST endpoint path
    TYPE     →  Payload direction (REQUEST or RESPONSE)
    PURPOSE  →  What the payload represents
*/
