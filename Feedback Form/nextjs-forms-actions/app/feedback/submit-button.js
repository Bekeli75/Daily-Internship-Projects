"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white rounded-md py-3 hover:bg-gray-800 disabled:bg-gray-400"
    >
      {pending ? "Submitting..." : "Submit Feedback"}
    </button>
  );
}