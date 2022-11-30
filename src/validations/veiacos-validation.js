import * as Yup from "yup";

export const veiacosValidation = Yup.object().shape({
  name: Yup.string()
    .max(30, "Limite de caracteres alcançado")
    .required("O nome é obrigatório"),
});
