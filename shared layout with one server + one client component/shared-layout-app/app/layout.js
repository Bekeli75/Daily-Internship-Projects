import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Shared Layout App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <ThemeToggle />

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}