import { Link } from "react-router-dom";
import LoginForm from "../fragment/LoginForm";
import AuthLayout from "../layout/AuthLayout"

const LoginPage = () => {
    return (
        <>
            <AuthLayout head="Login">
                <LoginForm></LoginForm>
                <p className="text-sm mt-2 text-center">
                    Didn't have any account?
                    <Link to="/register" className="ml-2 font-bold text-blue-600">
                        Register
                    </Link>
                </p>
            </AuthLayout>
        </>
    )
}

export default LoginPage;