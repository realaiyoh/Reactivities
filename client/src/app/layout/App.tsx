import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import Homepage from "../../features/home/Homepage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Homepage />
      ) : (
        <>
          <Navbar />
          <Container className="mt-16">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
