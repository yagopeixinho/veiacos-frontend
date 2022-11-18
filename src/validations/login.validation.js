import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string().required(
    "O e-mail é obrigatório para acessar a plataforma"
  ),
  password: Yup.string().required("Sem a senha você não vai poder entrar..."),
});
