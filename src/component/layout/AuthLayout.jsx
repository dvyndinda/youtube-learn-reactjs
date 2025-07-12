import { Link } from "react-router-dom";
import LoginForm from "../fragment/LoginForm";

const AuthLayout = ({ children, head, type }) => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{head}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please Enter Your Details
          </p>
          {children}
           <p className="text-sm mt-2 text-center">
          {type === "login"
            ? "Didn't have any account?"
            : "Already have account?"}
          {type === "login" && (
            <Link to="/register" className="ml-2 font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="ml-2 font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
