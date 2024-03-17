import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans w-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
