"use client";
import { useEffect } from "react";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { useForm, Controller } from "react-hook-form";
import { FormInput, SubmitButton } from "@/components/forms/FormElements";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignUpContinue() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const { handleSubmit, control, register, setValue } =
    useForm<SignUpContinueForm>({
      defaultValues: {
        username: "",
        email: "",
      },
    });

  useEffect(() => {
    if (signUp?.emailAddress) setValue("email", signUp?.emailAddress);
  }, [signUp, setValue]);

  const onSubmit = async (data: SignUpContinueForm) => {
    if (!isLoaded) return;
    try {
      const updateData: Record<string, string> = {
        username: data.username,
      };

      if (!signUp.emailAddress) {
        updateData["emailAddress"] = data.email;
      }

      const signUpContinue = await signUp.update(updateData);
      if (signUpContinue.unverifiedFields.includes("email_address")) {
        // Send email verification code
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        router.push("/sign-up/verify-email");
        toast.message("Check your email", {
          description: "We sent you a 6-digit verification code.",
        });
        return;
      }
      if (signUpContinue.status !== "complete") {
        /*  investigate the response, to see if there was an error
           or if the user needs to complete more steps.*/
        console.log(JSON.stringify(signUpContinue, null, 2));
      }
      if (signUpContinue.status === "complete") {
        await setActive({ session: signUpContinue.createdSessionId });
        router.push(`${window.location.origin}/`);
      }
    } catch (error) {
      const unknownError = "Something went wrong, please try again.";
      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Controller
          name="username"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Username is required",
            },
          }}
          render={({ field }) => (
            <FormInput type="input" label="User Name" {...field} />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
          render={({ field }) => (
            <FormInput
              type="input"
              label="Email"
              disabled={!!signUp?.emailAddress}
              {...field}
            />
          )}
        />
      </div>
      <div className="pt-4">
        <SubmitButton label="Submit" />
      </div>
      <Toaster richColors />
    </form>
  );
}