import { forwardRef } from "react";
import InputElement from "./InputElement";
import LabelElement from "./LabelElement";

const FormElement = forwardRef(({ label, name, type, placeholder }, ref) => {
  return (
    <>
      <div className="mb-6">
        <LabelElement htmlFor={name}>{label}</LabelElement>
        <InputElement
          name={name}
          type={type}
          placeholder={placeholder}
          id={name}
          ref={ref}
        ></InputElement>
      </div>
    </>
  );
});

export default FormElement;
