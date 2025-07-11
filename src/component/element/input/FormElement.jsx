import InputElement from "./InputElement";
import LabelElement from "./LabelElement";

const FormElement = ({label, name, type, placeholder}) => {
    return (
        <>
        <div className="mb-6">
            <LabelElement htmlFor={name}>{label}</LabelElement>
            <InputElement name={name} type={type} placeholder={placeholder} id={name}></InputElement>
        </div>
        </>
    )
}

export default FormElement;