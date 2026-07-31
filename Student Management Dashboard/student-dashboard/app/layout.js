import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Student Management Dashboard",
  description: "A modern dashboard built with Next.js App Router and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <ThemeProvider>
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}