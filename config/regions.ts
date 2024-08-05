interface Region {
    id: number;
    city: string;
    name: string;
    flag: string;
    point: [number, number];
}

export const regions: Region[] = [
    {
        id: 1,
        city: 'Mumbai',
        name: 'India',
        flag: 'IN',
        point: [71, 46],
    },
    {
        id: 2,
        city: 'Singapore',
        name: 'Asia Pacific',
        flag: 'SG',
        point: [81.6, 58],
    },
    {
        id: 3,
        city: 'Hong Kong',
        name: 'Asia Pacific',
        flag: 'HK',
        point: [84.6, 41.7],
    },
    {
        id: 4,
        city: 'Tokyo',
        name: 'Asia Pacific',
        flag: 'JP',
        point: [91.7, 28.6],
    },
    {
        id: 5,
        city: 'Sydney',
        name: 'Asia Pacific',
        flag: 'AU',
        point: [96.6, 88],
    },
    {
        id: 6,
        city: 'Dubai',
        name: 'Middle East',
        flag: 'AE',
        point: [64, 42],
    },
    {
        id: 7,
        city: 'London',
        name: 'Europe',
        flag: 'GB',
        point: [44.5, 21.9],
    },
    {
        id: 8,
        city: 'Frankfurt',
        name: 'Europe',
        flag: 'DE',
        point: [47.8, 23.1],
    },
    {
        id: 9,
        city: 'Stockholm',
        name: 'Europe',
        flag: 'SE',
        point: [49.7, 14.5],
    },
    {
        id: 10,
        city: 'Ohio',
        name: 'North America',
        flag: 'US',
        point: [16, 32],
    },
    {
        id: 11,
        city: 'California',
        name: 'North America',
        flag: 'US',
        point: [4.7, 28],
    },
    {
        id: 12,
        city: 'São Paulo',
        name: 'South America',
        flag: 'BR',
        point: [28.5, 76.2],
    },
];
