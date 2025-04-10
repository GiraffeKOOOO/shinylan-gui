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
  finished: boolean;
};

export type Staff = {
  userName: string;
  description: string;
  imageUrl: string;
};

export enum Ticket {
  FullEvent = 'Full Event',
  FullEventSpectator = 'Full Event Spectator',
  TwoDayPass = '2 Day Pass',
  TwoDayPassSpectator = '2 Day Pass Spectator',
}

export enum Merchandise {
  ZipUpHoodie = 'Zip Up Hoodie',
  PullOverHoodie = 'Pull Over Hoodie',
}

export enum EventAddon {
  Breakfast = 'Breakfast',
  Dinner = 'Dinner',
}

export type Item = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  type: Ticket | Merchandise | EventAddon;
};

export enum OrderStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
  Refunded = 'Refunded',
}

export type Order = {
  id: number;
  orderCreatedDate: Date;
  orderCompletedDate: Date | null;
  items: Item[];
  orderTotal: number;
  orderedByUserId: number;
  status: OrderStatus;
};

export enum UserSocialPlatforms {
  discord = 'Discord',
  steam = 'Steam',
}

export type DiscordSocial = {
  type: UserSocialPlatforms.discord;
  value: string;
};

export type SteamSocial = {
  type: UserSocialPlatforms.steam;
  value: string;
};

export type UserSocials = {
  discord: DiscordSocial | null;
  steam: SteamSocial | null;
};

export type User = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsLetter: boolean;
  createdAt: Date;
  phoneNumber?: string;
  orderHistory: Order[];
  eventHistory: Event[];
  socials: UserSocials;
};

export enum Pages {
  Home = 'Home',
  Events = 'Events',
  Gallery = 'Gallery',
  About = 'About',
  Faq = 'FAQ',
  Contact = 'Contact',
  // setting pages
  Profile = 'Profile',
  OrderHistory = 'Order History',
  LogOut = 'Log Out',
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
