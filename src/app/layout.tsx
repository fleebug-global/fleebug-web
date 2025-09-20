import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fleebug",
  description: "Fleebug",
  keywords: [
    "Fleebug",
    "Fleebug Software Solutions",
    "Software Solutions",
    "Software Development",
    "Software Engineering",
    "Software Architecture",
    "Pushkar Kumar Sah",
    "pushkarcdn",
    "Shivam Kumar Thakur",
  ],
  authors: [
    {
      name: "Pushkar Kumar Sah",
      url: "https://linkedin.com/in/pushkarcdn",
    },
    {
      name: "Shivam Kumar Thakur",
      url: "https://linkedin.com/in/dashivam06",
    },
  ],
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-br from-gray-50 to-white`}
      >
        {children}
      </body>
    </html>
  );
}
