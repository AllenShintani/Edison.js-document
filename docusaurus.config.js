// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '　Hello Edison',
  tagline: 'Ready to be Innovator?',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://edison-js-document.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Edison', // Usually your GitHub org/user name.
  projectName: 'Edison', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: '/img/edison.png',
      navbar: {
        title: 'Edison',
        logo: {
          alt: 'My Site Logo',
          src: '/img/edison.png',
        },
        

        items: [
          {
            href: 'https://github.com/edison-js/Edison',
            position: 'left',
            html: `
      <a href="https://github.com/edison-js/Edison" target="_blank" rel="noopener noreferrer">
      <img src="https://img.shields.io/github/stars/edison-js/Edison?style=plastic&color=glay&label=Star" alt="GitHub Star" width="70" />
      </a>
            `
          },
          {
            to: '/docs/Getting Started/Quick Start',
            position: 'right',
            label: 'Tutorial',
          },
          {
            position: 'right',
            href: 'https://github.com/edison-js/Edison',
            html: '<img src="/img/github-svgrepo-com.svg" alt="GitHub" />'
          },
          {
            position: 'right',
            href: 'https://discord.gg/BDDgnQYbCE',
            html: '<img src="/img/discord-icon.svg" alt="discord" />'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Getting Started/Quick Start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/edison',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/BDDgnQYbCE',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Edison1972457',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/edison-js/Edison',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
