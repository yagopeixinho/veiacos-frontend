import { Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlertMessage from "../../../components/AlertMessage";
import MainButton from "../../../components/buttons/MainButton";
import InputTextForm from "../../../components/inputs/InputTextForm";
import { AppContext } from "../../../contexts/store";
import { VeiacoService } from "../../../service/veiaco.service";
import { veiacosValidation } from "../../../validations/veiacos-validation";

export default function VeiacosForm() {
  const { id } = useParams();
  const { store } = useContext(AppContext);
  const [action, setAction] = useState("");
  const [message, setMessage] = useState("");
  const [veiacosInitialValues, setVeiacosInitialValues] = useState({
    name: "",
    phone: "",
    userId: store.user.id,
  });
  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function getVeiaco(id) {
      const response = await _veiacoService.getVeiaco(id);

      return response;
    }

    async function init() {
      if (id) {
        setAction("edit");

        const veiaco = await getVeiaco(id);
        setVeiacosInitialValues(veiaco);
      } else {
        setAction("create");
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleSubmit(values) {
    if (action === "create") {
      await _veiacoService
        .createVeiaco(values)
        .then((res) => {})
        .catch((err) => {
          setMessage(err?.response?.data?.message);
        });
    } else {
      await _veiacoService
        .updateVeiaco(values, id)
        .then(() => {
          setMessage("Veiaco atualizado com sucesso!");
        })
        .catch((err) => {
          setMessage(err?.response?.data?.message);
        });
    }
  }

  return (
    <div className="container-app">
      <div className="veiacos-form">
        <div className="veiacos-form-left">
          <div className="user-picture" />
        </div>
        <div className="veiacos-form-right">
          <div className="headline-container">
            <h1 className="headline-veiacos-form">
              {action === "create"
                ? `Criando um novo veiaco!`
                : `Editando um veiaco!`}
            </h1>
          </div>

          <Formik
            initialValues={veiacosInitialValues}
            enableReinitialize={true}
            validationSchema={veiacosValidation}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <div className="form-veiaco">
                  <div>
                    <InputTextForm
                      type="text"
                      placeholder="Nome"
                      classes="main-input"
                      name="name"
                    />
                  </div>

                  <div>
                    <InputTextForm
                      type="text"
                      placeholder="Telefone"
                      classes="main-input"
                      name="phone"
                    />
                  </div>

                  <MainButton
                    className="main-button-1"
                    text={action === "create" ? "Criar" : "Salvar"}
                    type="Submit"
                  />
                </div>
              </Form>
            )}
          </Formik>
          <AlertMessage message={message} />
        </div>
      </div>
    </div>
  );
}
