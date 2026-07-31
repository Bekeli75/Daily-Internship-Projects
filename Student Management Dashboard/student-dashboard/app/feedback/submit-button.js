"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 py-3 text-white ">
      {pending ? "Submitting..." : "Submit Feedback"}
    </button>
  );
}