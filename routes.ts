import { BiHomeAlt2 } from "react-icons/bi";
import { SiZcash } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
    num: 242,
  },
  {
    title: "Course",
    href: "/course",
    Icon: FaBook,
    num: 13,
  },
  {
    title: "Student",
    href: "/student",
    Icon: PiStudentFill,
    num: 242,
  },
  {
    title: "Payment",
    href: "/payment",
    Icon: SiZcash,
    num: 556000,
  },
  {
    title: "Settings",
    href: "/settings",
    Icon: IoSettings,
    num: 242,
  },
];

export const Cards = [
  {
    title: "Student",
    href: "/",
    Icon: FaGraduationCap,
    num: 242,
    background: "#F0F9FF",
  },
  {
    title: "Course",
    href: "/course",
    Icon: CiBookmark,
    num: 13,
    background: "#FEF6FB"
  },
  {
    title: "Payment",
    href: "/payment",
    Icon: SiZcash,
    num: "$556000",
    background: "#FEFBEC"
  },
  {
    title: "Users",
    href: "/",
    Icon: FaUser,
    num: 3,
    background: "#FEAF00"
  },
];

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]



export const Students = [
  {
    profile_picture: "john_doe.jpg",
    Name: "Chijioke Okonkwo",
    Email: "chijioke.okonkwo@gmail.com",
    Phone: "+2348012345678",
    Email_number: "1234567890123456",
    Date_of_admission: "15-03-2020",
  },
  {
    profile_picture: "jane_smith.jpg",
    Name: "Ngozi Eze",
    Email: "ngozi.eze@gmail.com",
    Phone: "+2348023456789",
    Email_number: "9876543210987654",
    Date_of_admission: "22-09-2021",
  },
  {
    profile_picture: "alex_johnson.jpg",
    Name: "Oluwafemi Ade",
    Email: "oluwafemi.ade@gmail.com",
    Phone: "+2348034567890",
    Email_number: "1122334455667788",
    Date_of_admission: "10-05-2019",
  },
  {
    profile_picture: "emily_brown.jpg",
    Name: "Chinwe Igwe",
    Email: "chinwe.igwe@gmail.com",
    Phone: "+2348045678901",
    Email_number: "5544332211009988",
    Date_of_admission: "03-11-2022",
  },
  {
    profile_picture: "daniel_lee.jpg",
    Name: "Yusuf Adekunle",
    Email: "yusuf.adekunle@gmail.com",
    Phone: "+2348056789012",
    Email_number: "9988776655443322",
    Date_of_admission: "18-09-2018",
  },
  {
    profile_picture: "sophia_garcia.jpg",
    Name: "Chiamaka Okafor",
    Email: "chiamaka.okafor@gmail.com",
    Phone: "+2348067890123",
    Email_number: "1122334455221122",
    Date_of_admission: "24-04-2023",
  },
  {
    profile_picture: "michael_wang.jpg",
    Name: "Emeka Nwosu",
    Email: "emeka.nwosu@gmail.com",
    Phone: "+2348078901234",
    Email_number: "3344556677889900",
    Date_of_admission: "07-08-2017",
  },
  {
    profile_picture: "olivia_smith.jpg",
    Name: "Olivia Smith",
    Email: "olivia.smith@gmail.com",
    Phone: "+2348089012345",
    Email_number: "1234567890123456",
    Date_of_admission: "15-06-2021",
  },
  {
    profile_picture: "chuka_uzo.jpg",
    Name: "Chuka Uzo",
    Email: "chuka.uzo@gmail.com",
    Phone: "+2348090123456",
    Email_number: "9876543210987654",
    Date_of_admission: "12-04-2019",
  },
  {
    profile_picture: "ayomide_ade.jpg",
    Name: "Ayomide Ade",
    Email: "ayomide.ade@gmail.com",
    Phone: "+2348101234567",
    Email_number: "1122334455667788",
    Date_of_admission: "08-03-2022",
  },
  {
    profile_picture: "mary_james.jpg",
    Name: "Mary James",
    Email: "mary.james@gmail.com",
    Phone: "+2348112345678",
    Email_number: "5544332211009988",
    Date_of_admission: "17-11-2018",
  },
];
