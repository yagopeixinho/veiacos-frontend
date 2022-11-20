export default function AlertMessage({ errorMessage }) {
  return (
    errorMessage && (
      <div>
        <h4 className="error-message">{errorMessage}</h4>
      </div>
    )
  );
}
