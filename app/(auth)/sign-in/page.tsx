"use client"
import SignInForm from "@/components/forms/SigninForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="font-serif md:flex flex-col md:min-h-screen items-center justify-center bg-home bg-cover">
      <div className="w-full md:w-[500px] p-6 bg-secondary md:rounded-lg">
        <div className="flex justify-center text-lg mx-auto breadcrumbs font-extrabold mb-5">
          <ul className="text-[#ce9c4b]">
            <li><a onClick={() => router.push("/")}>Home</a></li>
            <li><a onClick={() => router.push("/sign-in")}>Login</a></li>
          </ul>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}