import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoExtraBig from "../../assets/images/logos/logo-extra-big.svg";
import AlertMessage from "../../components/AlertMessage";
import MainButton from "../../components/buttons/MainButton";
import InputTextForm from "../../components/inputs/InputTextForm";
import { AppContext } from "../../contexts/store";
import AuthenticationService from "../../service/authentication.service";
import { loginValidation } from "../../validations/login.validation";

export default function Login() {
  const { setStore } = useContext(AppContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function loginIn(values) {
    const _authenticationService = new AuthenticationService();

    await _authenticationService
      .authUser(values)
      .then((res) => {
        setStore({ user: res.data.user, isAuthenticated: true });
        navigate("/home");
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data?.message);
      });
  }

  return (
    <div className="container-login">
      <div className="left-login">
        <div className="box-login">
          <h1 className="login-headline">
            Faça seu login e cobre quem te deve!
          </h1>

          <Formik
            validationSchema={loginValidation}
            initialValues={{ email: "", password: "" }}
            onSubmit={(ev) => {
              loginIn(ev);
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

                <AlertMessage errorMessage={errorMessage} />

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
