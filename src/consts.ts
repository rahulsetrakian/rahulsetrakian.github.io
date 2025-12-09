import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'rahulsetrakian',
  description:
    'An autodidact programmer and hacker, focused on cybersecurity learning and community building.',
  href: 'https://rahulsetrakian.in',
  author: 'rahulsetrakian',
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
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/rahulsetrakian',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/rahulsetrakian',
    label: 'Twitter',
  },
  {
    href: 'mailto:rahul.infosec@proton.me',
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
