"use client"

import { useForm, Controller } from "react-hook-form";
import { FormInput, SubmitButton } from "./FormElements";

import { useSignIn, isClerkAPIResponseError } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import OAuthSignIn from "../auth/OAuthSignin";

export default function SignInForm() {

  const { register, handleSubmit, control, formState: { errors }, } = useForm<SignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const onSubmit = async (data: SignInForm) => {
    if (!isLoaded) return;
    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })

        router.push(`${window.location.origin}/`)
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result)
      }
    } catch (error) {
      const unknownError = "Something went wrong, please try again."

      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError)
    }
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <FormInput
                type="email"
                label="Email"
                errors={errors?.email || null}
                {...field} />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={
              {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password needs to have 6+ characters"
                }
              }
            }
            render={({ field }) => (
              <FormInput
                type="password"
                label="Password"
                placeholder="6+ characters"
                errors={errors?.password || null}
                {...field}
              />
            )}
          />

          <div className="mt-5">
            <SubmitButton label="Log in" width={200} />
          </div>
      </form>

      <div className="flex justify-center items-center w-full mt-7">
        <span className="cursor-pointer text-line font-normal text-sm text-center w-full">
          <button onClick={() => router.push("/sign-up")}>
            Not a member? Sign up now
          </button>
        </span>
      </div>

      <div className="relative flex py-5 items-center mt-4">
        <div className="flex-grow border-t border-[#ce9c4b]"></div>
        <span className="flex-shrink mx-2 text-line font-normal text-sm text-[#ce9c4b]">
          OR
        </span>
        <div className="flex-grow border-t border-[#ce9c4b]"></div>
      </div>

      <div className="flex justify-center">
        <OAuthSignIn />
      </div>

      <Toaster richColors />
    </div>
  );
}