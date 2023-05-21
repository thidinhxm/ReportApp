import { Report } from "../@type/common";

export const testImageURL = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80';

export const reports : Report[] = [
  {
    name: 'Report #001',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01'),
  },
  {
    name: 'Report #002',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01')
  },
  {
    name: 'Report #003',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('01-01-2023')
  },
  {
    name: 'Report #004',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01')
  },
];

export const countries = ['Vietnam', 'Lao', 'Cambodia', 'Philippine', 'Singapore'];
export const factories = ['Factory HCM', 'Factory DN', 'Factory HN', 'Factory NA'];