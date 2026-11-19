export type Project = {
  slug: string;
  name: string;
  kind: string;
  url: string;
  image: string;
  summary: string;
  built: string[];
};

// Sites TAIO Hub has designed and built. Keep copy factual: no made-up numbers.
export const projects: Project[] = [
  {
    slug: 'saljoyarcade',
    name: 'SALjoyArcade',
    kind: 'Online store',
    url: 'https://www.saljoyarcade.store',
    image: '/work/saljoy.jpg',
    summary: 'A fight-stick storefront for Pakistan with 9 series and 39 models, live prices, sorting and filters, and a 3D scroll tour.',
    built: ['Custom storefront', 'Sort and filters', 'Delivery and advance-payment terms', 'Search-friendly pages'],
  },
  {
    slug: 'arise',
    name: 'ARISE Gaming Zone',
    kind: 'Local business site',
    url: 'https://www.arisegaming.zone',
    image: '/work/arise.jpg',
    summary: 'A PS5 gaming zone in Township, Lahore. A video-first homepage, rates, booking, game and area pages built to rank on Google.',
    built: ['Video-first homepage', 'Game and area pages for SEO', 'Event landing pages', 'Online booking flow'],
  },
  {
    slug: 'zubair-plumbing',
    name: 'Zubair Plumbing Services',
    kind: 'Service business',
    url: 'https://zubairplumbing.vercel.app',
    image: '/work/zubair.jpg',
    summary: 'A plumber in Lahore, open 24/7. Built so a customer can call in one tap, with a 3D scroll tour of the work.',
    built: ['Tap-to-call design', 'Service pages', 'Local SEO basics', 'Fast on phones'],
  },
  {
    slug: 'nbs-salon',
    name: 'NBS Salon',
    kind: "Men's salon",
    url: 'https://nbs-salon.vercel.app',
    image: '/work/nbs.jpg',
    summary: "A men's salon on Faiz Road, Old Muslim Town, Lahore, with services, location and a scroll tour of the shop.",
    built: ['Service menu', 'Location and hours', 'Mobile-first layout', '3D scroll tour'],
  },
  {
    slug: 'ruhbyhs',
    name: 'ruhbyhs',
    kind: 'Luxury perfumes',
    url: 'https://v0-ruh-by-hs.vercel.app',
    image: '/work/ruh.jpg',
    summary: 'A luxury perfume brand with a gold-on-black cinematic intro and an elegant catalogue.',
    built: ['Cinematic intro', 'Brand identity styling', 'Product catalogue'],
  },
];
