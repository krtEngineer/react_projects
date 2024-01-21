import tour_img_1 from "./images/tour-1.jpeg";
import tour_img_2 from "./images/tour-2.jpeg";
import tour_img_3 from "./images/tour-3.jpeg";
import tour_img_4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#footer",
    text: "footer",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    iconClass: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    iconClass: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    iconClass: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    iconClass: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    iconClass: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    iconClass: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour_img_1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "tibet",
    duration: "6 days",
    lowerPrice: "from $2100",
  },
  {
    id: 2,
    img: tour_img_2,
    date: "october 11th, 2020",
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    duration: "11 days",
    lowerPrice: "from $1400",
  },
  {
    id: 3,
    img: tour_img_3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    duration: "8 days",
    lowerPrice: "from $5000",
  },
  {
    id: 4,
    img: tour_img_4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    duration: "20 days",
    lowerPrice: "from $3300",
  },
];
