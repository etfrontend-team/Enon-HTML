import type { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

function slugToTitle(pathname: string): string {
  const slug =
    pathname === "/"
      ? "home"
      : pathname.split("/").filter(Boolean).pop() ?? "home";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const title = `MHO | ${slugToTitle(pathname)}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
