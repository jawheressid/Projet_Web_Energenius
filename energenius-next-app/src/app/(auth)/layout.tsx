import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import "@/styles/login.css";
import "@/styles/register.css";
import "@/styles/init.css";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <SiteHeader minimal />
      {children}
    </>
  );
}
