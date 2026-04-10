"use client";

export default function DeliveryInfo() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Top Section */}
      <div className="border-b">
        <div className="max-w-5xl mx-auto py-6">
          <h2 className="text-2xl font-semibold mb-6">Delivery Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 text-sm">
            {/* Shipping */}
            <div className="md:border-r">
              <div className="flex items-center gap-[8px] font-medium mb-3">
                <TruckIcon />
                <span className="font-normal text-[14px] text-gray-400">Shipping & Delivery</span>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2"><CheckIcon />Free delivery on orders over PKR 5,000</li>
                <li className="flex gap-2"><CheckIcon />Ships in 2-3 business days</li>
                <li className="flex gap-2"><CheckIcon />Estimated: Dec 28 - Jan 2</li>
              </ul>

              <p className="mt-3 text-xs underline cursor-pointer">
                View charges for other cities
              </p>
            </div>

            {/* Returns */}
            <div className="md:border-r px-6">
              <div className="flex items-center gap-2 font-medium mb-3">
                <ShieldIcon />
                <span className="font-normal text-[14px] text-gray-400">Returns & Checkout</span>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2"><CheckIcon />7-day for return or exchange</li>
                <li className="flex gap-2"><CheckIcon />Free returns within Peshawar</li>
              </ul>

              <p className="mt-3 text-xs underline cursor-pointer">
                View return policy
              </p>
            </div>

            {/* Payments */}
            <div className="pl-6">
              <div className="flex items-center gap-2 font-medium mb-3">
                <CardIcon />
                <span className="font-normal text-[14px] text-gray-400">Payments</span>
              </div>

              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-2"><CheckIcon />100% secure payment</li>
                <li className="flex gap-2"><CheckIcon />SSL encrypted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="max-w-5xl mx-auto px-2 py-6">
        <div className="grid grid-cols-2 border-b md:grid-cols-4 gap-6 text-sm text-gray-600">
          <IconBox icon={<BadgeIcon />} label="Quality Guaranteed" />
          <IconBox icon={<BadgeIcon />} label="Authentic 100%" />
          <IconBox icon={<ShieldIcon />} label="Secure Payment" />
          <IconBox icon={<TruckIcon />} label="Fast Shipping" />
        </div>

        {/* Share Section */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm">Share:</span>

          <div className="flex gap-3">
            <CircleIcon><WhatsappIcon /></CircleIcon>
            <CircleIcon><FacebookIcon /></CircleIcon>
            <CircleIcon><MailIcon /></CircleIcon>
            <CircleIcon><CopyIcon /></CircleIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SVG ICONS ---------------- */

const CheckIcon = () => (
  <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
);

const CardIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7" />
    <path d="M8 14l-2 8 6-4 6 4-2-8" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 3.5A10 10 0 006.5 19L4 22l3.1-2.4A10 10 0 1020 3.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 22v-9h3l1-4h-4V7c0-1 .3-2 2-2h2V1h-3c-4 0-5 2-5 5v3H6v4h3v9h4z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <rect x="2" y="2" width="13" height="13" rx="2" />
  </svg>
);

/* ---------------- SMALL COMPONENTS ---------------- */

const IconBox = ({ icon, label }: any) => (
  <div className="flex flex-col gap-2">
    {icon}
    <span>{label}</span>
  </div>
);

const CircleIcon = ({ children }: any) => (
  <div className="w-9 h-9 bg-gray-100 rounded-full border flex items-center justify-center cursor-pointer hover:bg-gray-100">
    {children}
  </div>
);
