import * as validators from './validators'
import * as formatters from './formatters'
import * as parsers from './parsers'
import platformSelect from './platformSelect'

const numberPad = platformSelect({
  web: {
    type: 'tel'
  },
  reactNative: {
    keyboardType: 'number-pad'
  }
})

export const createRequired = ({ parse, format, validate, ...props }) => ({
  parse,
  format,
  validate: (value, allValues) => validate
    ? validators.required(value) || validate(value, allValues)
    : validators.required(value),
  ...props
})

/**
 * Required
 */

export const required = {
  validate: validators.required
}

/**
 * E-mail.
 */

export const email = {
  validate: validators.email,
  ...platformSelect({
    web: {
      type: 'email'
    },
    reactNative: {
      keyboardType: 'email-address',
      autoCapitalize: 'none'
    }
  })
}

export const emailRequired = createRequired(email)

/**
 * Password.
 */

export const password = {
  validate: validators.password,
  ...platformSelect({
    web: {
      type: 'password'
    },
    reactNative: {
      secureTextEntry: true
    }
  })
}

export const passwordRequired = createRequired(password)

/**
 * Match.
 */

export const match = {
  validate: validators.match
}

/**
 * CPF.
 */

export const cpf = {
  format: formatters.cpf,
  parse: parsers.digits,
  validate: validators.cpf,
  ...numberPad
}

export const cpfRequired = createRequired(cpf)

/**
 * Phone.
 */

export const phone = {
  format: formatters.phone,
  parse: parsers.digits,
  validate: validators.phone,
  ...platformSelect({
    web: {
      type: 'tel'
    },
    reactNative: {
      keyboardType: 'phone-pad'
    }
  })
}

export const phoneRequired = createRequired(phone)

/**
 * CEP.
 */

export const cep = {
  format: formatters.cep,
  parse: parsers.digits,
  validate: validators.cep,
  ...numberPad
}

export const cepRequired = createRequired(cep)

/**
 * Currency.
 */

export const currency = {
  format: formatters.currency,
  parse: parsers.integer,
  ...numberPad
}

export const currencyRequired = createRequired(currency)

/**
 * Integer.
 */

export const integer = {
  format: formatters.integer,
  parse: parsers.integer,
  validate: validators.integer,
  ...numberPad
}

export const integerRequired = createRequired(integer)

/**
 * Past or current Year.
 */

export const pastOrCurrentYear = {
  format: formatters.year,
  parse: parsers.integer,
  validate: validators.pastOrCurrentYear,
  ...numberPad
}

export const pastOrCurrentYearRequired = createRequired(pastOrCurrentYear)

/**
 * Card number.
 */

export const cardNumber = {
  format: formatters.cardNumber,
  parse: parsers.digits,
  ...platformSelect({
    web: {
      type: 'tel',
      autoComplete: 'cc-number'
    },
    reactNative: {
      keyboardType: 'number-pad'
    }
  })
}

export const cardNumberRequired = createRequired(cardNumber)

/**
 * Card expiry.
 */

export const cardExpiry = {
  format: formatters.cardExpiry,
  parse: parsers.digits,
  placeholder: 'MM/AA',
  ...platformSelect({
    web: {
      type: 'tel',
      autoComplete: 'cc-exp'
    },
    reactNative: {
      keyboardType: 'number-pad'
    }
  })
}

export const cardExpiryRequired = createRequired(cardExpiry)

/**
 * Card code.
 */

export const cardCode = {
  format: formatters.cardCode,
  ...platformSelect({
    web: {
      type: 'tel',
      autoComplete: 'cc-csc'
    },
    reactNative: {
      keyboardType: 'number-pad'
    }
  })
}

export const cardCodeRequired = createRequired(cardCode)

/**
 * SQL Date.
 */

export const sqlDate = {
  format: formatters.sqlDate,
  parser: parsers.sqlDate,
  validate: validators.sqlDate,
  ...numberPad
}

export const sqlDateRequired = createRequired(sqlDate)
