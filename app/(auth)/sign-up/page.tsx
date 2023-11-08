"use client"

import SignUpForm from "@/components/forms/SignupForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center font-serif flex-col justify-center bg-[#1a1a1a]">
      <div className="w-[500px] p-10 bg-secondary rounded-lg">
        <div className="text-2xl mx-auto breadcrumbs font-extrabold fon mb-5 flex justify-center">
          <ul className="text-[#ce9c4b]">
            <li><a onClick={() => router.push("/")}>Home</a></li>
            <li><a onClick={() => router.push("/sign-up")}>Signup</a></li>
          </ul>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}