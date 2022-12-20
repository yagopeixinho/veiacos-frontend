export default function ConfirmationDialog({ visible }) {
  return (
    <div hidden={!visible} className="confirmationDialogModal">
      <div className="confirmationDialogContent">
        <h1>Cuidado! Você está deletando um veiaco</h1>

        <div>
          <button>Confirmar</button>
          <button>Deletar</button>
        </div>
      </div>
    </div>
  );
}
