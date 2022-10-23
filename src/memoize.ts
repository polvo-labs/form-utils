export default function memoize<T = any>(
  fn: Function
): (args: T) => any {
  const cache: Record<string, any> = {};

  return function () {
    const key = JSON.stringify(arguments);

    if (cache[key]) {
      return cache[key];
    }

    const val = fn.apply(null, arguments);
    cache[key] = val;
    return val;
  };
}
