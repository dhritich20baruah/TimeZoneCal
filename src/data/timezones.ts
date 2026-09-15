export interface TimezoneInfo {
  slug: string;
  code: string;
  name: string;
  iana: string;
  offsetHours: number; // approximate standard offset from UTC
  offsetString: string;
  region: 'Americas' | 'Europe' | 'Asia-Pacific' | 'Middle East & Africa' | 'UTC';
  popularCities: string[];
  description: string;
}

export const TIMEZONES: TimezoneInfo[] = [
  {
    slug: 'est',
    code: 'EST',
    name: 'Eastern Standard Time',
    iana: 'America/New_York',
    offsetHours: -5,
    offsetString: 'UTC-5',
    region: 'Americas',
    popularCities: ['New York', 'Miami', 'Atlanta', 'Toronto', 'Boston', 'Washington D.C.'],
    description: 'Eastern Standard Time (EST) is 5 hours behind UTC. It covers the eastern coastline of the United States, Eastern Canada, and parts of the Caribbean.'
  },
  {
    slug: 'edt',
    code: 'EDT',
    name: 'Eastern Daylight Time',
    iana: 'America/New_York',
    offsetHours: -4,
    offsetString: 'UTC-4',
    region: 'Americas',
    popularCities: ['New York', 'Toronto', 'Philadelphia', 'Miami', 'Montreal'],
    description: 'Eastern Daylight Time (EDT) is observed during daylight saving months in the Eastern Time Zone, 4 hours behind UTC.'
  },
  {
    slug: 'cst',
    code: 'CST',
    name: 'Central Standard Time',
    iana: 'America/Chicago',
    offsetHours: -6,
    offsetString: 'UTC-6',
    region: 'Americas',
    popularCities: ['Chicago', 'Dallas', 'Houston', 'Austin', 'Mexico City', 'Winnipeg'],
    description: 'Central Standard Time (CST) is 6 hours behind UTC, covering the central United States, central Canada, and Mexico.'
  },
  {
    slug: 'cdt',
    code: 'CDT',
    name: 'Central Daylight Time',
    iana: 'America/Chicago',
    offsetHours: -5,
    offsetString: 'UTC-5',
    region: 'Americas',
    popularCities: ['Chicago', 'Dallas', 'Houston', 'Minneapolis', 'Nashville'],
    description: 'Central Daylight Time (CDT) is observed during daylight saving periods in the Central Time Zone, 5 hours behind UTC.'
  },
  {
    slug: 'mst',
    code: 'MST',
    name: 'Mountain Standard Time',
    iana: 'America/Denver',
    offsetHours: -7,
    offsetString: 'UTC-7',
    region: 'Americas',
    popularCities: ['Denver', 'Phoenix', 'Salt Lake City', 'Calgary', 'Edmonton'],
    description: 'Mountain Standard Time (MST) is 7 hours behind UTC, covering the Rocky Mountain region of North America.'
  },
  {
    slug: 'mdt',
    code: 'MDT',
    name: 'Mountain Daylight Time',
    iana: 'America/Denver',
    offsetHours: -6,
    offsetString: 'UTC-6',
    region: 'Americas',
    popularCities: ['Denver', 'Salt Lake City', 'Albuquerque', 'Calgary'],
    description: 'Mountain Daylight Time (MDT) is observed during summer in the Mountain timezone, 6 hours behind UTC.'
  },
  {
    slug: 'pst',
    code: 'PST',
    name: 'Pacific Standard Time',
    iana: 'America/Los_Angeles',
    offsetHours: -8,
    offsetString: 'UTC-8',
    region: 'Americas',
    popularCities: ['Los Angeles', 'San Francisco', 'Seattle', 'Vancouver', 'Las Vegas', 'San Diego'],
    description: 'Pacific Standard Time (PST) is 8 hours behind UTC, covering the western coast of the US and Canada.'
  },
  {
    slug: 'pdt',
    code: 'PDT',
    name: 'Pacific Daylight Time',
    iana: 'America/Los_Angeles',
    offsetHours: -7,
    offsetString: 'UTC-7',
    region: 'Americas',
    popularCities: ['Los Angeles', 'San Francisco', 'Seattle', 'Vancouver', 'Portland'],
    description: 'Pacific Daylight Time (PDT) is observed during daylight saving time across the Pacific coast, 7 hours behind UTC.'
  },
  {
    slug: 'akst',
    code: 'AKST',
    name: 'Alaska Standard Time',
    iana: 'America/Anchorage',
    offsetHours: -9,
    offsetString: 'UTC-9',
    region: 'Americas',
    popularCities: ['Anchorage', 'Fairbanks', 'Juneau'],
    description: 'Alaska Standard Time is 9 hours behind UTC, covering nearly all of the state of Alaska.'
  },
  {
    slug: 'hst',
    code: 'HST',
    name: 'Hawaii Standard Time',
    iana: 'Pacific/Honolulu',
    offsetHours: -10,
    offsetString: 'UTC-10',
    region: 'Americas',
    popularCities: ['Honolulu', 'Maui', 'Hilo', 'Kailua'],
    description: 'Hawaii Standard Time is 10 hours behind UTC. Hawaii does not observe Daylight Saving Time.'
  },
  {
    slug: 'brt',
    code: 'BRT',
    name: 'Brasilia Time',
    iana: 'America/Sao_Paulo',
    offsetHours: -3,
    offsetString: 'UTC-3',
    region: 'Americas',
    popularCities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
    description: 'Brasilia Time is 3 hours behind UTC, covering the major population centers of Brazil.'
  },
  {
    slug: 'art',
    code: 'ART',
    name: 'Argentina Time',
    iana: 'America/Argentina/Buenos_Aires',
    offsetHours: -3,
    offsetString: 'UTC-3',
    region: 'Americas',
    popularCities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    description: 'Argentina Time is 3 hours behind UTC, observed across the entire country of Argentina.'
  },
  {
    slug: 'gmt',
    code: 'GMT',
    name: 'Greenwich Mean Time',
    iana: 'Etc/GMT',
    offsetHours: 0,
    offsetString: 'UTC+0',
    region: 'Europe',
    popularCities: ['London', 'Dublin', 'Lisbon', 'Accra', 'Reykjavik'],
    description: 'Greenwich Mean Time (GMT) is the baseline time zone located at the Royal Observatory in Greenwich, London (UTC±0).'
  },
  {
    slug: 'utc',
    code: 'UTC',
    name: 'Coordinated Universal Time',
    iana: 'UTC',
    offsetHours: 0,
    offsetString: 'UTC±0',
    region: 'UTC',
    popularCities: ['Global Reference', 'International Space Station', 'Aviation Baseline'],
    description: 'Coordinated Universal Time (UTC) is the primary time standard by which the world regulates clocks and time.'
  },
  {
    slug: 'bst',
    code: 'BST',
    name: 'British Summer Time',
    iana: 'Europe/London',
    offsetHours: 1,
    offsetString: 'UTC+1',
    region: 'Europe',
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Glasgow'],
    description: 'British Summer Time (BST) is the daylight saving time observed in the United Kingdom, 1 hour ahead of UTC/GMT.'
  },
  {
    slug: 'cet',
    code: 'CET',
    name: 'Central European Time',
    iana: 'Europe/Paris',
    offsetHours: 1,
    offsetString: 'UTC+1',
    region: 'Europe',
    popularCities: ['Paris', 'Berlin', 'Rome', 'Madrid', 'Amsterdam', 'Vienna', 'Zurich', 'Warsaw'],
    description: 'Central European Time (CET) is 1 hour ahead of UTC, observed across most of central and western mainland Europe.'
  },
  {
    slug: 'cest',
    code: 'CEST',
    name: 'Central European Summer Time',
    iana: 'Europe/Paris',
    offsetHours: 2,
    offsetString: 'UTC+2',
    region: 'Europe',
    popularCities: ['Paris', 'Berlin', 'Rome', 'Madrid', 'Amsterdam', 'Brussels', 'Stockholm'],
    description: 'Central European Summer Time (CEST) is observed during daylight saving months in Central Europe, 2 hours ahead of UTC.'
  },
  {
    slug: 'eet',
    code: 'EET',
    name: 'Eastern European Time',
    iana: 'Europe/Athens',
    offsetHours: 2,
    offsetString: 'UTC+2',
    region: 'Europe',
    popularCities: ['Athens', 'Helsinki', 'Bucharest', 'Kyiv', 'Sofia', 'Cairo'],
    description: 'Eastern European Time (EET) is 2 hours ahead of UTC, covering eastern parts of Europe and parts of North Africa.'
  },
  {
    slug: 'eest',
    code: 'EEST',
    name: 'Eastern European Summer Time',
    iana: 'Europe/Athens',
    offsetHours: 3,
    offsetString: 'UTC+3',
    region: 'Europe',
    popularCities: ['Athens', 'Helsinki', 'Bucharest', 'Kyiv', 'Sofia'],
    description: 'Eastern European Summer Time (EEST) is observed during summer in Eastern Europe, 3 hours ahead of UTC.'
  },
  {
    slug: 'msk',
    code: 'MSK',
    name: 'Moscow Standard Time',
    iana: 'Europe/Moscow',
    offsetHours: 3,
    offsetString: 'UTC+3',
    region: 'Europe',
    popularCities: ['Moscow', 'Saint Petersburg', 'Kazan', 'Nizhny Novgorod'],
    description: 'Moscow Standard Time (MSK) is 3 hours ahead of UTC, observed in western Russia with no daylight saving shifts.'
  },
  {
    slug: 'ist',
    code: 'IST',
    name: 'Indian Standard Time',
    iana: 'Asia/Kolkata',
    offsetHours: 5.5,
    offsetString: 'UTC+5:30',
    region: 'Asia-Pacific',
    popularCities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'],
    description: 'Indian Standard Time (IST) is 5 hours and 30 minutes ahead of UTC. It is observed across all of India and Sri Lanka.'
  },
  {
    slug: 'pkt',
    code: 'PKT',
    name: 'Pakistan Standard Time',
    iana: 'Asia/Karachi',
    offsetHours: 5,
    offsetString: 'UTC+5',
    region: 'Asia-Pacific',
    popularCities: ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad'],
    description: 'Pakistan Standard Time (PKT) is 5 hours ahead of UTC, observed nationwide across Pakistan.'
  },
  {
    slug: 'bdt',
    code: 'BDT',
    name: 'Bangladesh Standard Time',
    iana: 'Asia/Dhaka',
    offsetHours: 6,
    offsetString: 'UTC+6',
    region: 'Asia-Pacific',
    popularCities: ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet'],
    description: 'Bangladesh Standard Time is 6 hours ahead of UTC, observed across Bangladesh.'
  },
  {
    slug: 'npt',
    code: 'NPT',
    name: 'Nepal Time',
    iana: 'Asia/Kathmandu',
    offsetHours: 5.75,
    offsetString: 'UTC+5:45',
    region: 'Asia-Pacific',
    popularCities: ['Kathmandu', 'Pokhara', 'Lalitpur'],
    description: 'Nepal Time is 5 hours and 45 minutes ahead of UTC, one of the few 45-minute offset time zones in the world.'
  },
  {
    slug: 'ict',
    code: 'ICT',
    name: 'Indochina Time',
    iana: 'Asia/Bangkok',
    offsetHours: 7,
    offsetString: 'UTC+7',
    region: 'Asia-Pacific',
    popularCities: ['Bangkok', 'Ho Chi Minh City', 'Hanoi', 'Jakarta', 'Phnom Penh'],
    description: 'Indochina Time (ICT) is 7 hours ahead of UTC, observed across Thailand, Vietnam, Cambodia, Laos, and Western Indonesia.'
  },
  {
    slug: 'sgt',
    code: 'SGT',
    name: 'Singapore Time',
    iana: 'Asia/Singapore',
    offsetHours: 8,
    offsetString: 'UTC+8',
    region: 'Asia-Pacific',
    popularCities: ['Singapore', 'Kuala Lumpur', 'Manila', 'Perth', 'Taipei'],
    description: 'Singapore Time (SGT) is 8 hours ahead of UTC, sharing the UTC+8 offset with major hubs across Southeast Asia.'
  },
  {
    slug: 'hkt',
    code: 'HKT',
    name: 'Hong Kong Time',
    iana: 'Asia/Hong_Kong',
    offsetHours: 8,
    offsetString: 'UTC+8',
    region: 'Asia-Pacific',
    popularCities: ['Hong Kong', 'Kowloon', 'Macau'],
    description: 'Hong Kong Time (HKT) is 8 hours ahead of UTC, standard throughout the Hong Kong Special Administrative Region.'
  },
  {
    slug: 'jst',
    code: 'JST',
    name: 'Japan Standard Time',
    iana: 'Asia/Tokyo',
    offsetHours: 9,
    offsetString: 'UTC+9',
    region: 'Asia-Pacific',
    popularCities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Fukuoka'],
    description: 'Japan Standard Time (JST) is 9 hours ahead of UTC, observed across Japan without daylight saving time.'
  },
  {
    slug: 'kst',
    code: 'KST',
    name: 'Korea Standard Time',
    iana: 'Asia/Seoul',
    offsetHours: 9,
    offsetString: 'UTC+9',
    region: 'Asia-Pacific',
    popularCities: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
    description: 'Korea Standard Time (KST) is 9 hours ahead of UTC, observed across South Korea.'
  },
  {
    slug: 'aest',
    code: 'AEST',
    name: 'Australian Eastern Standard Time',
    iana: 'Australia/Sydney',
    offsetHours: 10,
    offsetString: 'UTC+10',
    region: 'Asia-Pacific',
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra', 'Gold Coast'],
    description: 'Australian Eastern Standard Time (AEST) is 10 hours ahead of UTC, covering Queensland, NSW, Victoria, and Tasmania.'
  },
  {
    slug: 'aedt',
    code: 'AEDT',
    name: 'Australian Eastern Daylight Time',
    iana: 'Australia/Sydney',
    offsetHours: 11,
    offsetString: 'UTC+11',
    region: 'Asia-Pacific',
    popularCities: ['Sydney', 'Melbourne', 'Canberra', 'Hobart'],
    description: 'Australian Eastern Daylight Time (AEDT) is observed during southern hemisphere summer in NSW, Victoria, and Tasmania.'
  },
  {
    slug: 'acst',
    code: 'ACST',
    name: 'Australian Central Standard Time',
    iana: 'Australia/Adelaide',
    offsetHours: 9.5,
    offsetString: 'UTC+9:30',
    region: 'Asia-Pacific',
    popularCities: ['Adelaide', 'Darwin', 'Alice Springs'],
    description: 'Australian Central Standard Time is 9 hours and 30 minutes ahead of UTC, covering South Australia and the Northern Territory.'
  },
  {
    slug: 'nzst',
    code: 'NZST',
    name: 'New Zealand Standard Time',
    iana: 'Pacific/Auckland',
    offsetHours: 12,
    offsetString: 'UTC+12',
    region: 'Asia-Pacific',
    popularCities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    description: 'New Zealand Standard Time (NZST) is 12 hours ahead of UTC, observed in New Zealand during standard winter months.'
  },
  {
    slug: 'nzdt',
    code: 'NZDT',
    name: 'New Zealand Daylight Time',
    iana: 'Pacific/Auckland',
    offsetHours: 13,
    offsetString: 'UTC+13',
    region: 'Asia-Pacific',
    popularCities: ['Auckland', 'Wellington', 'Christchurch', 'Queenstown'],
    description: 'New Zealand Daylight Time (NZDT) is 13 hours ahead of UTC, observed during daylight saving time in New Zealand.'
  },
  {
    slug: 'gst',
    code: 'GST',
    name: 'Gulf Standard Time',
    iana: 'Asia/Dubai',
    offsetHours: 4,
    offsetString: 'UTC+4',
    region: 'Middle East & Africa',
    popularCities: ['Dubai', 'Abu Dhabi', 'Muscat', 'Sharjah'],
    description: 'Gulf Standard Time (GST) is 4 hours ahead of UTC, observed across the United Arab Emirates and Oman.'
  },
  {
    slug: 'ast_arabia',
    code: 'AST',
    name: 'Arabia Standard Time',
    iana: 'Asia/Riyadh',
    offsetHours: 3,
    offsetString: 'UTC+3',
    region: 'Middle East & Africa',
    popularCities: ['Riyadh', 'Jeddah', 'Doha', 'Kuwait City', 'Manama', 'Baghdad'],
    description: 'Arabia Standard Time (AST) is 3 hours ahead of UTC, observed in Saudi Arabia, Qatar, Kuwait, Bahrain, and Iraq.'
  },
  {
    slug: 'sast',
    code: 'SAST',
    name: 'South Africa Standard Time',
    iana: 'Africa/Johannesburg',
    offsetHours: 2,
    offsetString: 'UTC+2',
    region: 'Middle East & Africa',
    popularCities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'],
    description: 'South Africa Standard Time (SAST) is 2 hours ahead of UTC, observed throughout South Africa.'
  },
  {
    slug: 'eat',
    code: 'EAT',
    name: 'East Africa Time',
    iana: 'Africa/Nairobi',
    offsetHours: 3,
    offsetString: 'UTC+3',
    region: 'Middle East & Africa',
    popularCities: ['Nairobi', 'Addis Ababa', 'Dar es Salaam', 'Kampala'],
    description: 'East Africa Time (EAT) is 3 hours ahead of UTC, observed across Eastern Africa.'
  },
  {
    slug: 'wat',
    code: 'WAT',
    name: 'West Africa Time',
    iana: 'Africa/Lagos',
    offsetHours: 1,
    offsetString: 'UTC+1',
    region: 'Middle East & Africa',
    popularCities: ['Lagos', 'Kinshasa', 'Luanda', 'Douala', 'Algiers'],
    description: 'West Africa Time (WAT) is 1 hour ahead of UTC, observed across west-central Africa.'
  }
];

export function getTimezoneBySlug(slug: string): TimezoneInfo | undefined {
  return TIMEZONES.find(t => t.slug.toLowerCase() === slug.toLowerCase());
}

export interface ConversionPairStaticPath {
  params: {
    from: string;
    to: string;
  };
  props: {
    fromTz: TimezoneInfo;
    toTz: TimezoneInfo;
  };
}

// Popular primary zones that drive 95%+ of search volume
export const PRIMARY_TIMEZONE_SLUGS = [
  'est', 'edt', 'cst', 'cdt', 'mst', 'pst', 'pdt', 
  'gmt', 'utc', 'bst', 'cet', 'cest', 'ist', 
  'jst', 'sgt', 'hkt', 'aest', 'aedt', 'nzst', 'gst', 'brt', 'sast'
];

export function getAllTimezonePairs(): ConversionPairStaticPath[] {
  const paths: ConversionPairStaticPath[] = [];

  for (const fromSlug of PRIMARY_TIMEZONE_SLUGS) {
    const fromTz = getTimezoneBySlug(fromSlug);
    if (!fromTz) continue;

    for (const toTz of TIMEZONES) {
      if (fromTz.slug === toTz.slug) continue;

      paths.push({
        params: {
          from: fromTz.slug,
          to: toTz.slug
        },
        props: {
          fromTz,
          toTz
        }
      });
    }
  }

  return paths;
}

export function formatTime12(h: number, m: number = 0): string {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
}

export function formatTime24(h: number, m: number = 0): string {
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export interface HourConversionRow {
  fromHour: number;
  fromTime12: string;
  fromTime24: string;
  toHour: number;
  toMins: number;
  toTime12: string;
  toTime24: string;
  dayShift: string; // "+1 day", "-1 day", or ""
  fromStatus: 'work' | 'awake' | 'sleep';
  toStatus: 'work' | 'awake' | 'sleep';
  isGoldenOverlap: boolean;
}

export function generate24HourTable(fromTz: TimezoneInfo, toTz: TimezoneInfo, refDate: Date = new Date()): HourConversionRow[] {
  const rows: HourConversionRow[] = [];

  const year = refDate.getFullYear();
  const month = refDate.getMonth();
  const day = refDate.getDate();

  for (let h = 0; h < 24; h++) {
    const fromWallDate = new Date(Date.UTC(year, month, day, h, 0, 0));

    const getOffsetMins = (tzIana: string, d: Date) => {
      const utc = new Date(d.toLocaleString('en-US', { timeZone: 'UTC' }));
      const loc = new Date(d.toLocaleString('en-US', { timeZone: tzIana }));
      return (loc.getTime() - utc.getTime()) / 60000;
    };

    const fromOffsetMins = getOffsetMins(fromTz.iana, fromWallDate);
    const toOffsetMins = getOffsetMins(toTz.iana, fromWallDate);
    const diffMins = toOffsetMins - fromOffsetMins;

    const totalTargetMins = h * 60 + diffMins;
    const normalizedTargetMins = ((totalTargetMins % 1440) + 1440) % 1440;
    const toHour = Math.floor(normalizedTargetMins / 60);
    const toMins = Math.floor(normalizedTargetMins % 60);

    let dayShift = '';
    if (totalTargetMins >= 1440) {
      dayShift = '+1 day';
    } else if (totalTargetMins < 0) {
      dayShift = '-1 day';
    }

    const getStatus = (hour: number): 'work' | 'awake' | 'sleep' => {
      if (hour >= 9 && hour < 17) return 'work';
      if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 21)) return 'awake';
      return 'sleep';
    };

    const fromStatus = getStatus(h);
    const toStatus = getStatus(toHour);
    const isGoldenOverlap = fromStatus === 'work' && toStatus === 'work';

    rows.push({
      fromHour: h,
      fromTime12: formatTime12(h, 0),
      fromTime24: formatTime24(h, 0),
      toHour,
      toMins,
      toTime12: formatTime12(toHour, toMins),
      toTime24: formatTime24(toHour, toMins),
      dayShift,
      fromStatus,
      toStatus,
      isGoldenOverlap
    });
  }

  return rows;
}
