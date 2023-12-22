import SignUpContinue from "@/components/forms/SignupContinueForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up continue",
  description: "Sign up continue from OAuth",
};

export default function SignUpContinuePage() {
  return (
    <div className="font-serif flex flex-col min-h-screen items-center justify-center bg-home bg-cover">
      <div className="w-full md:w-[500px] p-6 md:p-10 bg-secondary md:rounded-lg">
        <div className="flex justify-center text-lg mx-auto breadcrumbs font-extrabold mb-5">
          <div className="text-[#ce9c4b]">
            <p>Continue with signup</p>
          </div>
        </div>
        <SignUpContinue />
      </div>
    </div>
  );
}