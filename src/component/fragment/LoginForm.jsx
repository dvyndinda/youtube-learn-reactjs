import { useEffect, useRef, useState } from "react";
import ButtonElement from "../element/button/ButtonElement";
import FormElement from "../element/input/FormElement";
import { postLogin } from "../../service/auth.service";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem('email', e.target.email.value);
    // localStorage.setItem('password', e.target.password.value);
    // window.location.href = "/product"
    const credential = {
      username: e.target.email.value,
      password: e.target.password.value,
    }
    postLogin(credential, (status, res) => {
      console.log(credential);
      if (status) { 
        localStorage.setItem('token', res);
        window.location.href = "/product"
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      { loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <FormElement
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            type="text"
            ref={emailRef}
          ></FormElement>
          <FormElement
            label="Password"
            name="password"
            placeholder="*****"
            type="password"
          ></FormElement>
          <ButtonElement variant="bg-black w-full" type="submit">Login</ButtonElement>
        </div>
      </form>
    </>
  );
};

export default LoginForm;