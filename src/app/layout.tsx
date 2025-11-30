import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fleebug | Leading Software Development Company",
  description:
    "Fleebug creates scalable software, AI solutions, web scraping solutions, custom web development, and automation that empower businesses to grow and innovate.",
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
    title: "Fleebug | Leading Software Development Company",
    description:
      "Fleebug creates scalable software, AI solutions, web scraping solutions, custom web development, and automation that empower businesses to grow and innovate.",
    url: "https://fleebug.com",
    siteName: "Fleebug",
    type: "website",
    images: [
    {
      url: "https://fleebug.com/logo.png",
      width: 1200,
      height: 630,
      alt: "Fleebug | Leading Software Development Company",
    },
  ],
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
        className={`${poppins.className} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
