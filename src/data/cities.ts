export interface CityInfo {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  tz: string;
  standardOffset: string;
  region: 'North America' | 'Europe' | 'Asia' | 'Oceania' | 'Latin America' | 'Middle East & Africa';
  tagline: string;
  popularSpots: string[];
  businessHoursText: string;
}

export const CITIES: CityInfo[] = [
  {
    slug: 'london',
    name: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    tz: 'Europe/London',
    standardOffset: 'UTC+0 / BST UTC+1',
    region: 'Europe',
    tagline: 'Global financial hub and prime meridian reference point',
    popularSpots: ['City of London', 'Canary Wharf', 'Westminster', 'Soho'],
    businessHoursText: '09:00 to 17:00 GMT/BST'
  },
  {
    slug: 'new-york',
    name: 'New York',
    country: 'United States',
    countryCode: 'US',
    tz: 'America/New_York',
    standardOffset: 'UTC-5 / EDT UTC-4',
    region: 'North America',
    tagline: 'World commerce and media center on Eastern Time',
    popularSpots: ['Manhattan', 'Wall Street', 'Brooklyn', 'Silicon Alley'],
    businessHoursText: '09:00 to 17:00 EST/EDT'
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    tz: 'Asia/Tokyo',
    standardOffset: 'UTC+9 (No DST)',
    region: 'Asia',
    tagline: 'Megacity innovation capital and East Asia financial center',
    popularSpots: ['Shibuya', 'Marunouchi', 'Shinjuku', 'Roppongi'],
    businessHoursText: '09:00 to 18:00 JST'
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    country: 'United States',
    countryCode: 'US',
    tz: 'America/Los_Angeles',
    standardOffset: 'UTC-8 / PDT UTC-7',
    region: 'North America',
    tagline: 'Silicon Valley tech core on Pacific Time',
    popularSpots: ['SoMa', 'Financial District', 'Palo Alto', 'Mountain View'],
    businessHoursText: '09:00 to 17:00 PST/PDT'
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    country: 'United States',
    countryCode: 'US',
    tz: 'America/Los_Angeles',
    standardOffset: 'UTC-8 / PDT UTC-7',
    region: 'North America',
    tagline: 'Global creative and entertainment capital',
    popularSpots: ['Silicon Beach', 'Downtown LA', 'Century City', 'Hollywood'],
    businessHoursText: '09:00 to 17:00 PST/PDT'
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    country: 'United States',
    countryCode: 'US',
    tz: 'America/Chicago',
    standardOffset: 'UTC-6 / CDT UTC-5',
    region: 'North America',
    tagline: 'Midwest financial powerhouse on Central Time',
    popularSpots: ['The Loop', 'Fulton Market', 'River North'],
    businessHoursText: '09:00 to 17:00 CST/CDT'
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    countryCode: 'FR',
    tz: 'Europe/Paris',
    standardOffset: 'UTC+1 / CEST UTC+2',
    region: 'Europe',
    tagline: 'European cultural and enterprise center on CET/CEST',
    popularSpots: ['La Défense', 'Opéra', 'Le Marais', 'Station F'],
    businessHoursText: '09:00 to 18:00 CET/CEST'
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    tz: 'Europe/Berlin',
    standardOffset: 'UTC+1 / CEST UTC+2',
    region: 'Europe',
    tagline: 'Vibrant tech ecosystem and Germany’s political capital',
    popularSpots: ['Mitte', 'Kreuzberg', 'Charlottenburg', 'Potsdamer Platz'],
    businessHoursText: '09:00 to 17:30 CET/CEST'
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    tz: 'Asia/Dubai',
    standardOffset: 'UTC+4 (No DST)',
    region: 'Middle East & Africa',
    tagline: 'Middle East business crossroads bridging East & West',
    popularSpots: ['DIFC', 'Downtown Dubai', 'Business Bay', 'Dubai Internet City'],
    businessHoursText: '08:30 to 17:30 GST (Mon-Fri)'
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    countryCode: 'IN',
    tz: 'Asia/Kolkata',
    standardOffset: 'UTC+5:30 (No DST)',
    region: 'Asia',
    tagline: 'Financial engine of South Asia operating on IST',
    popularSpots: ['Bandra Kurla Complex (BKC)', 'Nariman Point', 'Andheri East'],
    businessHoursText: '09:30 to 18:30 IST'
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    tz: 'Asia/Singapore',
    standardOffset: 'UTC+8 (No DST)',
    region: 'Asia',
    tagline: 'Southeast Asia’s leading international trade & finance hub',
    popularSpots: ['Marina Bay', 'Raffles Place', 'One-North', 'Jurong East'],
    businessHoursText: '09:00 to 18:00 SGT'
  },
  {
    slug: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    tz: 'Australia/Sydney',
    standardOffset: 'UTC+10 / AEDT UTC+11',
    region: 'Oceania',
    tagline: 'Gateway to the Asia-Pacific on AEST/AEDT',
    popularSpots: ['Sydney CBD', 'Barangaroo', 'North Sydney', 'Surry Hills'],
    businessHoursText: '09:00 to 17:00 AEST/AEDT'
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    tz: 'America/Toronto',
    standardOffset: 'UTC-5 / EDT UTC-4',
    region: 'North America',
    tagline: 'Canada’s commercial capital and fast-growing tech corridor',
    popularSpots: ['Financial District', 'Liberty Village', 'Downtown Yonge'],
    businessHoursText: '09:00 to 17:00 EST/EDT'
  },
  {
    slug: 'hong-kong',
    name: 'Hong Kong',
    country: 'Hong Kong',
    countryCode: 'HK',
    tz: 'Asia/Hong_Kong',
    standardOffset: 'UTC+8 (No DST)',
    region: 'Asia',
    tagline: 'Global international banking hub and port city',
    popularSpots: ['Central', 'Admiralty', 'Quarry Bay', 'Cyberport'],
    businessHoursText: '09:00 to 18:00 HKT'
  },
  {
    slug: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    countryCode: 'KR',
    tz: 'Asia/Seoul',
    standardOffset: 'UTC+9 (No DST)',
    region: 'Asia',
    tagline: 'World-leading electronics and digital technology metropolis',
    popularSpots: ['Gangnam', 'Yeouido', 'Gwanghwamun', 'Pangyo Techno Valley'],
    businessHoursText: '09:00 to 18:00 KST'
  },
  {
    slug: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    countryCode: 'TH',
    tz: 'Asia/Bangkok',
    standardOffset: 'UTC+7 (No DST)',
    region: 'Asia',
    tagline: 'Southeast Asian regional hub and digital nomad capital',
    popularSpots: ['Silom', 'Sathorn', 'Sukhumvit', 'Rama 9'],
    businessHoursText: '08:30 to 17:30 ICT'
  },
  {
    slug: 'auckland',
    name: 'Auckland',
    country: 'New Zealand',
    countryCode: 'NZ',
    tz: 'Pacific/Auckland',
    standardOffset: 'UTC+12 / NZDT UTC+13',
    region: 'Oceania',
    tagline: 'First major global city to greet each new calendar day',
    popularSpots: ['Auckland CBD', 'Wynyard Quarter', 'Britomart', 'Takapuna'],
    businessHoursText: '08:30 to 17:00 NZST/NZDT'
  },
  {
    slug: 'sao-paulo',
    name: 'São Paulo',
    country: 'Brazil',
    countryCode: 'BR',
    tz: 'America/Sao_Paulo',
    standardOffset: 'UTC-3 (No DST)',
    region: 'Latin America',
    tagline: 'Largest economic center in the southern hemisphere',
    popularSpots: ['Avenida Paulista', 'Faria Lima', 'Itaim Bibi', 'Berrini'],
    businessHoursText: '09:00 to 18:00 BRT'
  },
  {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    tz: 'America/Argentina/Buenos_Aires',
    standardOffset: 'UTC-3 (No DST)',
    region: 'Latin America',
    tagline: 'Cultural and technology center of the Southern Cone',
    popularSpots: ['Puerto Madero', 'Palermo', 'Microcentro', 'Retiro'],
    businessHoursText: '09:00 to 18:00 ART'
  },
  {
    slug: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    countryCode: 'EG',
    tz: 'Africa/Cairo',
    standardOffset: 'UTC+2 / EEST UTC+3',
    region: 'Middle East & Africa',
    tagline: 'Historic crossroads of Africa and the Middle East',
    popularSpots: ['New Cairo', 'Smart Village', 'Zamalek', 'Maadi'],
    businessHoursText: '09:00 to 17:00 (Sun-Thu)'
  },
  {
    slug: 'johannesburg',
    name: 'Johannesburg',
    country: 'South Africa',
    countryCode: 'ZA',
    tz: 'Africa/Johannesburg',
    standardOffset: 'UTC+2 (No DST)',
    region: 'Middle East & Africa',
    tagline: 'Commercial and mining financial hub of Sub-Saharan Africa',
    popularSpots: ['Sandton', 'Rosebank', 'Melrose Arch', 'CBD'],
    businessHoursText: '08:30 to 17:00 SAST'
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    tz: 'Europe/Amsterdam',
    standardOffset: 'UTC+1 / CEST UTC+2',
    region: 'Europe',
    tagline: 'Major European internet exchange and fintech center',
    popularSpots: ['Zuidas', 'Centrum', 'Oost', 'Amstel Business Park'],
    businessHoursText: '09:00 to 17:30 CET/CEST'
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    country: 'India',
    countryCode: 'IN',
    tz: 'Asia/Kolkata',
    standardOffset: 'UTC+5:30 (No DST)',
    region: 'Asia',
    tagline: 'National capital region and enterprise center of North India',
    popularSpots: ['Connaught Place', 'Gurgaon Cyber City', 'Noida Tech Zone'],
    businessHoursText: '09:30 to 18:30 IST'
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    countryCode: 'AU',
    tz: 'Australia/Melbourne',
    standardOffset: 'UTC+10 / AEDT UTC+11',
    region: 'Oceania',
    tagline: 'Australia’s cultural, biotech, and arts powerhouse',
    popularSpots: ['Melbourne CBD', 'Docklands', 'Southbank', 'Richmond'],
    businessHoursText: '09:00 to 17:00 AEST/AEDT'
  }
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

export interface CityPairStaticPath {
  params: {
    city1: string;
    city2: string;
  };
  props: {
    city1: CityInfo;
    city2: CityInfo;
  };
}

// Top cities driving the highest pairwise search volumes
export const PRIMARY_CITY_SLUGS = [
  'london', 'new-york', 'tokyo', 'san-francisco', 
  'los-angeles', 'paris', 'berlin', 'dubai', 
  'mumbai', 'singapore', 'sydney', 'toronto', 
  'chicago', 'hong-kong', 'seoul', 'bangkok'
];

export function getAllCityPairs(): CityPairStaticPath[] {
  const paths: CityPairStaticPath[] = [];

  for (const slug1 of PRIMARY_CITY_SLUGS) {
    const city1 = getCityBySlug(slug1);
    if (!city1) continue;

    for (const city2 of CITIES) {
      if (city1.slug === city2.slug) continue;

      paths.push({
        params: {
          city1: city1.slug,
          city2: city2.slug
        },
        props: {
          city1,
          city2
        }
      });
    }
  }

  return paths;
}
