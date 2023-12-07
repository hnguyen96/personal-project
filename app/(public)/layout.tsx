import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center font-serif min-h-screen justify-between bg-home">
      <Header />
      {children}
      <Footer />
    </div>
  );
}