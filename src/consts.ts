// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'pcarion.com';
export const SITE_DESCRIPTION = 'Because the world needs yet another engineering blog';

import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'pcarion.com',
  description:
    'Because the world needs yet another engineering blog',
  href: 'https://pcarion.com',
  author: 'pcarion',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/pcarion',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/pcarion',
    label: 'Twitter',
  },
  {
    href: 'mailto:pcarion@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}