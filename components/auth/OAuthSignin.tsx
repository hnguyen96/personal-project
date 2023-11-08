"use client";

import * as React from "react";
import Image from "next/image";
import { useSignIn, isClerkAPIResponseError } from "@clerk/nextjs";
import { type OAuthStrategy } from "@clerk/types";
import { Toaster, toast } from "sonner";
import Loading from "../Loading";

export default function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  async function oauthSignIn(provider: OAuthStrategy) {
    if (!signInLoaded) return null;
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        // middleware after login susscesfully
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (error) {
      setIsLoading(null);

      const unknownError = "Something went wrong, please try again.";

      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError);
    }
  }
  return (
    <div className="flex gap-2">
      <div
        className="flex items-center rounded-lg border border-line cursor-pointer p-2"
        onClick={() => oauthSignIn("oauth_google")}
      >
        {isLoading === "oauth_google" ? (
          <div className="flex-1">
            <Loading />
          </div>
        ) : (
          <>
            <Image
              src="/icons/google.svg"
              width={25}
              height={25}
              alt="Google logo"
            />
          </>
        )}
      </div>
      <div
        className="flex items-center rounded-lg border border-line cursor-pointer p-2"
        onClick={() => oauthSignIn("oauth_facebook")}
      >
        {isLoading === "oauth_facebook" ? (
          <div className="flex-1">
            <Loading />
          </div>
        ) : (
          <Image
            src="/icons/facebook.svg"
            width={25}
            height={25}
            alt="Facebook logo"
          />
        )}
      </div>

      <div
        className="flex items-center rounded-lg border border-line cursor-pointer p-2"
        onClick={() => oauthSignIn("oauth_github")}
      >
        {isLoading === "oauth_github" ? (
          <div className="flex-1">
            <Loading />
          </div>
        ) : (
          <Image
            src="/icons/github.svg"
            width={25}
            height={25}
            alt="Github logo"
          />
        )}
      </div>

      <Toaster richColors />
    </div>
  );
}