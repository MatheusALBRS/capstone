function FormDisplayField(props) {
  return (
    <tr>
      <td>{props.field}</td>
      <td>{props.value}</td>
    </tr>
  );
}

export default FormDisplayField;
