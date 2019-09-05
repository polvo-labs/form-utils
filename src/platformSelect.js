export default function platformSelect (select = {}) {
  if (typeof document !== 'undefined') {
    return select.web
  }

  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return select.reactNative
  }

  return select.node
}

