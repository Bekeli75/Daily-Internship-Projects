import { submitFeedback } from "./actions";
import SubmitButton from "./submit-button";

export default function FeedbackPage() {
  return (
    <section className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-8 text-center text-4xl font-bold text-slate-900">
        Feedback
      </h1>

      <form action={submitFeedback} className="space-y-6">
        <div>
          <label className="mb-2 block font-semibold">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Message
          </label>

          <textarea
            name="message"
            rows="5"
            placeholder="Write your feedback..."
            className="w-full rounded-lg border border-gray-300 p-3"
          ></textarea>
        </div>

        <SubmitButton />
      </form>
    </section>
  );
}