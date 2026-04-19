import TopToast from "@/components/TopToast";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <TopToast />
      <Navbar />
      <div className="w-full border-b border-[#E5E5E5] max-w-[1440px] mx-auto px-5 lg:px-20 py-3">
        <div className="">
          <Breadcrumb />
        </div>
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
