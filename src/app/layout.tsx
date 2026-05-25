import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iago Creative Space — Make it watchable.",
  description:
    "A creative studio crafting brand films, ads, and documentary work for teams who refuse to be skipped.",
  metadataBase: new URL("https://iago.studio"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
