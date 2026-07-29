import { submitFeedback } from "./actions";
import SubmitButton from "./submit-button";

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <form
        action={submitFeedback}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg space-y-5"
      >
        <h1 className="text-3xl font-bold text-center">
          Feedback Form
        </h1>

        <div>
          <label className="block font-medium mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Message
          </label>

          <textarea
            name="message"
            rows="5"
            placeholder="Write your feedback..."
            className="w-full border rounded-md p-3"
          />
        </div>

        <SubmitButton />
      </form>
    </main>
  );
}