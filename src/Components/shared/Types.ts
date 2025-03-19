export type Venue = {
  name: string;
  address: string;
  postcode: string;
  capacity: number;
  googleMaps: string;
};

export type Event = {
  id: number;
  type: 'Summer' | 'Easter';
  venue: Venue;
  dateFrom: Date;
  dateTo: Date;
  signups: number;
  galleryThumbnail: string;
  gallery: string[];
};

export enum Pages {
  Home = 'Home',
  Events = 'Events',
  Gallery = 'Gallery',
  History = 'History',
  Faq = 'FAQ',
  Contact = 'Contact',
}

export enum Socials {
  facebook = 'Facebook',
  instagram = 'Instagram',
  x = 'X',
  youtube = 'YouTube',
  discord = 'Discord',
  steam = 'Steam',
}

export enum SocialLinks {
  facebook = 'https://www.facebook.com/shinylanuk/',
  instagram = 'https://www.instagram.com/shinylanuk/',
  x = 'https://x.com/ShinyLAN',
  youtube = 'https://www.youtube.com/@shinylan9585',
  discord = 'https://discord.com/invite/gkTjvXHWgG',
  steam = 'https://steamcommunity.com/groups/shinylan',
}
