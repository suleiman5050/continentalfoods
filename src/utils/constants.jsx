import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/products",
    text: "products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "To produce quality agricultural products isung improved production, value addition and market innovations for multiple benefits.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To become a leading investor in the agricultural sector by performing beneficial and profitable partnerships with smallholder farmers and other key stakeholders in Nigeria.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We have more than ten years experience in the agri-business sector. We provide consultancy services and supply international standard of farm produce to our customers with efficiency and ease.",
  },
];

export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
