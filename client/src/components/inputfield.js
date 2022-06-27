function FormInputField(props) {
  const checkField = () => {
    if (props.field === "password") return props.field;
    if (props.field === "name") return "text";
    if (props.field === "email") {
      return "text";
    } else {
      return "number";
    }
  };

  const func = props.callBack;

  const handleChange = (e) => {
    func(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{props.field}</label>
      <input type={checkField()} value={props.value} min={props.min} className="form-control" onChange={handleChange} />
    </div>
  );
}

export default FormInputField;
