import * as validators from "./validators";
import * as formatters from "./formatters";
import * as parsers from "./parsers";
import { platformSelect } from "./platformSelect";
import { maxChars } from "./maxChars";

export { validators, formatters, parsers };

const numberPad = platformSelect({
  web: {
    type: "tel",
  },
  reactNative: {
    keyboardType: "number-pad",
  },
});

export const createRequired = ({
  parse,
  format,
  validate,
  ...props
}) => ({
  parse,
  format,
  validate: (value, allValues) =>
    validate
      ? validators.required(value) || validate(value, allValues)
      : validators.required(value),
  ...props,
});

/**
 * Required
 */

export const required = {
  validate: validators.required,
};

/**
 * E-mail.
 */

export const EMAIL_MAX_LENGTH = 255;

export const email = {
  validate: validators.email,
  maxLength: EMAIL_MAX_LENGTH,
  ...platformSelect({
    web: {
      type: "email",
    },
    reactNative: {
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
  }),
};

export const emailRequired = createRequired(email);

/**
 * Password.
 */

export const PASSWORD_MAX_LENGTH = 255;

export const password = {
  validate: validators.password,
  maxLength: PASSWORD_MAX_LENGTH,
  ...platformSelect({
    web: {
      type: "password",
    },
    reactNative: {
      secureTextEntry: true,
    },
  }),
};

export const passwordRequired = createRequired(password);

/**
 * Match.
 */

export const match = {
  validate: validators.match,
};

/**
 * CPF.
 */

const CPF_MAX_LENGTH = 14;

export const cpf = {
  format: maxChars(CPF_MAX_LENGTH, formatters.cpf),
  parse: maxChars(CPF_MAX_LENGTH, parsers.digits),
  validate: validators.cpf,
  maxLength: CPF_MAX_LENGTH,
  ...numberPad,
};

export const cpfRequired = createRequired(cpf);

/**
 * Phone.
 */

export const PHONE_MAX_LENGTH = 15;

export const phone = {
  format: maxChars(PHONE_MAX_LENGTH, formatters.phone),
  parse: maxChars(PHONE_MAX_LENGTH, parsers.digits),
  validate: validators.phone,
  maxLength: PHONE_MAX_LENGTH,
  ...platformSelect({
    web: {
      type: "tel",
    },
    reactNative: {
      keyboardType: "phone-pad",
    },
  }),
};

export const phoneRequired = createRequired(phone);

/**
 * CEP.
 */

export const CEP_MAX_LENGTH = 9;

export const cep = {
  format: maxChars(CEP_MAX_LENGTH, formatters.cep),
  parse: maxChars(CEP_MAX_LENGTH, parsers.digits),
  validate: validators.cep,
  maxLength: CEP_MAX_LENGTH,
  ...numberPad,
};

export const cepRequired = createRequired(cep);

/**
 * Currency.
 */

export const currency = {
  format: formatters.currency,
  parse: parsers.integer,
  ...numberPad,
};

export const currencyRequired = createRequired(currency);

/**
 * Integer.
 */

export const integer = {
  format: formatters.integer,
  parse: parsers.integer,
  validate: validators.integer,
  ...numberPad,
};

export const integerRequired = createRequired(integer);

/**
 * Past or current Year.
 */

export const PAST_OR_CURRENT_YEAR_MAX_LENGTH = 4;

export const pastOrCurrentYear = {
  format: maxChars(PAST_OR_CURRENT_YEAR_MAX_LENGTH, formatters.year),
  parse: maxChars(PAST_OR_CURRENT_YEAR_MAX_LENGTH, parsers.integer),
  validate: validators.pastOrCurrentYear,
  maxLength: PAST_OR_CURRENT_YEAR_MAX_LENGTH,
  ...numberPad,
};

export const pastOrCurrentYearRequired =
  createRequired(pastOrCurrentYear);

/**
 * Birth year.
 */

export const BIRTH_YEAR_MAX_LENGTH = 4;

export const birthYear = {
  format: maxChars(BIRTH_YEAR_MAX_LENGTH, formatters.year),
  parse: maxChars(BIRTH_YEAR_MAX_LENGTH, parsers.integer),
  validate: validators.birthYear,
  maxLength: BIRTH_YEAR_MAX_LENGTH,
  ...numberPad,
};

export const birthYearRequired = createRequired(birthYear);

/**
 * Card number.
 */

export const CARD_NUMBER_MAX_LENGTH = 44;

export const cardNumber = {
  format: maxChars(CARD_NUMBER_MAX_LENGTH, formatters.cardNumber),
  parse: maxChars(CARD_NUMBER_MAX_LENGTH, parsers.digits),
  maxLength: CARD_NUMBER_MAX_LENGTH,
  ...platformSelect({
    web: {
      type: "tel",
      autoComplete: "cc-number",
    },
    reactNative: {
      keyboardType: "number-pad",
    },
  }),
};

export const cardNumberRequired = createRequired(cardNumber);

/**
 * Card expiry.
 */

export const CARD_EXPIRY_MAX_LENGTH = 5;

export const cardExpiry = {
  format: maxChars(CARD_EXPIRY_MAX_LENGTH, formatters.cardExpiry),
  parse: maxChars(CARD_EXPIRY_MAX_LENGTH, parsers.digits),
  maxLength: CARD_EXPIRY_MAX_LENGTH,
  placeholder: "MM/AA",
  ...platformSelect({
    web: {
      type: "tel",
      autoComplete: "cc-exp",
    },
    reactNative: {
      keyboardType: "number-pad",
    },
  }),
};

export const cardExpiryRequired = createRequired(cardExpiry);

/**
 * Card code.
 */

const CARD_CODE_MAX_LENGTH = 4;

export const cardCode = {
  format: maxChars(CARD_CODE_MAX_LENGTH, formatters.cardCode),
  parse: maxChars(CARD_CODE_MAX_LENGTH, parsers.digits),
  maxLength: CARD_CODE_MAX_LENGTH,
  ...platformSelect({
    web: {
      type: "tel",
      autoComplete: "cc-csc",
    },
    reactNative: {
      keyboardType: "number-pad",
    },
  }),
};

export const cardCodeRequired = createRequired(cardCode);

/**
 * SQL Date.
 */

const SQL_DATE_MAX_LENGTH = 10;

export const sqlDate = {
  format: maxChars(SQL_DATE_MAX_LENGTH, formatters.sqlDate),
  parse: maxChars(SQL_DATE_MAX_LENGTH, parsers.sqlDate),
  validate: validators.sqlDate,
  maxLength: SQL_DATE_MAX_LENGTH,
  ...numberPad,
};

export const sqlDateRequired = createRequired(sqlDate);

/**
 * Birthdate.
 */

export const BIRTH_DATE_MAX_LENGTH = 10;

export const birthdate = {
  format: maxChars(BIRTH_DATE_MAX_LENGTH, formatters.sqlDate),
  parse: maxChars(BIRTH_DATE_MAX_LENGTH, parsers.sqlDate),
  validate: validators.birthdate,
  maxLength: BIRTH_DATE_MAX_LENGTH,
  ...numberPad,
};

export const birthdateRequired = createRequired(birthdate);

/**
 * Length.
 */

export const length = ({ min = 0, max = 255 } = {}) => ({
  maxLength: max,
  validate: validators.length({ min, max }),
});

export const lengthRequired = ({ min = 0, max = 255 } = {}) => ({
  maxLength: max,
  validate: (value) =>
    validators.required(value) ||
    validators.length({ min, max })(value),
});

/**
 * Bank Agency.
 */

export const BANK_AGENCY_MAX_LENGTH = 5;

export const bankAgency = {
  format: maxChars(BANK_AGENCY_MAX_LENGTH, parsers.digits),
  parse: maxChars(BANK_AGENCY_MAX_LENGTH, parsers.digits),
  validate: validators.bankAgency,
  maxLength: BANK_AGENCY_MAX_LENGTH,
  ...numberPad,
};

export const bankAgencyRequired = createRequired(bankAgency);

/**
 * Bank Account.
 */

export const BANK_ACCOUNT_MAX_LENGTH = 21;

export const bankAccount = {
  format: maxChars(BANK_ACCOUNT_MAX_LENGTH, formatters.bankAccount),
  parse: maxChars(BANK_ACCOUNT_MAX_LENGTH, parsers.bankAccount),
  validate: validators.bankAccount,
  maxLength: BANK_ACCOUNT_MAX_LENGTH,
};

export const bankAccountRequired = createRequired(bankAccount);
