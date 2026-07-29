import "./globals.css";

export const metadata = {
  title: "Next.js Forms",
  description: "Forms & Server Actions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}