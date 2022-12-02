export default function MainButton({ className, text, type, loading }) {
  return (
    <button type={type} className={className}>
      {loading ? (
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_qjosmr4w.json"
          background="transparent"
          speed="1"
          style={{ width: "50px", height: "50px", margin: "0 auto" }}
          loop
          autoplay
        />
      ) : (
        text
      )}
    </button>
  );
}
