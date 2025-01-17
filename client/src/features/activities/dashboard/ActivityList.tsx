import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();

  const { activitiesByDate } = activityStore;

  return (
    <>
      {activitiesByDate.map((activity) => (
        <ActivityListItem activity={activity} />
      ))}
    </>
  );
});
