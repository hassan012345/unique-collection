function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-5 text-center">
      <div className="w-16 h-16 rounded-full bg-[#E8ECEB] flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 6h2.5L10 21h12l2.5-10H8" stroke="#184335" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11.5" cy="24.5" r="1.5" fill="#184335" />
          <circle cx="20.5" cy="24.5" r="1.5" fill="#184335" />
        </svg>
      </div>
      <div>
        <p className="text-base font-semibold text-[#171717]"
          style={{ fontFamily: "var(--font-neue-montreal)" }}>
          No products found
        </p>
        <p className="text-sm text-[#737373] mt-1"
          style={{ fontFamily: "var(--font-neue-montreal)" }}>
          Try adjusting your filters to see more results.
        </p>
      </div>
      <button onClick={onClear}
        className="px-5 py-2.5 bg-[#184335] text-white text-sm rounded-lg hover:bg-[#0A1C16] transition-colors"
        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}>
        Clear Filters
      </button>
    </div>
  );
}

export default EmptyState;