import * as yup from "yup";

const passwordRules = yup
  .string()
  .required("Senha é obrigatória")
  .min(8, "A senha deve conter no mínimo 8 caracteres")
  .test(
    "has-uppercase",
    "Deve conter pelo menos uma letra maiúscula",
    (value) => /[A-Z]/.test(value || "")
  )
  .test(
    "has-lowercase",
    "Deve conter pelo menos uma letra minúscula",
    (value) => /[a-z]/.test(value || "")
  )
  .test("has-number", "Deve conter pelo menos um número", (value) =>
    /[0-9]/.test(value || "")
  );

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: passwordRules,
  comfirmPassword: yup
    .string()
    .required("Confirmação ded senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
