import Link from 'next/link'
import TopToast from "@/components/TopToast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <TopToast />
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 md:py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Page Not Found</h2>
          <p className="text-neutral-600 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}