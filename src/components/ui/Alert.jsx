export default function Alert({ type, text, colorText }) {
  if (!text)
    return <div className="alert">Si è verificato un errore generico</div>;
  return (
    <div className={`alert alert-${{ type, colorText } || "info"} `}>
      {text}
    </div>
  );
}
