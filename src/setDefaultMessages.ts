import { messages } from "./messages";

type Key = keyof typeof messages;

export function setDefaultMessages(config: Partial<typeof messages>) {
  for (const key of Object.keys(config)) {
    //@ts-ignore
    messages[key as Key] = config[key as Key];
  }
}
