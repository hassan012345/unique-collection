/**
 * app/(shop)/order-confirmation/page.tsx
 *
 * Order confirmation / thank-you page.
 *
 * In production, read the order data from:
 *   - URL search params:  ?orderId=PK-3293712901
 *   - Session/cookie set at checkout completion
 *   - A server-side fetch using the orderId
 *
 * The MOCK_ORDER below matches the Figma design exactly.
 * Replace it with a real fetch once your backend is ready.
 */

import OrderConfirmationPage from "@/components/OrderConfirmationPage";
import type { Metadata }     from "next";
import type { OrderConfirmationData } from "@/components/OrderConfirmationPage";

export const metadata: Metadata = {
  title:       "Order Confirmed | Unique Collection",
  description: "Your order has been placed successfully.",
};

// ── Mock — replace with real data ────────────────────────────────
const MOCK_ORDER: OrderConfirmationData = {
  meta: {
    orderNumber: "#PK-3293712901",
    orderDate:   "OCT 24, 2026",
    orderTotal:  "Rs. 18,500",
  },

  items: [
    {
      id:      "item-1",
      name:    "Classic White Shalwar Kameez",
      variant: "Red / S",
      price:   "Rs 4,500.00",
      image:   "https://www.figma.com/api/mcp/asset/a5888eb0-6418-4417-9f90-0e546b8204d6",
    },
    {
      id:      "item-2",
      name:    "Brown Banarsi Saree",
      variant: "Brown / XL",
      price:   "Rs 5,500.00",
      image:   "https://www.figma.com/api/mcp/asset/2486f1fe-4998-4d47-bfa0-eb7aaa3e55e6",
    },
    {
      id:      "item-3",
      name:    "Shalwaar White New",
      variant: "Purple / L",
      price:   "Rs 1,500.00",
      image:   "https://www.figma.com/api/mcp/asset/9822e6c0-7692-4c92-b616-fa693af53e07",
    },
  ],

  shipping: {
    name:    "Ahmad Hassan",
    address: "124-B , Model Town Extension, Lahore, Punjab",
    phone:   "+92-31789201020",
  },

  payment: {
    cardLabel:     "Visa ending in 2452",
    billedTo:      "Billed to : Ahmad Hassan",
    transactionId: "TXN_2391023",
  },
};

export default function Page() {
  return <OrderConfirmationPage {...MOCK_ORDER} />;
}
