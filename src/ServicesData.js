import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { GiFlatTire } from "react-icons/gi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiShieldStarFill } from "react-icons/ri";

const services = [
  {
    id: 1,
    name: "Minimum excess",
    description: "MAD 3,000.00 (approx. $299.52) financial responsibility",
    img: <BsBookmarkStarFill className="text-primebrand text-4xl" />,
    price: 10.87,
    protection: "Includes theft protection",
    category: "protection",
    selected: true,
  },
  {
    id: 2,
    name: "Reduced excess",
    description: "MAD 7,000.00 (approx. $698.88) financial responsibility",
    price: 5.99,
    img:<RiShieldStarFill className="text-primebrand text-4xl" />,
    protection: "Includes theft protection",
    category: "protection",
    selected: false,
  },
  {
    id: 3,
    name: "Additional driver",
    description: "Want to share the driving? Add other drivers.",
    img: <BsPersonPlus className="text-primebrand text-4xl"/>,
    price: 0.44,
    category: "addson",
    selected: false,
  },
  {
    id: 4,
    name: "Tire and windshield protection",
    description:
      "Zero financial responsibility for damage to the windshield, windows, or tires.",
    img: <GiFlatTire className="text-primebrand text-4xl"/>,
    price: 7.67,
    category: "addson",
    selected: false,
  },
  {
    id: 5,
    name: "Infant seat",
    description: "Suitable for babies up to 12 months old.",
    img: <MdOutlineAirlineSeatReclineExtra className="text-primebrand text-4xl"/>,
    price: 0.78,
    category: "addson",
    selected: false,
  },
  {
    id: 6,
    name: "Toddler seat",
    description: "Suitable for children 1-4 years old.",
    img: <MdOutlineAirlineSeatReclineExtra className="text-primebrand text-4xl"/>,
    price: 0.78,
    category: "addson",
    selected: false,
  },
  {
    id: 7,
    name: "Booster seat",
    description: "Suitable for children 4-12 years old.",
    img: <MdOutlineAirlineSeatReclineExtra className="text-primebrand text-4xl"/>,
    price: 0.45,
    category: "addson",
    selected: false,
  },
];
export default services;
