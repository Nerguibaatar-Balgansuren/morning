const Button = ({ text, status, func }) => {
  const styleObj = {
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: status ? "aqua" : "teal",
    border: "1px solid black",
    color: "white",
  };

  return (
    <button style={styleObj} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
