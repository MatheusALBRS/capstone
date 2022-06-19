import Card from "react-bootstrap/Card";
import "../Styles.css";

export function CardComponent(props) {
  return (
    <Card className="card">
      <Card.Header className={props.className}>{props.header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        {props.displayBody}
        {props.image}
        {props.inputBody}
      </Card.Body>
      <Card.Text className="status">{props.status}</Card.Text>
    </Card>
  );
}
