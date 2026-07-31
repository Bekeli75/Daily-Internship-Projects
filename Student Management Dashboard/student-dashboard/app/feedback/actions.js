"use server";

export async function submitFeedback(formData) {
  const name = formData.get("name");
  const message = formData.get("message");

  if (!name || !message) {
    throw new Error("Please fill in all fields.");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Feedback Received");
  console.log(name);
  console.log(message);
}