export default function Alert({ type, children }) {
  // if (!text)
  //   return <div className="alert">Si è verificato un errore generico</div>;
  //   if (!textColor || !bgColor)
  //     return (
  //       <div class={textColor} class={bgColor}>
  //         Si è verificato un errore generico
  //       </div>
  // );

  const content = children ? children : "Si è verificato un errore";

  return <div className={`alert alert-${type || "danger"} `}>{content}</div>;
}
