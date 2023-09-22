import { person, eye, catalog, macbook, iphone, trumpet, phone, mail, facebook, twitter } from "../assets";

const generateId = () => (Math.random() * 1000).toFixed(0);
const colors = {
  primaryRed: "primaryRed",
  primaryBlue: "primaryBlue",
  primaryGreen: "primaryGreen",
};

export const navLinks = [
  {
    id: "home",
    title: "why us",
  },
  {
    id: "benefits",
    title: "benefits",
  },
  {
    id: "prices",
    title: "prices",
  },
  {
    id: "contact",
    title: "contact",
  },
];

export const statistics = [
  {
    id: "statistic-1",
    icon: person,
    color: colors.primaryRed,
    title: "100000+",
    content: "daily entries",
  },
  {
    id: "statistic-2",
    icon: eye,
    color: colors.primaryBlue,
    title: "2000000+",
    content: "seen products every day",
  },
  {
    id: "statistic-3",
    icon: catalog,
    color: colors.primaryGreen,
    title: "10000+",
    content: "added posts daily",
  },
];

export const benefits = [
  {
    id: "benfit-1",
    title: "Be always first",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: macbook,
    color: colors.primaryRed,
  },
  {
    id: "benefit-2",
    title: "Your shop is where you are!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: iphone,
    color: colors.primaryBlue,
  },
  {
    id: "benefit-3",
    title: "Increase your brand recognition",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: trumpet,
    color: colors.primaryGreen,
  },
];

export const pricing = [
  {
    id: "basic",
    title: "Basic",
    price: "$0",
    limited: false,
    color: colors.primaryRed,
    benefits: [
      {
        id: `b${generateId()}`,
        active: true,
        content: "100 MB HDD",
      },
      {
        id: `b${generateId()}`,
        active: true,
        content: "1 Subdomain",
      },
      {
        id: `b${generateId()}`,
        active: true,
        content: "2 E-mails",
      },
      {
        id: `b${generateId()}`,
        active: false,
        content: "Two years license",
      },
      {
        id: `b${generateId()}`,
        active: false,
        content: "Full support",
      },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    price: "$25",
    limited: true,
    color: colors.primaryBlue,
    benefits: [
      {
        id: `pro${generateId()}`,
        active: true,
        content: "500 MB HDD",
      },
      {
        id: `pro${generateId()}`,
        active: true,
        content: "2 Subdomains",
      },
      {
        id: `pro${generateId()}`,
        active: true,
        content: "5 E-mails",
      },
      {
        id: `pro${generateId()}`,
        active: true,
        content: "One year license",
      },
      {
        id: `pro${generateId()}`,
        active: false,
        content: "Full support",
      },
    ],
  },
  {
    id: "premium",
    title: "Premium",
    price: "$60",
    limited: true,
    color: colors.primaryGreen,
    benefits: [
      {
        id: `prem${generateId()}`,
        active: true,
        content: "2 GB HDD",
      },
      {
        id: `prem${generateId()}`,
        active: true,
        content: "5 Subdomains",
      },
      {
        id: `prem${generateId()}`,
        active: true,
        content: "20 E-mails",
      },
      {
        id: `prem${generateId()}`,
        active: true,
        content: "Two years license",
      },
      {
        id: `prem${generateId()}`,
        active: true,
        content: "Full support",
      },
    ],
  },
];

export const contact = [
  {
    id: "mail",
    icon: mail,
    content: "info@bestshop.xyz",
  },
  {
    id: "phone",
    icon: phone,
    content: "123 456 789",
  },
];

export const social = [
  {
    id: "twitter",
    icon: twitter,
  },
  {
    id: "facebook",
    icon: facebook,
  },
];
