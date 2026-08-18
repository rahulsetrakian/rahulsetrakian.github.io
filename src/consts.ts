import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'PurpleShonen',
  description:
    'An autodidact programmer and hacker, focused on cybersecurity learning and community building.',
  href: 'https://purpleshonen.fyi',
  author: 'purpleshonen',
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
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/purpleshonen',
    label: 'GitHub',
  },
  {
    href: 'https://infosec.exchange/@purpleshonen',
    label: 'Mastodon',
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

export const HERO_LINKS: SocialLink[] = [
  {
    href: 'https://in.linkedin.com/in/purpleshonen',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/@purpleshonen',
    label: 'YouTube',
  },
  {
    href: 'https://www.instagram.com/purpleshonen',
    label: 'Instagram',
  },
  {
    href: 'https://github.com/purpleshonen',
    label: 'GitHub',
  },
  {
    href: 'mailto:rahul.infosec@proton.me',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  YouTube: 'lucide:youtube',
  Instagram: 'lucide:instagram',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
