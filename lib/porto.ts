export type PortfolioItem = {
  id: string;
  name: string;
  type: string;
  category:
    | "commercial"
    | "residential"
    | "hospitality"
    | "religious"
    | "industrial"
    | "mixed";
  location: string;
  area: string;
  stories: string;
  images: string;
};

export const portfolioData: PortfolioItem[] = [
  {
    id: "padel-court-sd-smart-kids",
    name: "Padel Court & SD Smart Kids",
    type: "Sport Centre & School",
    category: "commercial",
    location: "Tangerang & Semarang",
    area: "5.400 m² & 660 m²",
    stories: "4 story building",
    images: "/images/padel_court.png",
  },
  {
    id: "kost-grogol-gas-warehouse",
    name: "Kost Grogol & Gas Warehouse",
    type: "Kost & Warehouse",
    category: "industrial",
    location: "Jakarta & Tangerang",
    area: "447 m² & 150 m²",
    stories: "4 & 2 story building",
    images: "",
  },
  {
    id: "bali-farm-house",
    name: "Bali Farm House",
    type: "Hotel & Restaurant",
    category: "hospitality",
    location: "Bali",
    area: "3.000 m²",
    stories: "2 story building",
    images: "",
  },
  {
    id: "mosque-yogyakarta",
    name: "Mosque Yogyakarta",
    type: "Mosque",
    category: "religious",
    location: "Yogyakarta",
    area: "312 m² & 578 m²",
    stories: "2 story building",
    images: "",
  },
  {
    id: "ruko-kebon-bawang-cilincing",
    name: "Ruko Kebon Bawang & Cilincing",
    type: "Mix Used",
    category: "mixed",
    location: "Jakarta",
    area: "312 m² & 578 m²",
    stories: "2 story building",
    images: "",
  },
  {
    id: "l-house-b-house",
    name: "L-House & B-House",
    type: "House",
    category: "residential",
    location: "Tangerang & Bogor",
    area: "588 m² & 616 m²",
    stories: "3 story building",
    images: "",
  },
  {
    id: "i-house-c-house",
    name: "I-House & C-House",
    type: "House",
    category: "residential",
    location: "Jakarta & Tangerang",
    area: "360 m²",
    stories: "3 story building",
    images: "",
  },
  {
    id: "omah-cabe-sate-tegal",
    name: "Omah Cabe & Sate Tegal",
    type: "Restaurant",
    category: "hospitality",
    location: "Tangerang",
    area: "756 m² & 165 m²",
    stories: "2 story building",
    images: "",
  },
  {
    id: "h-house-angantaka-villa",
    name: "H-House & Angantaka Villa",
    type: "House & Villa",
    category: "residential",
    location: "Tangerang & Bali",
    area: "168 m² & 135 m²",
    stories: "3 story building",
    images: "",
  },
  {
    id: "k-house-kost-handoyo",
    name: "K-House & Kost Handoyo",
    type: "House",
    category: "residential",
    location: "Jakarta & Yogyakarta",
    area: "390 m²",
    stories: "3 & 2 story building",
    images: "",
  },
  {
    id: "kwsg-warehouse-ruko-ciputat",
    name: "KWSG Warehouse & Ruko Ciputat",
    type: "Warehouse",
    category: "industrial",
    location: "Tangerang",
    area: "1.428 m² & 200 m²",
    stories: "1 & 3 story building",
    images: "",
  },
];

export const categoryLabels: Record<PortfolioItem["category"], string> = {
  commercial: "Commercial",
  residential: "Residential",
  hospitality: "Hospitality",
  religious: "Religious",
  industrial: "Industrial",
  mixed: "Mixed Use",
};
