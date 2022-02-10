import React, { useState } from "react";
import Megamenu from "../../Megamenu/Megamenu";
import "./Bottom.css";

const Bottom = () => {
  const [category, setCategory] = useState({
    allCategories: {
      name: "SHOP BY CATEGORY",
      categories: [
        {
          cate_name: "Men's Clothing",
          subCategories: [
            {
              sub_name: "Top Ware",
              variants: [
                {
                  variant_name: "T-Shirts",
                  route: "/shop/t-shirts",
                },
                {
                  variant_name: "Shirts",
                  route: "/shop/shirts",
                },
                {
                  variant_name: "Suits & Blazers",
                  route: "/shop/suits-blazers",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
              ],
            },
            {
              sub_name: "Winter Ware",
              variants: [
                {
                  variant_name: "Sweaters",
                  route: "/shop/sweaters",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
                {
                  variant_name: "Sweatshirts",
                  route: "/shop/sweatshirts",
                },
                {
                  variant_name: "Thermals",
                  route: "/shop/thermals",
                },
                {
                  variant_name: "Pullover",
                  route: "/shop/pullover",
                },
              ],
            },
            {
              sub_name: "Innerwear & Sleepwear",
              variants: [
                {
                  variant_name: "Vests",
                  route: "/shop/vests",
                },
                {
                  variant_name: "Boxers",
                  route: "/shop/boxers",
                },
              ],
            },
            {
              sub_name: "Bottom Ware",
              variants: [
                {
                  variant_name: "Jeans",
                  route: "/shop/jeans",
                },
                {
                  variant_name: "Shorts",
                  route: "/shop/shorts",
                },
                {
                  variant_name: "Cargos",
                  route: "/shop/cargos",
                },
                {
                  variant_name: "Trousers",
                  route: "/shop/trousers",
                },
              ],
            },
          ],
        },
        {
          cate_name: "Women's Clothing",
          subCategories: [
            {
              sub_name: "Top Ware",
              variants: [
                {
                  variant_name: "T-Shirts",
                  route: "/shop/t-shirts",
                },
                {
                  variant_name: "Shirts",
                  route: "/shop/shirts",
                },
                {
                  variant_name: "Suits & Blazers",
                  route: "/shop/suits-blazers",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
              ],
            },
            {
              sub_name: "Winter Ware",
              variants: [
                {
                  variant_name: "Sweaters",
                  route: "/shop/sweaters",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
                {
                  variant_name: "Sweatshirts",
                  route: "/shop/sweatshirts",
                },
                {
                  variant_name: "Thermals",
                  route: "/shop/thermals",
                },
                {
                  variant_name: "Pullover",
                  route: "/shop/pullover",
                },
              ],
            },
            {
              sub_name: "Innerwear & Sleepwear",
              variants: [
                {
                  variant_name: "Vests",
                  route: "/shop/vests",
                },
                {
                  variant_name: "Boxers",
                  route: "/shop/boxers",
                },
              ],
            },
            {
              sub_name: "Bottom Ware",
              variants: [
                {
                  variant_name: "Jeans",
                  route: "/shop/jeans",
                },
                {
                  variant_name: "Shorts",
                  route: "/shop/shorts",
                },
                {
                  variant_name: "Cargos",
                  route: "/shop/cargos",
                },
                {
                  variant_name: "Trousers",
                  route: "/shop/trousers",
                },
              ],
            },
          ],
        },
        {
          cate_name: "Accessories",
          subCategories: [
            {
              sub_name: "Top Ware",
              variants: [
                {
                  variant_name: "T-Shirts",
                  route: "/shop/t-shirts",
                },
                {
                  variant_name: "Shirts",
                  route: "/shop/shirts",
                },
                {
                  variant_name: "Suits & Blazers",
                  route: "/shop/suits-blazers",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
              ],
            },
            {
              sub_name: "Winter Ware",
              variants: [
                {
                  variant_name: "Sweaters",
                  route: "/shop/sweaters",
                },
                {
                  variant_name: "Jackets",
                  route: "/shop/jackets",
                },
                {
                  variant_name: "Sweatshirts",
                  route: "/shop/sweatshirts",
                },
                {
                  variant_name: "Thermals",
                  route: "/shop/thermals",
                },
                {
                  variant_name: "Pullover",
                  route: "/shop/pullover",
                },
              ],
            },
            {
              sub_name: "Innerwear & Sleepwear",
              variants: [
                {
                  variant_name: "Vests",
                  route: "/shop/vests",
                },
                {
                  variant_name: "Boxers",
                  route: "/shop/boxers",
                },
              ],
            },
            {
              sub_name: "Bottom Ware",
              variants: [
                {
                  variant_name: "Jeans",
                  route: "/shop/jeans",
                },
                {
                  variant_name: "Shorts",
                  route: "/shop/shorts",
                },
                {
                  variant_name: "Cargos",
                  route: "/shop/cargos",
                },
                {
                  variant_name: "Trousers",
                  route: "/shop/trousers",
                },
              ],
            },
          ],
        },
      ],
    },
    pages: ["HOME", "SHOP", "BLOG", "CONTACT US", "ABOUT US"],
  });
  return <Megamenu category={category} />;
};

export default Bottom;
