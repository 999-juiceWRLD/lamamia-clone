import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthenticationProvider from "@/components/AuthProvider/AuthenticationProvider";
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthenticationProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthenticationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
