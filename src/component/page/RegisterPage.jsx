import { Link } from "react-router-dom";
import RegisterForm from "../fragment/RegisterForm";
import AuthLayout from "../layout/AuthLayout"

const RegisterPage = () => {
    return (
        <>
            <AuthLayout head="Register">
                <RegisterForm></RegisterForm>
                <p className="text-sm mt-2 text-center">
                    Already have account?
                    <Link to="/login" className="ml-2 font-bold text-blue-600">
                        Login
                    </Link>
                </p>
            </AuthLayout>
        </>
    )
}

export default RegisterPage;