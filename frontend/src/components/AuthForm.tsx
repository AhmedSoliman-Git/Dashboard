import { useActionData, useSearchParams, Form, Link } from "react-router";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signup";
  const data = useActionData(); // used to get the data from the nearest form ..

  return (
    <>
      <div className="flex">
        <div className={classes.sideDiv}>
          <h1 className={classes.dashBoardSide}></h1>
        </div>
        <div>
          <Form  className ={classes.form} method="post">
            <h1 className="text-3xl font-Clash p-2">
              {isLogin ? "Create a new user" : "Log in"}
            </h1>
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err: any) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            {data && <p>{data.message}</p>}

            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
            </p>
            <p>
              <label htmlFor="image">Password</label>
              <input id="password" type="password" name="password" required />
            </p>
            <div className={classes.actions}>
              <Link to={`?mode=${isLogin ? "login" : "signup"}`}>
                {isLogin ? "Login" : "Create new user"}
              </Link>
              <button>Save</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
