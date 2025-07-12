import { Link } from "react-router-dom";
import LoginForm from "../fragment/LoginForm";
import AuthLayout from "../layout/AuthLayout"

const LoginPage = () => {
    return (
        <>
            <AuthLayout head="Login" type="login">
                <LoginForm></LoginForm>
            </AuthLayout>
        </>
    )
}

export default LoginPage;