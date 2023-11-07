import SignUpForm from "@/components/forms/SignupForm";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center font-serif flex-col justify-center">
      <div className="w-[500px] my-10">
        <h2 className="text-2xl font-bold mb-5">Signup</h2>
        <SignUpForm />
      </div>
    </div>
  );
}