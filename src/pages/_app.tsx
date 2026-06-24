import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import DefaultLayout from "@/layouts/DefaultLayout";
import LenisProvider from "@/providers/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LenisProvider>
      <div className={inter.variable}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </LenisProvider>
  );
}
