CREATE TABLE
  IF NOT EXISTS countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    iso2 TEXT NOT NULL UNIQUE,
    country_name TEXT NOT NULL
  );

CREATE TABLE
  IF NOT EXISTS banks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bank_name TEXT NOT NULL,
    bank_address TEXT NOT NULL,
    swift_code TEXT NOT NULL UNIQUE,
    is_headquarter BOOLEAN NOT NULL,
    country_id INTEGER NOT NULL,
    headquarter_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES countries (id),
    FOREIGN KEY (headquarter_id) REFERENCES banks (id)
  );