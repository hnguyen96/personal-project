"use client";

import * as React from "react";
import { useClerk } from "@clerk/nextjs";
import Loading from "@/components/Loading";

export default function SSOCallbackPage() {
  const { handleRedirectCallback } = useClerk();
  
  React.useEffect(() => {
    handleRedirectCallback({
      redirectUrl: "/",
      continueSignUpUrl: "/sign-up/continue"
    });
  }, [handleRedirectCallback]);
  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center">
      <Loading />
    </div>
  );
}