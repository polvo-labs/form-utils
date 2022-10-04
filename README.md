# form-utils

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This module provides a set of helpers for validating and formatting data,
specially made for using with react-final-form module.

**[CODESANDBOX WITH EXAMPLES](https://codesandbox.io/s/polvo-labs-form-utils-demo-d3um03?file=/src/App.js)**

## Installation

`yarn add @polvo-labs/form-utils ramda`

## Usage

```js
// Import the helpers you want to use
import {
  required,
  emailRequired,
  phone,
} from "@polvo-labs/form-utils";

// You can import all helpers too
import * as formUtils from "@polvo-labs/form-utils";
```

Each helper, is an object with the following structure:

```js
{
  type, // in react native, this will be replaced by `keyboardType` or `secureTextEntry` for example
    parse,
    format,
    validate;
}
```

You can inject them directly into the `<Field />` component:

```jsx
<Container>
  <Field name="name" component="input" {...required} />
  <Field name="email" component="input" {...emailRequired} />
  <Field name="phone" component="input" {...phone} />
</Container>
```

Or, you can simply use them to format or parse your data:

```js
import { phone } from "@polvo-labs/form-utils";

phone.format("41999999999");
// => '41 9-9999-9999'

phone.parse("41 9-9999-9999");
// => '41999999999'
```

## React Native

In order to make it work with React Native, you need to edit the `metro.config.js` file and add the following line:

```diff
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
+  resolver: {
+    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'] //add here
+  },
};
```

If your project is not written in TypeScript, you can omit the `ts` and `tsx` extensions.

## Available Helpers

### required

### email / emailRequired

### password / passwordRequired

### match

```jsx
<React.Fragment>
  <Field
    name="password"
    label="Password"
    component={FormField}
    {...forms.passwordRequired}
  />
  <Field
    name="password_confirm"
    label="Password confirm"
    component={FormField}
    validate={forms.match.validate({
      field: "password",
      message: "Passwords do not match",
    })}
  />
</React.Fragment>
```

### cpf / cpfRequired

### phone / phoneRequired

### cep / cepRequired

### currency / currencyRequired

### integer / integerRequired

### pastOrCurrentYear / pastOrCurrentYearRequired

### cardNumber / cardNumberRequired

### cardExpiry / cardExpiryRequired

### cardCode / cardCodeRequired

### sqlDate / sqlDateRequired

### birthdate / birthdateRequired

### length / lengthRequired

```jsx
<React.Fragment>
  <Field
    name="name"
    label="Name"
    component={FormField}
    {...forms.lengthRequired({
      min: 5, // the default is 0
      max: 100, // the default is 255
    })}
  />
</React.Fragment>
```

### bankAgency / bankAgencyRequired

### bankAccount / bankAccountRequired

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
