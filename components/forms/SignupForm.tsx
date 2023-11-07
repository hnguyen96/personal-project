"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormInput, SubmitButton } from "./FormElements";
import { useSignUp, isClerkAPIResponseError } from "@clerk/nextjs";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import OAuthSignIn from "../auth/OAuthSignin";

export default function SignUpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  });

  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();
  const onSubmit = async (data: SignUpForm) => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        username: data.username,
      });

      // Send email verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      router.push("/sign-up/verify-email");
      toast.message("Check your email", {
        description: "We sent you a 6-digit verification code.",
      });
    } catch (error) {
      const unknownError = "Something went wrong, please try again.";
      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Signup information */}
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
          <FormInput
            type="input"
            label="User Name"
            errors={errors?.username || null}
            {...field}
          />
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
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <FormInput
            type="input"
            label="Email"
            errors={errors?.email || null}
            {...field}
          />
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
        <SubmitButton
          label="Create account"
          width={200}
        />
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-2 text-line font-normal text-sm">
          OR
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <OAuthSignIn />

      <div className="flex justify-center items-center w-full my-3">
        <span className="cursor-pointer text-line font-normal text-sm text-center w-full">
          <button onClick={() => router.push("/sign-in")}>
            Already a member? Sign In
          </button>
        </span>
      </div>
    </form>
  );
}