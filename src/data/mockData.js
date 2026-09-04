import cat1 from '../assets/Catgory 1.png';
import cat2 from '../assets/Catgory 2.png';
import cat3 from '../assets/Catgory 3.png';
import cat4 from '../assets/Catgory 4.png';
import cat5 from '../assets/Catgory 5.png';
import cat6 from '../assets/Catgory 6.png';
import cat7 from '../assets/Catgory 7.png';
import cat8 from '../assets/Catgory 8.png';
import cat9 from '../assets/Catgory 9.png';
import cat10 from '../assets/Catgory 10.png';

export const equipmentData = [
  {
    id: "beds-1",
    name: "Hospital Beds & Fowler Beds",
    category: "HOSPITAL BEDS",
    description: "Comprehensive range of hospital cots including manual, motorized, ICU, and semi-fowler options for patient comfort.",
    image: cat1,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "Hospital Beds",
      "Semi Fowler Beds",
      "Fowler Beds",
      "Motorized Hospital Beds",
      "Manual / Electric Hospital Beds",
      "Commode Hospital Beds",
      "Imported Semi-Fowler / Fowler Cots",
      "ICU / Advanced Hospital Beds",
      "Hospital Bed Backrest & Railing Options"
    ]
  },
  {
    id: "mattress-1",
    name: "Mattresses & Bed Accessories",
    category: "ACCESSORIES",
    description: "Specialized mattresses and bed accessories designed to prevent bedsores and improve overall patient comfort.",
    image: cat2,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: false,
    features: [
      "Hospital Bed Mattresses",
      "Semi Fowler Bed Mattresses",
      "Fowler Bed Mattresses",
      "Anti-Decubitus Mattress",
      "Tubler Air Mattress",
      "Bedside Armrest",
      "Metal Backrest / Backsupport",
      "Overbed Table"
    ]
  },
  {
    id: "wheelchairs-1",
    name: "Wheelchairs",
    category: "WHEELCHAIRS",
    description: "A wide variety of wheelchairs designed for comfort, transit, and specific patient mobility needs.",
    image: cat3,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "Standard Wheelchairs",
      "Removable Footrest / Flip-Up Armrest Wheelchairs",
      "Transit Wheelchairs",
      "Aluminium Wheelchairs",
      "Electric / Reclining Wheelchairs",
      "Commode Wheelchairs"
    ]
  },
  {
    id: "mobility-1",
    name: "Walkers, Crutches & Mobility Support",
    category: "MOBILITY",
    description: "Essential mobility support equipment for rehabilitation, everyday assistance, and patient independence.",
    image: cat4,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: false,
    features: [
      "Elbow Crutches",
      "Walkers",
      "Pediatric Walkers",
      "Ancillary Crutches",
      "Stair Walkers"
    ]
  },
  {
    id: "commode-1",
    name: "Commode & Toilet Care",
    category: "TOILET CARE",
    description: "Practical and hygienic toilet care solutions tailored for patient comfort and accessibility.",
    image: cat5,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "Commode Wheelchairs",
      "Commode Chairs",
      "Aluminium Commode Chairs",
      "Shower Cum Commode Chairs",
      "Imported Commode Chairs"
    ]
  },
  {
    id: "resp-1",
    name: "Respiratory & Oxygen Equipment",
    category: "RESPIRATORY",
    description: "Reliable respiratory support systems and oxygen equipment for critical care and home use.",
    image: cat6,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "BiPAP Machines",
      "Oxygen Concentrators",
      "Nebulizers",
      "Suction Machines"
    ]
  },
  {
    id: "monitoring-1",
    name: "Monitoring & Infusion Equipment",
    category: "MONITORING",
    description: "High-precision patient monitoring and infusion equipment for clinical care.",
    image: cat7,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "Multipara Monitor",
      "Infusion Pump"
    ]
  },
  {
    id: "stretchers-1",
    name: "Stretchers & Patient Transfer",
    category: "STRETCHERS",
    description: "Safe and efficient patient transfer solutions for healthcare facilities.",
    image: cat8,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: true,
    features: [
      "Two-Fold Stretcher",
      "Spine Stretcher",
      "1-Patient Shifter"
    ]
  },
  {
    id: "furniture-1",
    name: "Patient Furniture & Accessories",
    category: "FURNITURE",
    description: "Durable and practical furniture designed for patient comfort and accessibility.",
    image: cat9,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: false,
    features: [
      "Examination Table",
      "Food Table for Wheelchair",
      "Food Table Top",
      "Overbed Table",
      "Wheel / Clamp Accessories"
    ]
  },
  {
    id: "other-1",
    name: "Other Patient-Care Products",
    category: "OTHER",
    description: "Additional essential patient-care products for daily support and orthopaedic needs.",
    image: cat10,
    availability: "Available",
    purchaseAvailable: true,
    rentalAvailable: false,
    features: [
      "Pull-Up Support Product",
      "Rubber / Sheet Products",
      "Orthopaedic Metal Backrest"
    ]
  }
];

export const rentalEquipmentData = [
  {
    id: "rent-1",
    name: "Surgical Equipment Suite",
    category: "Surgical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    description: "Complete surgical equipment available on flexible rental terms."
  },
  {
    id: "rent-2",
    name: "Patient Monitor System",
    category: "Monitoring",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop",
    description: "High-precision patient monitoring systems for healthcare facilities."
  },
  {
    id: "rent-3",
    name: "Advanced Ventilator Unit",
    category: "Respiratory",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=2000&auto=format&fit=crop",
    description: "Reliable ventilator units for critical care support."
  }
];

export const faqData = [
  {
    question: "What medical equipment do you provide?",
    answer: "We provide a wide range of premium medical equipment including hospital cots, wheelchairs, oxygen cylinders, and specialized surgical equipment for hospitals, clinics, nursing homes, and individuals."
  },
  {
    question: "Do you provide surgical equipment on rental?",
    answer: "Yes, our surgical equipment rental service provides a practical option for organizations and professionals looking for equipment based on specific requirements."
  },
  {
    question: "How can I check equipment availability?",
    answer: "You can check availability by browsing our equipment section or contacting our team directly via WhatsApp or by requesting a quote online."
  },
  {
    question: "Can I request a specific equipment?",
    answer: "Absolutely. Tell us what you need and our team will help you explore the available options or source the specific equipment you require."
  },
  {
    question: "Do you provide delivery and installation?",
    answer: "Yes! We provide home delivery, same-day delivery, and emergency delivery. We charge transportation fees according to the distance. Furthermore, we don't just deliver—our team will install the product and show you a live demo."
  },
  {
    question: "Is ID proof required for rentals?",
    answer: "Yes, a valid ID proof is required for all our rental services."
  },
  {
    question: "Is a prescription required for any equipment?",
    answer: "No, we don't require a prescription, but a doctor's consultation is highly preferable before using specialized medical equipment."
  },
  {
    question: "How do I request a quotation?",
    answer: "Simply click the 'Request a Quote' button available throughout the website, fill in your details and requirements, and our team will get back to you promptly."
  }
];

export const contactInfo = {
  person: "Ajay kumar.V",
  phone: "+91 93630 90305",
  whatsapp: "+91 93630 90305",
  email: "ajaykumar.weeee@gmail.com",
  address: "Moondrumavadi, Madurai, Tamil Nadu 625007",
  serviceAreas: "All over Tamilnadu",
  workingHours: "24/7",
  instagram: "https://www.instagram.com/virutcham_elite?igsi=eG44NGVyOHcwZnQ0"
};
