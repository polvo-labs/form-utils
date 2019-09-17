export default function memoize (fn) {
  const cache = {}

  return function () {
    const key = JSON.stringify(arguments)

    if (cache[key]){
      return cache[key]
    }

    const val = fn.apply(null, arguments)
    cache[key] = val
    return val
  }
}
