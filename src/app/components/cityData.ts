export type District = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
  href: string;
  /** why this service matters to a business */
  why: string;
  /** what the client gets */
  points: string[];
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
    why: "Your website is the one place online you fully own. Every ad, search and post sends people there, so it decides whether a visitor becomes a customer.",
    points: ["Custom design, not a template", "Fast on phones, clear on every screen", "Built so you can update it yourself"],
    name: 'Websites',
    tag: 'Design + development',
    desc: 'Fast, mobile-first websites and web apps, designed around what your customers need to do.',
    color: '#ffb454',
    href: '/contact',
    x: 3, z: -9, n: 5, h: 9,
  },
  {
    id: 'seo',
    why: "People search before they buy. If you are not there when they look for what you sell, a competitor gets the call.",
    points: ["Technical audit and fixes", "Pages written for what customers search", "Google Business Profile and local listings"],
    name: 'SEO',
    tag: 'Search',
    desc: 'Technical fixes, content and local listings so the right people find you on Google.',
    color: '#d6f24a',
    href: '/contact',
    x: -10, z: -4, n: 3, h: 6.5,
  },
  {
    id: 'ads',
    why: "Ads put you in front of buyers today, while search rankings take time to build. Done properly, you know what every enquiry costs.",
    points: ["Google Search and Meta campaigns", "Conversion tracking from day one", "A monthly report in plain language"],
    name: 'Paid ads',
    tag: 'Google + Meta',
    desc: 'Campaigns with clear tracking, so you can see what every lead costs.',
    color: '#ff4f8b',
    href: '/contact',
    x: 12, z: 1, n: 3, h: 7.5,
  },
  {
    id: 'social',
    why: "Customers check your social pages to see if you are active and real. A steady, good-looking feed builds that trust before they ever contact you.",
    points: ["A monthly content calendar", "Designed posts, reels and stories", "Comments and messages answered"],
    name: 'Social media',
    tag: 'Content + community',
    desc: 'Planned posts, designed creatives and replies across the channels your customers use.',
    color: '#9b7bff',
    href: '/contact',
    x: -7, z: 8, n: 3, h: 4.5,
  },
  {
    id: 'brand',
    why: "A consistent look and voice makes a business feel established. It is what people remember and recognise the next time they see you.",
    points: ["Logo and visual identity", "Website and ad copy", "Photo and short video"],
    name: 'Brand + content',
    tag: 'Identity, copy, video',
    desc: 'Logos, visual identity, copy and video that make everything look like one business.',
    color: '#3ee6c1',
    href: '/contact',
    x: 5, z: 10, n: 3, h: 5,
  },
  {
    id: 'care',
    why: "A site that is slow, down or out of date quietly loses customers. Looking after it is what keeps everything else working.",
    points: ["Managed hosting and domain", "Updates, backups and security", "Analytics you can actually read"],
    name: 'Hosting + care',
    tag: 'Always on',
    desc: 'Hosting, updates, backups and analytics, so everything we build keeps running and improving.',
    color: '#4d8dff',
    href: '/contact',
    x: -1, z: 1, n: 2, h: 3.5,
  },
];
