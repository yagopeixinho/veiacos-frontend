export default function AlertMessage({ message }) {
  return (
    message && (
      <div>
        <h4 className="error-message">{message}</h4>
      </div>
    )
  );
}
