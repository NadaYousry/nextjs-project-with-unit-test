import React, { useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {
  const router = useRouter();

  const [required, setRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!e.target.email?.value || !e.target.password?.value) {
        setRequired(true);
      } else {
        let userData = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        router.push("/");
      }
  };
  const onInputChange = (e) => {
    if (e.target.value === "") {
      setRequired(true);
      return required;
    }
  };
  return (
    <div>
        <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login Page"
        ></meta>
      </Head>
      <form
        className={`${styles.loginContainer} container w-50`}
        onSubmit={(e) => handleSubmit(e)}
        id="loginForm"
      >
        <h2 className="mb-5 text-center">Login Form</h2>
        <div className={styles.inputContainer}>
          <input
            placeholder="Email"
            name="email"
            type="text"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          {required && (
            <span className={styles.required} id="errorMessage">All fields required</span>
          )}
          <button type="submit" role="button">
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
