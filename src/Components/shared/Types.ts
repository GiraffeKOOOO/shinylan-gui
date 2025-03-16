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
  attendees: number;
};
