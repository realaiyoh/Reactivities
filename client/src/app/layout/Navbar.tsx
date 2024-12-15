import { Menu, Container, MenuItem, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem as={NavLink} to="/" header>
          <img src="/assets/logo.png" alt="logo" />
          <span className="ml-2 font-bold">Reactivities</span>
        </MenuItem>
        <MenuItem as={NavLink} to="/activities" name="Activities" />
        <MenuItem>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
