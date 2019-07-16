# form-utils

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This module provides a set of helpers for validating and formatting data,
specially made for using with react-final-form module.

## Installation

`yarn add @polvo-labs/form-utils ramda`

## Usage

```js
// Import the helpers you want to use
import { required, emailRequired, phone } from '@polvo-labs/form-utils'

// You can import all helpers too
import * as formUtils from '@polvo-labs/form-utils'
```

Each helper, is an object with the following structure:

```js
{
  type,
  parse,
  format,
  validate
}
```

You can inject them directly into the `<Field />` component:

```jsx
<Container>
  <Field
    name='name'
    component='input'
    {...required}
  />
  <Field
    name='email'
    component='input'
    {...emailRequired}
  />
  <Field
    name='phone'
    component='input'
    {...phone}
  />
</Container>
```

Or, you can simply use them to format or parse your data:

```js
import { phone } from '@polvo-labs/form-utils'

phone.format('41999999999')
// => '41 9-9999-9999'

phone.parse('41 9-9999-9999')
// => '41999999999'
```

## Available Helpers

### required

### email / emailRequired

### password / passwordRequired

### match

```jsx
<React.Fragment>
  <Field
    name='password'
    label='Password'
    component={FormField}
    {...forms.passwordRequired}
  />
  <Field
    name='password_confirm'
    label='Password confirm'
    component={FormField}
    validate={forms.match.validate({
      field: 'password',
      message: 'Passwords do not match'
    })}
  />
</React.Fragment>
```

### cpf / cpfRequired

### phone / phoneRequired

### cep / cepRequired

### currency / currencyRequired

### integer / integerRequired

### cardNumber / cardNumberRequired

### cardExpiry / cardExpiryRequired

### cardCode / cardCodeRequired

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
