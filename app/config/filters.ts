export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface FilterGroup {
  id:      string;
  label:   string;
  type:    "checkbox" | "color" | "range";
  options?: FilterOption[];
  min?:    number;
  max?:    number;
}

export const MEN_FILTER_GROUPS: FilterGroup[] = [
  {
    id: "category", label: "Category", type: "checkbox",
    options: [
      { label: "New Arrival",    value: "new-arrival",    count: 12 },
      { label: "Sale",           value: "sale",           count: 8  },
      { label: "Shalwaar Kameez",value: "shalwaar-kameez",count: 24 },
      { label: "Kurtas",         value: "kurtas",         count: 18 },
      { label: "Waist Coats",    value: "waist-coats",    count: 9  },
      { label: "3-Piece Suits",  value: "3-piece-suits",  count: 6  },
      { label: "Blazers",        value: "blazers",        count: 5  },
      { label: "Unstitched",     value: "unstitched",     count: 14 },
    ],
  },
  {
    id: "price", label: "Price Range", type: "range",
    min: 0, max: 25000,
  },
  {
    id: "color", label: "Color", type: "color",
    options: [
      { label: "White",  value: "#FFFFFF" },
      { label: "Black",  value: "#000000" },
      { label: "Navy",   value: "#1B2A4A" },
      { label: "Green",  value: "#184335" },
      { label: "Brown",  value: "#6B3E26" },
      { label: "Beige",  value: "#F5F0E8" },
      { label: "Grey",   value: "#9E9E9E" },
      { label: "Red",    value: "#C0392B" },
    ],
  },
];

export const WOMEN_FILTER_GROUPS: FilterGroup[] = [
  {
    id: "category", label: "Category", type: "checkbox",
    options: [
      { label: "New Arrival",    value: "new-arrival",    count: 10 },
      { label: "Sale",           value: "sale",           count: 6  },
      { label: "Shalwaar Kameez",value: "shalwaar-kameez",count: 20 },
      { label: "Kurtas",         value: "kurtas",         count: 15 },
      { label: "Unstitched",     value: "unstitched",     count: 11 },
    ],
  },
  {
    id: "price", label: "Price Range", type: "range",
    min: 0, max: 25000,
  },
  {
    id: "color", label: "Color", type: "color",
    options: [
      { label: "White",  value: "#FFFFFF" },
      { label: "Black",  value: "#000000" },
      { label: "Pink",   value: "#E91E8C" },
      { label: "Red",    value: "#C0392B" },
      { label: "Blue",   value: "#2980B9" },
      { label: "Green",  value: "#184335" },
      { label: "Beige",  value: "#F5F0E8" },
      { label: "Purple", value: "#8E44AD" },
    ],
  },
];

export const SORT_OPTIONS = [
  { label: "Featured",           value: "featured"   },
  { label: "Newest First",       value: "newest"     },
  { label: "Price: Low to High", value: "price-asc"  },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling",       value: "best-selling"},
] as const;

export type SortValue = typeof SORT_OPTIONS[number]["value"];