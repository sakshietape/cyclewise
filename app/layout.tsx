import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyclewise | A calmer guide to PCOS",
  description: "Friendly, evidence-informed PCOS education.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
