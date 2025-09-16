import {
  Form,
  useActionData,
  type HTMLFormMethod,
  type ActionFunctionArgs,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router";
import { getToken } from "../utils/hooks";
import classes from "./Form.module.css";

type EventData = {
  title?: string;
  image?: string;
  status?: string;
  stock?: string;
  price?: string;
  totalPrice?: string;
};

const EventForm: React.FC<{
  method: HTMLFormMethod;
  event?: EventData;
  text: string;
}> = (props) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={props.method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err: any) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <h1 className=" text-white text-3xl font-Clash">{props.text}</h1>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={props.event?.title || ""}
        />
      </p>

      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={props.event?.image || ""}
        />
      </p>

      <p>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          required
          defaultValue={props.event?.status || ""}>
          <option value="" disabled>
            -- Select Status --
          </option>
          <option value="Scoping">Scoping</option>
          <option value="Quoting">Quoting</option>
          <option value="Production">Production</option>
        </select>
      </p>

      <p>
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          type="text"
          name="stock"
          defaultValue={props.event?.stock || ""}
          required
        />
      </p>

      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="text"
          name="price"
          defaultValue={props.event?.price || ""}
          required
        />
      </p>

      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export async function action({ request, params }: ActionFunctionArgs) {
  const method = request.method;
  const data = await request.formData();
  const token = getToken();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    status: data.get("status"),
    stock: data.get("stock"),
    price: data.get("price"),
  };
  console.log(eventData);

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "An Error Occured , try to Login" })
    );
  }

  return redirect("/dashboard");
}

export async function eventLoaded({ params, request }: ActionFunctionArgs) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "An Error Occured , try Again" })
    );
  }
  return redirect("/dashboard");
}
