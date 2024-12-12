import { Menu, Container, MenuItem, Button } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function Navbar() {
  const { activityStore } = useStore();

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
            onClick={() => activityStore.openForm()}
            positive
            content="Create Activity"
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
