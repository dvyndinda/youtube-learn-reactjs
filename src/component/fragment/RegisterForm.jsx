import ButtonElement from "../element/button/ButtonElement";
import FormElement from "../element/input/FormElement";

const RegisterForm = () => {
  return (
    <>
      <form action="">
        <div className="mb-6">
          <FormElement
            label="Full Name"
            name="fullname"
            placeholder="insert your name here"
            type="text"
          ></FormElement>
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
          <FormElement
            label="Confirm Password"
            name="confirm password"
            placeholder="*****"
            type="password"
          ></FormElement>
          <ButtonElement variant="bg-black">Register</ButtonElement>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;