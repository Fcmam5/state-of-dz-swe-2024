// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Algeria Developer Survey 2024",
  // tagline: "Unveiling the Software Engineering Landscape: Trends & Challenges",
  tagline: "The survey is still ongoing",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fcmam5.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/state-of-dz-swe-2024",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fcmam5", // Usually your GitHub org/user name.
  projectName: "state-of-dz-swe-2024", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "ar"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Fcmam5/state-of-dz-swe-2024/tree/master/website/blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "dark" },
      // Replace with your project's social card
      image: "img/chabiba-ta3-code.png",
      navbar: {
        title: "Algeria Developer Survey 2024",
        logo: {
          alt: "Algerian flag",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Fcmam5/state-of-dz-swe-2024",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "2024 Survey links",
            items: [
              {
                label: "Arabic",
                href: "https://forms.gle/gZWWXLC9Gh1d1BJFA",
              },
              {
                label: "English",
                href: "https://forms.gle/CCks5wiEXB7MgBqV7",
              },
              {
                label: "French",
                href: "https://forms.gle/D9GLGqS7bR3qQr43A",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Fcmam5/state-of-dz-swe-2024",
              },
            ],
          },
        ],
        copyright: `Copyright © Algeria Developer survey 2024. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
