import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fleebug - Software Development Solutions",
  description:
    "Professional software development company providing custom software solutions, mobile app development, UI/UX design, and innovative products like Scholar school management system.",
  keywords: [
    "Fleebug",
    "Software Development",
    "Custom Software Solutions",
    "Mobile App Development",
    "UI/UX Design",
    "Web Development",
    "School Management System",
    "Scholar",
    "NeoX.js",
    "Backend Framework",
    "Kathmandu Nepal",
    "Software Company",
    "Digital Solutions",
    "Pushkar Kumar Sah",
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
  openGraph: {
    title: "Fleebug - Software Development Solutions",
    description:
      "Professional software development company providing custom software solutions, mobile app development, and innovative products.",
    url: "https://fleebug.com",
    siteName: "Fleebug",
    type: "website",
  },
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
