import type { Metadata } from "next";
import "./globals.css";
import HtmlLang from "@/components/HtmlLang";

export const metadata: Metadata = {
  title: {
    default: "DataOfis Partners — Executive Data & AI Leadership",
    template: "%s | DataOfis Partners",
  },
  description:
    "DataOfis Partners provides senior-level, independent data and AI leadership — strategy, architecture, governance, and execution managed as one system.",
  metadataBase: new URL("https://partners.dataofis.az"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://partners.dataofis.az",
    siteName: "DataOfis Partners",
    title: "DataOfis Partners — Executive Data & AI Leadership",
    description:
      "DataOfis Partners provides senior-level, independent data and AI leadership — strategy, architecture, governance, and execution managed as one system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataOfis Partners — Executive Data & AI Leadership",
    description:
      "DataOfis Partners provides senior-level, independent data and AI leadership — strategy, architecture, governance, and execution managed as one system.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <HtmlLang />
        {children}
      </body>
    </html>
  );
}
