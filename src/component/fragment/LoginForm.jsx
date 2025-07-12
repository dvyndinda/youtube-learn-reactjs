import ButtonElement from "../element/button/ButtonElement";
import FormElement from "../element/input/FormElement";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = "/product"
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <FormElement
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            type="text"
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