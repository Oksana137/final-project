import { authorize } from "../units/network";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
  return (
    <AuthForm
      buttonText="Sign In"
      redirectPath="/orders"
      apiCall={authorize}
      regLink={true}
    />
  );
};

export default SignIn;
