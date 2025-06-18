import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraCart",
  description: "Documentation for the LaraCart package",

  appearance: "dark",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/laracart-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Documentation for the LaraCart package",
      },
    ],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      { property: "og:title", content: "LaraCart | Laravel Cart System" },
    ],
    ["meta", { property: "og:site_name", content: "LaraCart" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://docs.laracart.com/laracart-logo.png",
      },
    ],
    ["meta", { property: "og:url", content: "https://docs.laracart.com//" }],
  ],

  themeConfig: {
    logo: "/laracart.png",
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Overview", link: "/#overview" },
          { text: "Installation", link: "/#installation" },
        ],
      },
      {
        text: "Basic Usage",
        items: [
          { text: "Adding", link: "/basic-usage#adding" },
          { text: "Updating", link: "/basic-usage#updating" },
          { text: "Removing", link: "/basic-usage#removing" },
          { text: "Accessing", link: "/basic-usage#accessing" },
          { text: "Searching", link: "/basic-usage#searching" },
          { text: "Prices", link: "/basic-usage#prices" },
        ],
      },
      {
        text: "Coupons & Fees",
        items: [
          { text: "Overview", link: "/coupons#overview" },
          { text: "Helpers", link: "/coupons#helpers" },
          { text: "Implementation", link: "/coupons#implementation" },
          { text: "Custom", link: "/coupons#custom" },
          { text: "Fees", link: "/coupons#fees" },
        ],
      },
      {
        text: "Cart API",
        items: [
          { text: "Instances", link: "/cart-api#instances" },
          { text: "Attributes", link: "/cart-api#attributes" },
          { text: "Cart Totals", link: "/cart-api#totals" },
          { text: "Currency and Locale", link: "/cart-api#currency-locale" },
          {
            text: "Emptying and Destroying",
            link: "/cart-api#emptying-destroying",
          },
        ],
      },
      {
        text: "Advanced Usage",
        items: [
          { text: "Sub Items", link: "/advanced-usage#sub-items" },
          {
            text: "Item Model Binding",
            link: "/advanced-usage#item-model-binding",
          },
        ],
      },
      {
        text: "Miscellaneous",
        items: [
          {
            text: "Cross Browser Support",
            link: "/misc#cross-browser-support",
          },
          { text: "Cart Events", link: "/misc#events" },
          { text: "Cart Exceptions", link: "/misc#exceptions" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lukepolo/laracart" },
    ],

    search: {
      provider: "local",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    editLink: {
      pattern: "https://github.com/lukepolo/laracart-docs/edit/main/:path",
    },
  },
});
