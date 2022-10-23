export function isEmpty(value: unknown) {
  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}
