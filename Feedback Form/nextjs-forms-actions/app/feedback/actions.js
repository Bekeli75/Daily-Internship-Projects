"use server";

export async function submitFeedback(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    console.log("Please fill in every field.");
    return;
  }

  // Simulate saving to a database
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Feedback Received");

  console.log({
    name,
    email,
    message,
  });
}