// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The State of Software Engineering in Algeria",
  // tagline: "Unveiling the Software Engineering Landscape: Trends & Challenges",
  tagline: "Insights from our Algeria Developer Survey in 2024",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],
  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "text/javascript",
      },
      innerHTML: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1835575,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
    },
  ],
  // Set the production url of your site here
  url: "https://state-of-algeria.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // baseUrl: "/state-of-dz-swe-2024",

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
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
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
      colorMode: { defaultMode: "light", respectPrefersColorScheme: false },
      announcementBar: {
        content: `🍪 This website uses cookies`,
        backgroundColor: "#3cad6e",
        textColor: "#FFFFFF",
      },
      algolia: {
        appId: "V6WZN2X9IM",
        apiKey: "97cb6f879211ba31786bb21a8241f8ae",
        indexName: "fcmam5",
        contextualSearch: true,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "algeria, software, development, it,machine learning, data, cloud",
        },
      ],
      // Replace with your project's social card
      image: "img/chabiba-ta3-code.png",
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "The state of Algerian Software engineering 2024",
        logo: {
          alt: "Don't judge me, ain't a designer... A survey logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/docs", label: "Results", position: "left" },
          {
            to: "/docs/insights/technology-trends",
            label: "Trends",
            position: "left",
          },
          {
            to: "/docs/insights/challenges",
            label: "Challenges",
            position: "left",
          },
          {
            to: "/docs/insights/remuneration",
            label: "Remuneration",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/report", label: "🚧Report", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "The project",
            items: [
              {
                label: "About us",
                href: "/about",
              },
              {
                label: "Support ",
                href: "/support",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                html: `<br/><a href="https://github.com/Fcmam5/state-of-dz-swe-2024" target="_blank"><img src="https://img.shields.io/github/stars/fcmam5/state-of-dz-swe-2024"/></a><br/>`,
              },
            ],
          },
          {
            title: "Spread the word!",
            items: [
              {
                label: "Facebook",
                to: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstate-of-algeria.dev%2Fdocs&amp;src=sdkpreparse",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/intent/tweet?text=Check%20out%20The%20State%20of%20Algerian%20Software%20Engineering%202024:%20https%3A%2F%2Fstate-of-algeria.dev%2Fdocs%20%23dzDevSurvey24",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/sharing/share-offsite/?url=https://state-of-algeria.dev/docs",
              },
              {
                html: "<small><em>Please use <strong style='user-select: all;-webkit-user-select: all;cursor:copy;'>#dzDevSurvey24</strong> hashtag</em></small>",
              },
            ],
          },
          {
            title: "goto;",
            items: [
              {
                label: "Survey results",
                to: "/docs",
              },
              {
                label: "Insights",
                to: "/docs/insights",
              },
              {
                label: "Methodology",
                to: "/docs/appendix/methodology",
              },
              {
                label: "Glossary",
                to: "/docs/appendix/glossary",
              },
              {
                html: "<a href='https://ko-fi.com/D1D6V2Q0D' target='_blank'><img height='36'  src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>",
              },
            ],
          },
        ],
        copyright: `Copyright © The state of Algerian Software engineering 2024. Built with Docusaurus.`,
        logo: {
          alt: "Don't judge me, ain't a designer... A survey logo",
          src: "img/logo.png",
          height: 200,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};

export default config;
