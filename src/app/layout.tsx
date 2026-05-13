import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DMS Systems | IT Infrastructure and Cybersecurity",
  description:
    "Integrated IT infrastructure, cybersecurity, and managed services for growth-focused organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${chakraPetch.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
        <FloatingWhatsApp
          whatsappNumber="+91-99990-35340"
          callNumber="+91-11-26691429"
          email="channels@dmsystems.in"
          address={"E-2/7 & 8, 2nd. Floor, Malviya Nagar, New Delhi – 110017"}
          companyName="DMS Systems"
        />
      </body>
    </html>
  );
}
