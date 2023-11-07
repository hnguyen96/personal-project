import SignInForm from "@/components/forms/SigninForm";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center flex-col justify-center">
      <div className="w-[500px] my-10">
        <h2 className="text-2xl font-bold mb-5">Signin</h2>
        <SignInForm />
      </div>
    </div>
  );
}