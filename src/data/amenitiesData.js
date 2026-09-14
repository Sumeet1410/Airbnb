export const featuredAmenities = [
  { id: "kitchen", label: "Kitchen", icon: "Utensils" },
  { id: "wifi", label: "Wifi", icon: "Wifi" },
  { id: "workspace", label: "Dedicated workspace", icon: "Laptop" },
  { id: "parking", label: "Free parking on premises", icon: "Car" },
  { id: "pool", label: "Pool", icon: "Waves" },
  { id: "hottub", label: "Hot tub", icon: "Bath" },
  { id: "pets", label: "Pets allowed", icon: "PawPrint" },
  { id: "cameras", label: "Exterior security cameras on property", icon: "Camera" },
  { id: "co-alarm", label: "Carbon monoxide alarm", notReported: true, icon: "BellOff" },
  { id: "smoke-alarm", label: "Smoke alarm", notReported: true, icon: "BellOff" }
];

export const allAmenitiesCategories = [
  {
    category: "Bathroom",
    items: [
      { name: "Hot water", available: true },
      { name: "Shampoo", available: true },
      { name: "Body soap", available: true },
      { name: "Cleaning products", available: true },
      { name: "Shower gel", available: true }
    ]
  },
  {
    category: "Bedroom and laundry",
    items: [
      { name: "Washing machine", available: true },
      { name: "Essentials (Towels, bed sheets, soap, toilet paper)", available: true },
      { name: "Hangers", available: true },
      { name: "Bed linen", available: true },
      { name: "Extra pillows and blankets", available: true },
      { name: "Iron", available: true },
      { name: "Clothes drying rack", available: true },
      { name: "Wardrobe / closet", available: true }
    ]
  },
  {
    category: "Entertainment",
    items: [
      { name: "Smart TV with standard cable / streaming", available: true },
      { name: "Sound system", available: true }
    ]
  },
  {
    category: "Family",
    items: [
      { name: "Board games", available: true },
      { name: "Children's books and toys", available: true }
    ]
  },
  {
    category: "Heating and cooling",
    items: [
      { name: "Air conditioning", available: true },
      { name: "Ceiling fan", available: true }
    ]
  },
  {
    category: "Home safety",
    items: [
      { name: "Exterior security cameras on property", available: true },
      { name: "First aid kit", available: true },
      { name: "Fire extinguisher", available: true },
      { name: "Smoke alarm", available: false, subtext: "Not reported by host" },
      { name: "Carbon monoxide alarm", available: false, subtext: "Not reported by host" }
    ]
  },
  {
    category: "Internet and office",
    items: [
      { name: "Fast wifi (150 Mbps)", available: true },
      { name: "Dedicated workspace with desk and chair", available: true }
    ]
  },
  {
    category: "Kitchen and dining",
    items: [
      { name: "Kitchen with refrigerator and microwave", available: true },
      { name: "Cooking basics (Pots, pans, oil, salt, pepper)", available: true },
      { name: "Dishes and silverware", available: true },
      { name: "Induction cooktop", available: true },
      { name: "Electric kettle", available: true },
      { name: "Wine glasses", available: true },
      { name: "Toaster", available: true },
      { name: "Dining table", available: true }
    ]
  },
  {
    category: "Location features",
    items: [
      { name: "Candolim beach access - 5 min walk", available: true },
      { name: "Resort access with shared grounds", available: true }
    ]
  },
  {
    category: "Outdoor",
    items: [
      { name: "Private patio / balcony", available: true },
      { name: "Private outdoor jacuzzi", available: true },
      { name: "Outdoor furniture & dining area", available: true },
      { name: "Sun loungers", available: true }
    ]
  },
  {
    category: "Parking and facilities",
    items: [
      { name: "Free parking on premises", available: true },
      { name: "Shared outdoor swimming pool", available: true },
      { name: "Shared gym on premises", available: true },
      { name: "Elevator in building", available: true }
    ]
  },
  {
    category: "Services",
    items: [
      { name: "Self check-in with building staff", available: true },
      { name: "Pets allowed", available: true },
      { name: "Long-term stays allowed (28+ days)", available: true },
      { name: "Cleaning available during stay", available: true },
      { name: "Luggage drop-off allowed", available: true }
    ]
  }
];
