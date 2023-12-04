import VerifyEmailForm from "@/components/forms/VerifyEmailForm";
import Image from "next/image";

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center font-serif flex-col justify-center bg-home bg-cover">
        <VerifyEmailForm />
    </div>
  );
}