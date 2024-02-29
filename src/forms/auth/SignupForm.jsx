import HFTextField from "@/hf-controlled/HFTextField";
import Container from "./Container";
import { useForm } from "react-hook-form";
import HFPasswordField from "@/hf-controlled/HFPasswordField";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import LoadingButton from "@/enhanced/LoadingButton";
import { Link, useNavigate } from "@tanstack/react-router";

function SignupForm() {
  const navigate = useNavigate();

  const { isPending, mutate: submitSignup } = useMutation({
    mutationKey: ["submit-signup"],
    mutationFn: (data) => api.post("auth/signup", data),
    onSuccess: () => {
      navigate({ to: "/auth/login" });
    },
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Container title="Signup page" onSubmit={handleSubmit(submitSignup)}>
      <HFTextField label="First name" name="firstName" control={control} />
      <HFTextField label="Last name" name="lastName" control={control} />
      <HFTextField label="Email" name="email" control={control} />
      <HFTextField label="Username" name="username" control={control} />
      <HFPasswordField label="Password" name="password" control={control} />
      <HFPasswordField
        label="Confirm password"
        name="confirmPassword"
        control={control}
      />
      <>
        <LoadingButton isLoading={isPending} className="mt-3 mb-1">
          Submit
        </LoadingButton>
        <p>
          Already have an account?{" "}
          <Link className="underline" to="/auth/login">
            Login
          </Link>
        </p>
      </>
    </Container>
  );
}

export default SignupForm;
