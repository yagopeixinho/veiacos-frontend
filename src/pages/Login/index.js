import logoExtraBig from "../../assets/images/logos/logo-extra-big.svg";

export default function Login() {
  return (
    <div className="container-login">
      <div className="left-login">
        <div className="box-login">
          <h1 className="login-headline">Faça seu login e cobre quem te deve!</h1>

          <form>
            <input type="text" placeholder="E-mail" className="main-input" />

            <br />
            <input type="password" placeholder="Senha" className="main-input" />

            <div className="container-button-login">
              <button className="main-button-1">Entrar</button>
            </div>

            <label className="label-new-user">
              Não tem uma conta? <span>Registre-se aqui!</span>
            </label>
          </form>
        </div>
      </div>
      <div className="right-login">
        <img src={logoExtraBig} alt="Logo do APP" />
      </div>
    </div>
  );
}
