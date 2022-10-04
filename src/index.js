import * as validators from "./validators";
import * as formatters from "./formatters";
import * as parsers from "./parsers";
import { platformSelect } from "./platformSelect";

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

export const email = {
  validate: validators.email,
  maxLength: 255,
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

export const password = {
  validate: validators.password,
  maxLength: 255,
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

export const cpf = {
  format: formatters.cpf,
  parse: parsers.digits,
  validate: validators.cpf,
  maxLength: 14,
  ...numberPad,
};

export const cpfRequired = createRequired(cpf);

/**
 * Phone.
 */

export const phone = {
  format: formatters.phone,
  parse: parsers.digits,
  validate: validators.phone,
  maxLength: 15,
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

export const cep = {
  format: formatters.cep,
  parse: parsers.digitsWith(8),
  validate: validators.cep,
  maxLength: 9,
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

export const pastOrCurrentYear = {
  format: formatters.year,
  parse: parsers.integer,
  validate: validators.pastOrCurrentYear,
  maxLength: 4,
  ...numberPad,
};

export const pastOrCurrentYearRequired =
  createRequired(pastOrCurrentYear);

/**
 * Birth year.
 */

export const birthYear = {
  format: formatters.year,
  parse: parsers.integer,
  validate: validators.birthYear,
  maxLength: 4,
  ...numberPad,
};

export const birthYearRequired = createRequired(birthYear);

/**
 * Card number.
 */

export const cardNumber = {
  format: formatters.cardNumber,
  parse: parsers.digits,
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

export const cardExpiry = {
  format: formatters.cardExpiry,
  parse: parsers.digits,
  maxLength: 5,
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

export const cardCode = {
  format: formatters.cardCode,
  parse: parsers.digits,
  maxLength: 4,
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

export const sqlDate = {
  format: formatters.sqlDate,
  parse: parsers.sqlDate,
  validate: validators.sqlDate,
  maxLength: 10,
  ...numberPad,
};

export const sqlDateRequired = createRequired(sqlDate);

/**
 * Birthdate.
 */

export const birthdate = {
  format: formatters.sqlDate,
  parse: parsers.sqlDate,
  validate: validators.birthdate,
  maxLength: 10,
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

export const bankAgency = {
  format: parsers.digitsWith(5),
  parse: parsers.digitsWith(5),
  validate: validators.bankAgency,
  maxLength: 5,
  ...numberPad,
};

export const bankAgencyRequired = createRequired(bankAgency);

/**
 * Bank Account.
 */

export const bankAccount = {
  format: formatters.bankAccount,
  parse: parsers.bankAccount,
  validate: validators.bankAccount,
  maxLength: 21,
};

export const bankAccountRequired = createRequired(bankAccount);
