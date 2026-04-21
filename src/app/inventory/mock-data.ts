export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  color: string;
  serialNumber: number;
  purchasedFrom: string;
  lastUpdated: string;
  locations: string[];
  labels: string[];
  quantity: number;
  warranty: string;
  purchaseDate: string;
  purchasePrice: number;
  notes: string;
}


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    brand: 'Dell',
    model: 'XPS 13',
    color: 'Silver',
    serialNumber: 100001,
    purchasedFrom: 'Tech Store',
    lastUpdated: '2026-01-10',
    locations: ['Mirpur', 'Dhanmondi'],
    labels: [ 'Electronics', 'Power Tools'],
    quantity: 5,
    warranty: '2 years',
    purchaseDate: '2025-01-10',
    purchasePrice: 1200,
    notes: 'High performance ultrabook'
  },
  {
    id: 2,
    name: 'Monitor',
    brand: 'Samsung',
    model: 'Odyssey G5',
    color: 'Black',
    serialNumber: 100002,
    purchasedFrom: 'Star Tech',
    lastUpdated: '2026-02-15',
    locations: ['Farmgate'],
    labels: ['Power Tools'],
    quantity: 10,
    warranty: '1 year',
    purchaseDate: '2025-02-01',
    purchasePrice: 300,
    notes: 'Curved gaming monitor'
  },
  {
    id: 3,
    name: 'Keyboard',
    brand: 'Logitech',
    model: 'K380',
    color: 'Blue',
    serialNumber: 100003,
    purchasedFrom: 'Daraz',
    lastUpdated: '2026-03-01',
    locations: ['Mirpur'],
    labels: ['Electronics'],
    quantity: 15,
    warranty: '6 months',
    purchaseDate: '2025-03-01',
    purchasePrice: 40,
    notes: 'Compact wireless keyboard'
  },
  {
    id: 4,
    name: 'Mouse',
    brand: 'HP',
    model: 'M100',
    color: 'Black',
    serialNumber: 100004,
    purchasedFrom: 'Local Shop',
    lastUpdated: '2026-01-20',
    locations: ['Dhanmondi'],
    labels: ['Electronics'],
    quantity: 20,
    warranty: '6 months',
    purchaseDate: '2025-01-20',
    purchasePrice: 15,
    notes: 'Basic wired mouse'
  },
  {
    id: 5,
    name: 'Printer',
    brand: 'Canon',
    model: 'PIXMA G3010',
    color: 'Black',
    serialNumber: 100005,
    purchasedFrom: 'Ryans',
    lastUpdated: '2026-02-28',
    locations: ['Dhanmondi'],
    labels: [ 'Power Tools', 'Electronics' ],
    quantity: 2,
    warranty: '1 year',
    purchaseDate: '2025-02-28',
    purchasePrice: 250,
    notes: 'All-in-one printer'
  },
  {
    id: 6,
    name: 'Router',
    brand: 'TP-Link',
    model: 'Archer C6',
    color: 'Black',
    serialNumber: 100006,
    purchasedFrom: 'Tech Land',
    lastUpdated: '2026-03-10',
    locations: ['Farmgate'],
    labels: ['Electronics'],
    quantity: 4,
    warranty: '1 year',
    purchaseDate: '2025-03-10',
    purchasePrice: 60,
    notes: 'Dual band router'
  },
  {
    id: 7,
    name: 'External HDD',
    brand: 'Seagate',
    model: 'Backup Plus 1TB',
    color: 'Gray',
    serialNumber: 100007,
    purchasedFrom: 'Star Tech',
    lastUpdated: '2026-01-05',
    locations: ['Mirpur'],
    labels: ['Power Tools'],
    quantity: 8,
    warranty: '2 years',
    purchaseDate: '2025-01-05',
    purchasePrice: 80,
    notes: 'Portable storage device'
  },
  {
    id: 8,
    name: 'Projector',
    brand: 'Epson',
    model: 'EB-X41',
    color: 'White',
    serialNumber: 100008,
    purchasedFrom: 'Tech Store',
    lastUpdated: '2026-02-12',
    locations: ['Farmgate'],
    labels: ['Applications'],
    quantity: 1,
    warranty: '1 year',
    purchaseDate: '2025-02-12',
    purchasePrice: 500,
    notes: 'Office presentation projector'
  },
  {
    id: 9,
    name: 'Tablet',
    brand: 'Apple',
    model: 'iPad 10th Gen',
    color: 'Silver',
    serialNumber: 100009,
    purchasedFrom: 'Apple Store',
    lastUpdated: '2026-03-18',
    locations: ['Dhanmondi'],
    labels: ['Electronics'],
    quantity: 3,
    warranty: '1 year',
    purchaseDate: '2025-03-18',
    purchasePrice: 600,
    notes: 'For executive use'
  },
  {
    id: 10,
    name: 'Scanner',
    brand: 'Brother',
    model: 'ADS-2200',
    color: 'White',
    serialNumber: 100010,
    purchasedFrom: 'Ryans',
    lastUpdated: '2026-01-30',
    locations: ['Dhanmondi'],
    labels: ['Electronics'],
    quantity: 2,
    warranty: '1 year',
    purchaseDate: '2025-01-30',
    purchasePrice: 350,
    notes: 'High-speed document scanner'
  },
    {
    id: 11,
    name: 'Smartphone',
    brand: 'Samsung',
    model: 'Galaxy S21',
    color: 'Gray',
    serialNumber: 100011,
    purchasedFrom: 'Samsung Store',
    lastUpdated: '2026-03-25',
    locations: ['Dhanmondi'],
    labels: ['Electronics'],
    quantity: 6,
    warranty: '1 year',
    purchaseDate: '2025-03-25',
    purchasePrice: 800,
    notes: 'Used by field employees'
  },
  {
    id: 12,
    name: 'UPS',
    brand: 'APC',
    model: 'BX1100C',
    color: 'Black',
    serialNumber: 100012,
    purchasedFrom: 'Tech Land',
    lastUpdated: '2026-02-05',
    locations: ['Mirpur'],
    labels: ['Power Tools'],
    quantity: 3,
    warranty: '2 years',
    purchaseDate: '2025-02-05',
    purchasePrice: 150,
    notes: 'Backup power supply'
  }
];