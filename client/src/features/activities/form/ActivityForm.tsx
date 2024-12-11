import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEditActivity: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEditActivity,
}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEditActivity(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({
      ...activity,
      [name]: value,
    });
    console.log(name, value);
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <FormTextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <FormInput
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <FormInput
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <FormInput
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <FormInput
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
