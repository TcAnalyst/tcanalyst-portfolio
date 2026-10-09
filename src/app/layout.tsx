import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tochukwu ilechukwu | DeFi Data Analyst & Researcher",
  description:
    "Defi Data Analyst and Researcher specializing in on-chain analytics, SQL, Dune dashboards, DeFi, RWAs, protocol research, and blockchain data insights.",
  openGraph: {
    title: "Tochukwu ilechukwu | DeFi Data Analyst & Researcher",
    description:
      "Defi Data Analyst and Researcher specializing in on-chain analytics, SQL, Dune dashboards, DeFi, RWAs, protocol research, and blockchain data insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}