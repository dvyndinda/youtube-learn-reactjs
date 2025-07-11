import ButtonElement from "../element/button/ButtonElement";
import FormElement from "../element/input/FormElement";

const LoginForm = () => {
  return (
    <>
      <form action="">
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
          <ButtonElement variant="bg-black">Login</ButtonElement>
        </div>
      </form>
    </>
  );
};

export default LoginForm;