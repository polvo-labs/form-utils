import * as validators from './validators'
import * as formatters from './formatters'
import * as parsers from './parsers'

export const createRequired = ({ parse, format, validate, ...props }) => ({
  parse,
  format,
  validate: value => validate
    ? validators.required(value) || validate(value)
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
  type: 'email',
  validate: validators.email
}

export const emailRequired = createRequired(email)

/**
 * Password.
 */

export const password = {
  type: 'password',
  validate: validators.password
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
  type: 'tel',
  format: formatters.cpf,
  parse: parsers.digits,
  validate: validators.cpf
}

export const cpfRequired = createRequired(cpf)

/**
 * Phone.
 */

export const phone = {
  type: 'tel',
  format: formatters.phone,
  parse: parsers.digits,
  validate: validators.phone
}

export const phoneRequired = createRequired(phone)

/**
 * CEP.
 */

export const cep = {
  type: 'tel',
  format: formatters.cep,
  parse: parsers.digits,
  validate: validators.cep
}

export const cepRequired = createRequired(cep)

/**
 * Currency.
 */

export const currency = {
  type: 'tel',
  format: formatters.currency,
  parse: parsers.integer
}

export const currencyRequired = createRequired(currency)

/**
 * Integer.
 */

export const integer = {
  type: 'tel',
  format: formatters.integer,
  parse: parsers.integer,
  validate: validators.integer
}

export const integerRequired = createRequired(integer)

/**
 * Card number.
 */

export const cardNumber = {
  type: 'tel',
  format: formatters.cardNumber,
  parse: parsers.digits,
  autoComplete: 'cc-number'
}

export const cardNumberRequired = createRequired(cardNumber)

/**
 * Card expiry.
 */

export const cardExpiry = {
  type: 'tel',
  format: formatters.cardExpiry,
  parse: parsers.digits,
  autoComplete: 'cc-exp',
  placeholder: 'MM/AA'
}

export const cardExpiryRequired = createRequired(cardExpiry)

/**
 * Card code.
 */

export const cardCode = {
  type: 'tel',
  format: formatters.cardCode,
  autoComplete: 'cc-csc'
}

export const cardCodeRequired = createRequired(cardCode)
