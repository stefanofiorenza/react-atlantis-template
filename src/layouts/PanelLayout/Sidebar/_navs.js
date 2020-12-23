import {
  RiDashboardFill,
} from "react-icons/ri";

export default [
  {
    name: "Gösterge Paneli",
    to: "/panel/dashboard",
    icon: RiDashboardFill,
  },
  {
    section: "Panel",
  },
  {
    name: "Blank",
    icon: RiDashboardFill,
    menu: [
      { name: "Blank Page", to: "/panel/blank" },
   
    ],
  },
 
];
