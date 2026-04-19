import ProductDetail from "@/components/ProductDetail";
import { WOMEN_PRODUCTS } from "@/config/products";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const product = WOMEN_PRODUCTS.find(
    (p) => p.href === `/women/${params.slug}`
  );

  return {
    title: product ? `${product.name} | Unique Collection` : "Product | Unique Collection",
    description: product?.name || "Premium women's clothing",
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = WOMEN_PRODUCTS.find((p) => p.href === `/women/${params.slug}`);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
            Product Not Found
          </h1>
          <p className="text-neutral-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Enhanced product with additional details for the product page
  const enhancedProduct = {
    ...product,
    rating: 4.5,
    reviews: 95,
    description:
      "Experience elegance and comfort with this exquisite piece from our women's collection. Designed with premium fabrics and expert craftsmanship for the modern woman.",
    details: [
      "Premium quality fabric blend",
      "Expert hand-stitching and tailoring",
      "Embroidered detailing",
      "Perfect fit and comfort",
      "Available in multiple colors and sizes",
      "Easy care and maintenance",
    ],
    colors: [
      { name: "White", code: "#FFFFFF" },
      { name: "Red", code: "#DC143C" },
      { name: "Blue", code: "#4169E1" },
      { name: "Green", code: "#228B22" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      product.image,
      product.image,
      product.image,
      product.image,
    ],
  };

  // Get related products (other products from the same collection)
  const relatedProducts = WOMEN_PRODUCTS.filter(
    (p) => p.id !== product.id
  ).slice(0, 8);

  return (
    <ProductDetail product={enhancedProduct} relatedProducts={relatedProducts} />
  );
}
