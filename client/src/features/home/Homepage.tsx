import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Homepage() {
  return (
    <Container className="mt-16">
      <h1>Home page</h1>
      <h3>
        Go to <Link to="/activities">Activities</Link>
      </h3>
    </Container>
  );
}
