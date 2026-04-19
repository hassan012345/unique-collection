"use client";

import Image from "next/image";

type CartProductProps = {
  id: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({
  id,
  name,
  variant,
  price,
  image,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProductProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-gray-200 min-w-0">
      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* IMAGE */}
        <div className="w-[56px] h-[56px] relative rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col min-w-0 flex-1">
          {/* NAME (TRUNCATED) */}
          <p className="text-[14px] font-medium text-gray-900 truncate">
            {name}
          </p>

          {/* VARIANT */}
          <p className="text-[12px] text-gray-500 mt-0.5">{variant}</p>

          {/* QUANTITY */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => onDecrease(id)}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
            >
              -
            </button>

            <span className="text-[13px] text-gray-800 min-w-[16px] text-center">
              {quantity}
            </span>

            <button
              onClick={() => onIncrease(id)}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end justify-between gap-4 flex-shrink-0 h-full">
        {/* DELETE */}
        <button
          onClick={() => onRemove(id)}
          className="text-gray-500 hover:text-red-500"
        >
          <Image
            src="/Trash.png"
            alt="Remove"
            width={16}
            height={16}
            className="object-contain"
          />
        </button>

        {/* PRICE (NO WRAP) */}
        <p className="text-[14px] font-medium text-gray-700 whitespace-nowrap">
          Rs {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
