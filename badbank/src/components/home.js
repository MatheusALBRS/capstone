import { Container } from "react-bootstrap";
import bankPhoto from "../bank.png";
import { UserContext } from "../index";
import Form from "./form.js";
import Button from "./button";
import "../Styles.css";

function Home() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <>
            {value.isLogedIn ? (
              <Container>
                <Form
                  header="Bad Bank Landing Page"
                  title={`Welcome, ${value.data[0].name}!`}
                  text="You can use this bank"
                  className="header"
                  image={<img alt="" src={bankPhoto} className="img-fluid" />}
                />
              </Container>
            ) : (
              <>
                <Container className="container">
                  <Form
                    header="Bad Bank Landing Page"
                    title={"Welcome to the Bad Bank"}
                    text="Please login to use this feature"
                    className="header"
                    image={<img alt="" src={bankPhoto} className="img-fluid" />}
                  />
                  <Button text="Login" to="/login" />
                </Container>
              </>
            )}
          </>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Home;
