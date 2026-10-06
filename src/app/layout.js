import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/Providers";

export const metadata = {
  title: {
    default: "Sporty | Book Sports Facilities Online",
    template: "%s | Sporty",
  },
  description:
    "Discover football turfs, badminton courts, swimming lanes and tennis courts near you, and book your slot in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
    <Providers>
       <Navbar />
        <main className="flex-1">{children}</main>
       <Footer />
    </Providers>
    </body>
    </html>
  );
}