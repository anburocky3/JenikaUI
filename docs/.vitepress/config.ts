import { config } from '../../src/config/app.config';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: config.libraryName,
  description: config.libraryShortName,
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/installation',
        activeMatch: '/installation',
      },
      { text: 'Contribute', link: 'https://github.com/anburocky3/jenikaui' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Our Team', link: '/team' },
        ],
      },
      {
        text: 'Components',
        items: [{ text: 'Buttons', link: '/components/buttons' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anburocky3' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/anburocky3/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Anbuselvan Rocky',
    },
    editLink: {
      pattern: 'https://github.com/anburocky3/jenika-ui/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'Updated Date',
  },
  markdown: {
    theme: 'material-palenight',
  },
  lastUpdated: true,
  base: '/JenikaUI',
});
