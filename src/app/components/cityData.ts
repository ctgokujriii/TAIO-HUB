export type District = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
  href: string;
  /** position on the ground plane */
  x: number;
  z: number;
  /** footprint: towers per side */
  n: number;
  /** tallest tower */
  h: number;
};

// Each district of the city is one TAIO Hub service.
export const districts: District[] = [
  {
    id: 'web',
    name: 'Websites',
    tag: 'Design + development',
    desc: 'Fast, mobile-first websites and web apps, designed around what your customers need to do.',
    color: '#ffb454',
    href: '/contact',
    x: 3, z: -9, n: 5, h: 9,
  },
  {
    id: 'seo',
    name: 'SEO',
    tag: 'Search',
    desc: 'Technical fixes, content and local listings so the right people find you on Google.',
    color: '#d6f24a',
    href: '/contact',
    x: -10, z: -4, n: 3, h: 6.5,
  },
  {
    id: 'ads',
    name: 'Paid ads',
    tag: 'Google + Meta',
    desc: 'Campaigns with clear tracking, so you can see what every lead costs.',
    color: '#ff4f8b',
    href: '/contact',
    x: 12, z: 1, n: 3, h: 7.5,
  },
  {
    id: 'social',
    name: 'Social media',
    tag: 'Content + community',
    desc: 'Planned posts, designed creatives and replies across the channels your customers use.',
    color: '#9b7bff',
    href: '/contact',
    x: -7, z: 8, n: 3, h: 4.5,
  },
  {
    id: 'brand',
    name: 'Brand + content',
    tag: 'Identity, copy, video',
    desc: 'Logos, visual identity, copy and video that make everything look like one business.',
    color: '#3ee6c1',
    href: '/contact',
    x: 5, z: 10, n: 3, h: 5,
  },
  {
    id: 'care',
    name: 'Hosting + care',
    tag: 'Always on',
    desc: 'Hosting, updates, backups and analytics, so everything we build keeps running and improving.',
    color: '#4d8dff',
    href: '/contact',
    x: -1, z: 1, n: 2, h: 3.5,
  },
];
