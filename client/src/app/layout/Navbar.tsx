import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function Navbar({ openForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem header>
          <img src="/assets/logo.png" alt="logo" />
          <span className="ml-2">Reactivities</span>
        </MenuItem>
        <MenuItem name="Activities" />
        <MenuItem>
          <Button
            onClick={() => openForm()}
            positive
            content="Create Activity"
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
