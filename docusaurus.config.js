// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const { beConfig } = require("./src/config");
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fs = require("fs");
const solutionsHTML = fs.readFileSync("./src/snippets/solutions.html", "utf-8");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BlockEden.xyz",
  titleDelimiter: "-",
  tagline: beConfig.tagline,
  url: "https://blockeden.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  trailingSlash: true,

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        href: "https://blockeden.xyz/img/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "https://blockeden.xyz/img/favicon.svg",
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        api: {
          // id: 'cars', // omitted => default instance
          path: "./src/swagger/aptos-openapi.json",
          routeBasePath: "aptos-api-reference",
          sidebarCollapsed: false,
          sidebarCollapsible: false,
        },
        docs: {
          editUrl:
            "https://github.com/BlockEdenHQ/web-blockeden-home/edit/main",
          sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./static/assets/css/theme-saas-trend.css"),
          ],
        },
        gtag: {
          trackingID: "G-V2HNMTR1D0",
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  stylesheets: ["https://fonts.googleapis.com/css?family=Inter"],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "Aptos GraphQL, Aptos RPC, Sui RPC, Block Eden, EVM blockchain RPCs, Solana RPC",
        },
      ],

      navbar: {
        title: "BlockEden.xyz",
        logo: {
          alt: "BlockEden.xyz",
          src: "img/favicon.svg",
        },
        items: [
          {
            label: "Solutions",
            type: "dropdown",
            items: [
              {
                type: "html",
                value: solutionsHTML,
              },
            ],
          },
          { to: beConfig.apis, label: "API Marketplace", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Doc",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/pricing", label: "Pricing", position: "right" },
          { to: beConfig.signIn, label: "Login", position: "right" },
          { to: beConfig.signUp, label: "Sign Up", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          href: "/",
          src: "/img/favicon.svg",
          srcDark: "/img/favicon.svg",
          alt: "BlockEden.xyz",
          height: "36px",
        },
        links: [
          {
            title: "Navigate",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/blockedenhq",
              },
              {
                label: "Aptos",
                to: "/aptos",
              },
              {
                label: "Sui",
                to: "/sui",
              },
              {
                label: "dStore",
                to: "/dstore",
              },
              {
                label: "About Us",
                to: "/about-us",
              },
            ],
          },
          {
            // <a href="https://discordapp.com/invite/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__link-item">Discord<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
            title: "Contact",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/4Yfvs2HWey",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/BlockedenHQ",
              },
              {
                label: "Medium",
                to: "https://medium.com/@BlockEden.xyz",
              },
              {
                label: "Mirror",
                to: "https://mirror.xyz/0x1De85782A08Ee77371D7A711B1370fA369b01A89",
              },
              {
                label: "Substack newsletter",
                to: "https://blockedenxyz.substack.com/",
              },
              {
                label: "Linkedin",
                to: "https://www.linkedin.com/in/dora-noda-35952622a/",
              },
              {
                label: "info@BlockEden.xyz",
                to: "mailto:info@BlockEden.xyz",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Privacy Policy",
                href: "/privacy-policy",
              },
              {
                label: "Terms of Service",
                href: "/terms-of-service",
              },
              {
                label: "Brand Assets",
                href: "/brand-assets",
              },
              {
                label: "Stargately Home",
                href: "https://stargately.com/",
              },
              {
                label: "10x.pub Web3 Guild (W3G)",
                href: "https://10x.pub/",
              },
            ],
          },
          {
            title: "Ecosystem Showcase",
            items: [
              {
                label: "Scalp Empire",
                href: "https://scalp-empire.com/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
              },
              {
                label: "Blockroma",
                href: "https://blockroma.com/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
              },
              {
                label: "Secure3",
                href: "https://www.secure3.io/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
              },
              {
                label: "Fewcha Wallet",
                href: "https://fewcha.app/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
              },
              {
                label: "Payton Wallet",
                href: "https://payton.so/?utm_source=BlockEden_xyz&utm_medium=BlockEden_xyz&utm_campaign=BlockEden_xyz&utm_id=BlockEden_xyz&utm_term=BlockEden_xyz&utm_content=BlockEden_xyz",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stargately, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
