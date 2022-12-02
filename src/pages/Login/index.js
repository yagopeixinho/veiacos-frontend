import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoExtraBig from "../../assets/images/logos/logo-extra-big.svg";
import AlertMessage from "../../components/AlertMessage";
import MainButton from "../../components/buttons/MainButton";
import InputTextForm from "../../components/inputs/InputTextForm";
import { AppContext } from "../../contexts/store";
import AuthenticationService from "../../service/authentication.service";
import { UserService } from "../../service/user.service";
import { loginValidation } from "../../validations/login.validation";
import { registerValidation } from "../../validations/register.validation";

export default function Login() {
  const { setStore } = useContext(AppContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("login");
  const [loading, setLoading] = useState(false);

  async function loginIn(values) {
    setLoading(true);
    const _authenticationService = new AuthenticationService();

    await _authenticationService
      .authUser(values)
      .then((res) => {
        setStore({ user: res.data.user, isAuthenticated: true });
        navigate("/home");
      })
      .catch((err) => {
        setMessage(err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function registerUser(values) {
    setLoading(true);
    const _userService = new UserService();

    await _userService
      .createUser(values)
      .then(() => {
        setAction("login");
        setMessage("O seu usuário foi criado com sucesso!");
      })
      .catch((err) => {
        setMessage(err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="container-login">
      <div className="left-login">
        {action === "login" ? (
          <div className="box-login">
            <h1 className="login-headline">
              Faça seu login e cobre quem te deve!
            </h1>

            <Formik
              validationSchema={loginValidation}
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                loginIn(values);
              }}
            >
              {(props) => (
                <Form>
                  <InputTextForm
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    classes="main-input"
                  />

                  <br />

                  <InputTextForm
                    type="password"
                    name="password"
                    placeholder="Senha"
                    classes="main-input"
                  />

                  <div className="container-button-login">
                    <MainButton
                      className="main-button-1"
                      text="Acessar"
                      type="Submit"
                      loading={loading}
                    />
                  </div>

                  <AlertMessage message={message} />

                  <label className="label-new-user">
                    Não tem uma conta?{" "}
                    <span
                      onClick={() => {
                        setAction("register");
                      }}
                    >
                      Registre-se aqui!
                    </span>
                  </label>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div className="box-login">
            <h1 className="login-headline">
              Registre-se e cobre quem te deve!
            </h1>

            <Formik
              validationSchema={registerValidation}
              initialValues={{
                email: "",
                name: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                registerUser(values);
              }}
            >
              {() => (
                <Form>
                  <InputTextForm
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="main-input"
                  />

                  <br />

                  <InputTextForm
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className="main-input"
                  />

                  <br />

                  <InputTextForm
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="main-input"
                  />

                  <br />

                  <InputTextForm
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    className="main-input"
                  />

                  <div className="container-button-login">
                    <MainButton
                      className="main-button-1"
                      text="Registrar"
                      type="Submit"
                    />
                  </div>

                  <AlertMessage message={message} />

                  <label className="label-new-user">
                    Já tenho acesso!{" "}
                    <span
                      onClick={() => {
                        setAction("login");
                      }}
                    >
                      Voltar e fazer login
                    </span>
                  </label>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
      <div className="right-login">
        <img src={logoExtraBig} alt="Logo do APP" />
      </div>
    </div>
  );
}
