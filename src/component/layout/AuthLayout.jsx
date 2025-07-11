import LoginForm from "../fragment/LoginForm";

const AuthLayout = ({ children, head }) => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{head}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please Enter Your Details
          </p>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
