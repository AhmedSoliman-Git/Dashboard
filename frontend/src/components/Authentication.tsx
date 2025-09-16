import AuthForm from "../components/AuthForm";
import { redirect } from "react-router";
import { type ActionFunctionArgs } from "react-router";
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }: ActionFunctionArgs) {
  const urlParams = new URL(request.url).searchParams;
  const mode = urlParams.get("mode") || "login";
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData);

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) return response;

  if (!response.ok)
    return new Response(JSON.stringify({ message: "Bad Response" }), {
      status: 422,
    });

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  return redirect("/dashboard");
}
