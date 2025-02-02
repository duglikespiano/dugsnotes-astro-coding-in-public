// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.test.com',
    integrations: [icon({
        include: {
            tabler: ['*'],
        },
        }), sitemap({ filter: (page) => page !== 'https://www.test.com/test' }), react(), tailwind(), partytown()],
});