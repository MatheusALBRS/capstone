import { CardComponent } from "./card";
import FormDisplayField from "./displayfield";
import FormInputField from "./inputfield";

function Form(props) {
  const checkDisplayFields = () => {
    if (props.displayField) {
      let displayfields = props.displayField.map((item, i) => {
        return <FormDisplayField key={i} field={item.field} value={item.value} />;
      });
      return displayfields;
    }
    return false;
  };

  const checkInputFields = () => {
    if (props.inputField) {
      let inputFields = props.inputField.map((item, i) => {
        return <FormInputField key={i} field={item.field} value={item.value} min={props.min} callBack={item.callBack} />;
      });
      return inputFields;
    }
    return false;
  };

  return (
    <CardComponent
      header={props.header}
      className={props.className}
      title={props.title}
      text={props.text}
      displayBody={
        props.displayField && (
          <table className="table">
            <tbody>{checkDisplayFields()}</tbody>
          </table>
        )
      }
      image={props.image}
      inputBody={
        props.inputField && (
          <form onSubmit={props.onSubmit}>
            {checkInputFields()}
            <button type="submit" className={props.buttonClass} onClick={props.onClick}>
              {props.button}
            </button>
          </form>
        )
      }
      status={props.status}
    />
  );
}

export default Form;
