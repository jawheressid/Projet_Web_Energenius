import type { ReactNode } from "react";
import "@/styles/dashboard.css";
import "@/styles/chatbot.css";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <>{children}</>;
}
