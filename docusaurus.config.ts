import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Flytrap",
  favicon: "img/favicon.ico",

  url: "https://getflytrap.github.io/",
  baseUrl: "/",
  organizationName: "getflytrap",
  projectName: "getflytrap.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Flytrap",
      // logo: {
      //   alt: "Flytrap Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        { to: "/case-study", label: "Case Study", position: "right" },
        {
          to: "/#team",
          label: "Team",
          position: "right",
          activeBasePath: "never-active",
        },
        {
          href: "https://github.com/getflytrap",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Top of Page",
              to: "/",
            },
            {
              label: "Case Study",
              to: "/case-study",
            },
            {
              label: "Team",
              to: "/#team",
            },
            {
              href: "https://github.com/getflytrap",
              label: "GitHub",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flytrap`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
