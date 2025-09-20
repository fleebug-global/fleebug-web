import Navbar from "@/components/visitors/Navbar";
import Footer from "@/components/visitors/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
}
