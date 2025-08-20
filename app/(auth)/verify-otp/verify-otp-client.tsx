"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCustomerAuth } from "../../../context/CustomerAuthContext";
import { toast } from "react-toastify";
import { Suspense } from "react";

export default function VerifyOtpClient() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // string | null
  const router = useRouter();

  const { otpVerification } = useCustomerAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const otp = formData.get("otp") as string;

    if (!email) {
      toast.error("Email not found. Please try signing up again.");
      router.push("/signup");
      return;
    }

    try {
      const response = await otpVerification({ email, otp });
      if (response) {
        toast.success("Verification Done.");
        // router.push("/"); // ✅ Next.js redirect
        window.location.replace("/");
      } else {
        console.error("OTP verification failed");
        toast.error("OTP verification failed.");
      }
    } catch (error) {
      console.error("OTP verification error", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Verify your account
            </h1>
            <p className="py-4">
              OTP sent to your mail {email ? `(${email})` : ""}.
            </p>
          </div>
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="number"
                  className="form-input w-full"
                  placeholder="Enter OTP"
                  onWheel={(e) => (e.target as HTMLInputElement).blur()}
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
