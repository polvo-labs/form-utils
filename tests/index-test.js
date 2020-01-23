import expect from 'expect'

import * as utils from 'lib'

describe('required', () => {
  it('should NOT pass validation', () => {
    expect(utils.required.validate('')).toBeTruthy()
    expect(utils.required.validate(null)).toBeTruthy()
    expect(utils.required.validate(undefined)).toBeTruthy()
    expect(utils.required.validate([])).toBeTruthy()
    expect(utils.required.validate({})).toBeTruthy()
  })

  it('should pass validation', () => {
    expect(utils.required.validate('value')).toBeFalsy()
    expect(utils.required.validate(true)).toBeFalsy()
    expect(utils.required.validate(false)).toBeFalsy()
    expect(utils.required.validate({ key: 'value' })).toBeFalsy()
    expect(utils.required.validate(['element'])).toBeFalsy()
  })
})

describe('email', () => {
  it('should NOT pass validation', () => {
    expect(utils.email.validate('test')).toBeTruthy()
  })

  it('should pass validation', () => {
    expect(utils.email.validate('test@example.com')).toBeFalsy()
  })
})