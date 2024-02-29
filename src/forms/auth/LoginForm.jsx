import HFPasswordField from "@/hf-controlled/HFPasswordField";
import HFTextField from "@/hf-controlled/HFTextField";
import { useForm } from "react-hook-form";
import Container from "./Container";
import LoadingButton from "@/enhanced/LoadingButton";
import { Link } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import { useAuth } from "@/providers/AuthProvider";

function LoginForm() {
  const { loginUser } = useAuth();

  const { isPending, mutate: submitLogin } = useMutation({
    mutationKey: ["submit-login"],
    mutationFn: () => api.post("auth/login"),
    onSuccess: (data) => {
      loginUser(data.data.accessToken);
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Container title="Login page" onSubmit={handleSubmit(submitLogin)}>
      <HFTextField label="Username" name="username" control={control} />
      <HFPasswordField label="Password" name="password" control={control} />
      <>
        <LoadingButton isLoading={isPending} className="mt-3 mb-1">
          Submit
        </LoadingButton>
        <p>
          Don't have an account?{" "}
          <Link className="underline" to="/auth/signup">
            Signup
          </Link>
        </p>
      </>
    </Container>
  );
}

export default LoginForm;
