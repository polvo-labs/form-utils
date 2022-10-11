import { messages } from "./ messages";

export function setDefaultMessages(config) {
  for (const key of Object.keys(config)) {
    messages[key] = config[key];
  }
}
