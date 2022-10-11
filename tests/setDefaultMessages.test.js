import { setDefaultMessages, validators } from "../src";

test("set the default validation messages", () => {
  setDefaultMessages({
    required: "Informe um campo",
    email: "Informe um e-mail válido",
    cep: "Informe um cep real",
  });

  expect(validators.required("")).toBe("Informe um campo");
  expect(validators.email("invalid_email")).toBe(
    "Informe um e-mail válido"
  );
  expect(validators.cep("xxx")).toBe("Informe um cep real");
});
