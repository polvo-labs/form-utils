export interface PlatformSelectOptions {
  web?: any;
  reactNative?: any;
  node?: any;
}

export function platformSelect(select: PlatformSelectOptions = {}) {
  if (typeof document !== "undefined") {
    return select.web;
  }

  if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    return select.reactNative;
  }

  return select.node;
}
