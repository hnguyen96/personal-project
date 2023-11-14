"use client"

import { useForm, Controller } from "react-hook-form";
import { FormInput, SubmitButton } from "./FormElements";
import { useRouter } from "next/navigation";
import { useSignUp, isClerkAPIResponseError } from "@clerk/nextjs";
import { Toaster, toast } from "sonner";

export default function VerifyEmailForm() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp(); 
  const { control, handleSubmit, formState: { errors } } = useForm<VerifyEmailForm>({
    defaultValues: {
      code: ""
    },
  });
  const onSubmit = async (data: VerifyEmailForm) => {
    if (!isLoaded) return;
    try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: data.code,
        })
        if (completeSignUp.status !== "complete") {
          /*  investigate the response, to see if there was an error
             or if the user needs to complete more steps.*/
          console.log(JSON.stringify(completeSignUp, null, 2))
        }
        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId })

          router.push(`${window.location.origin}/`)
        }
      } catch (error) {
        const unknownError = "Something went wrong, please try again."

        isClerkAPIResponseError(error)
          ? toast.error(error.errors[0]?.longMessage ?? unknownError)
          : toast.error(unknownError)
      }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Controller
          name="code"
          control={control}
          rules={
            {
              required: {
                value: true,
                message: "Verification code is required",
              }
            }
          }
          render={({ field }) => <FormInput type="text" label="Verification code" errors={errors?.code || null} {...field} />}
        />
      </div>
      <div className="mt-4 mb-6 flex justify-center">
        <SubmitButton label="Submit" width={200} />
      </div>
      <Toaster richColors />
    </form>
  );
}