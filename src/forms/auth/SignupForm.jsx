import HFTextField from "@/hf-controlled/HFTextField";
import Container from "./Container";
import { useForm } from "react-hook-form";
import HFPasswordField from "@/hf-controlled/HFPasswordField";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";
import LoadingButton from "@/enhanced/LoadingButton";
import { Link, useNavigate } from "@tanstack/react-router";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import validators from "@/rules/validators";
import HFSelect from "@/hf-controlled/HFSelect";

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
      role: "admin",
    },
    resolver: joiResolver(
      Joi.object({
        firstName: validators.firstName(),
        lastName: validators.lastName(),
        email: validators.email(),
        username: validators.username(),
        password: validators.password(),
        confirmPassword: validators.confirmPassword("password"),
        role: validators.role("admin", "user"),
      })
    ),
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
      <HFSelect
        label="Role"
        name="role"
        control={control}
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
      />
      <>
        <LoadingButton
          type="submit"
          isLoading={isPending}
          className="mt-3 mb-1"
        >
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
