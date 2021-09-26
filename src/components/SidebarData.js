import React from "react";
import { FaChartPie } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
export const SidebarData = [
  {
    title: "Registros",
    path: "/registros",
    icon: <FaChartPie />,
    iconClosed: <FaAngleDown />,
    iconOpened: <FaAngleUp />,
    subNav: [
      {
        title: "Users",
        path: "/resgistros/users",
        icon: <FaChartPie />,
      },
      {
        title: "Levantar Orden",
        path: "/resgistros/orden",
        icon: <FaRegFileAlt />,
      },
    ],
  },
  {
    title: "Reportes",
    path: "/reportes",
    icon: <FaRegFileAlt />,
    iconClosed: <FaAngleDown />,
    iconOpened: <FaAngleUp />,
  },
];
