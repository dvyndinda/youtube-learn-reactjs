import { Link } from "react-router-dom";
import RegisterForm from "../fragment/RegisterForm";
import AuthLayout from "../layout/AuthLayout"

const RegisterPage = () => {
    return (
        <>
            <AuthLayout head="Register" type="register">
                <RegisterForm></RegisterForm>               
            </AuthLayout>
        </>
    )
}

export default RegisterPage;