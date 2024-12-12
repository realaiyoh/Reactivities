import { useEffect } from "react";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <>
      <Navbar />
      <Container className="mt-[64px]">
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
