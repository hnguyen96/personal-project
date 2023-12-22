import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/animations/pageTransition";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col font-serif items-center min-h-screen justify-between bg-home">
      <Header />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </div>
  );
}