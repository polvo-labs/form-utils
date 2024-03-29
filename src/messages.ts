export const messages = {
  required: "Campo obrigatório",
  email: "E-mail inválido",
  password: "Senha precisa conter pelo menos 6 caracteres",
  match: "Campos não batem",
  cpf: "CPF inválido",
  phone: "Telefone inválido",
  cep: "CEP inválido",
  integer: "Número inteiro inválido",
  pastOrCurrentYear: "Este campo não aceita anos do futuro",
  birthYear: "Ano de nascimento inválido",
  sqlDate: "Data inválida",
  birthdate: "Data inválida",
  length: {
    min: ({ min }: { min: number }) =>
      `Campo deve ter no mínimo ${min} caracteres`,
    max: ({ max }: { max: number }) =>
      `Campo deve ter no máximo ${max} caracteres`,
  },
  bankAgency: "Agência inválida",
  bankAccount: "Número da conta inválido",
};
