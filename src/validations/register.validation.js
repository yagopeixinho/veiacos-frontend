import * as Yup from "yup";

export const registerValidation = Yup.object().shape({
  email: Yup.string()
    .email("Informe um e-mail válido")
    .required("O e-mail é obrigatório"),
  name: Yup.string().required("O nome é obrigatório"),

  password: Yup.string().required("A senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});
