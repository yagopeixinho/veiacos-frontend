export default function MainButton({ className, text, type }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
