import { Form, Formik } from "formik";
import logoExtraBig from "../../assets/images/logos/logo-extra-big.svg";
import MainButton from "../../components/buttons/MainButton";
import InputTextForm from "../../components/inputs/InputTextForm";

import * as Yup from "yup";

export default function Login() {
  const validation = Yup.object().shape({
    email: Yup.string().required("Esse campo é obrigatório"),
    password: Yup.string().required("obrigatorio"),
  });

  return (
    <div className="container-login">
      <div className="left-login">
        <div className="box-login">
          <h1 className="login-headline">
            Faça seu login e cobre quem te deve!
          </h1>

          <Formik
            validationSchema={validation}
            initialValues={{ email: "", password: "" }}
            onSubmit={(ev) => {
              alert("submit");
              debugger;
            }}
          >
            {(props) => (
              <Form>
                <InputTextForm
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  className="main-input"
                />

                <br />
                <InputTextForm
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="main-input"
                />

                <div className="container-button-login">
                  <MainButton
                    className="main-button-1"
                    text="Enviar"
                    type="Submit"
                  />
                </div>

                <label className="label-new-user">
                  Não tem uma conta? <span>Registre-se aqui!</span>
                </label>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="right-login">
        <img src={logoExtraBig} alt="Logo do APP" />
      </div>
    </div>
  );
}
