import { University } from '../App';

export function getUniversities(): University[] {
  return [
    // United States Universities
    {
      id: '1',
      name: 'Harvard University',
      country: 'United States',
      ranking: 1,
      minGPA: 3.9,
      tuitionRange: '$50,000 - $70,000',
      fields: ['Law', 'Business Administration', 'Medicine', 'Computer Science', 'Arts & Humanities', 'Social Sciences'],
      acceptanceRate: 3.4,
      image: 'https://images.unsplash.com/photo-1622397333309-3056849bc70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2YXJkJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3Njk1MzQ2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Prestigious Ivy League institution with world-class programs across all disciplines.'
    },
    {
      id: '2',
      name: 'MIT',
      country: 'United States',
      ranking: 2,
      minGPA: 3.9,
      tuitionRange: '$50,000 - $70,000',
      fields: ['Computer Science', 'Engineering', 'Natural Sciences', 'Architecture'],
      acceptanceRate: 4.1,
      image: 'https://images.unsplash.com/photo-1574893267830-a6989eac05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXQlMjB0ZWNobm9sb2d5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NTcyMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Leading technology and research university known for innovation and scientific excellence.'
    },
    {
      id: '3',
      name: 'Stanford University',
      country: 'United States',
      ranking: 3,
      minGPA: 3.8,
      tuitionRange: '$50,000 - $70,000',
      fields: ['Computer Science', 'Engineering', 'Business Administration', 'Medicine', 'Social Sciences'],
      acceptanceRate: 3.7,
      image: 'https://images.unsplash.com/photo-1676354555185-df7a1eb39608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMGNhbXB1c3xlbnwxfHx8fDE3Njk1NzIxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Innovative university in Silicon Valley with strong entrepreneurship and technology programs.'
    },
    {
      id: '4',
      name: 'University of California, Berkeley',
      country: 'United States',
      ranking: 15,
      minGPA: 3.5,
      tuitionRange: '$30,000 - $50,000',
      fields: ['Computer Science', 'Engineering', 'Natural Sciences', 'Business Administration', 'Social Sciences'],
      acceptanceRate: 14.5,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Top public university with excellent research facilities and diverse academic programs.'
    },
    {
      id: '20',
      name: 'University of Texas at Austin',
      country: 'United States',
      ranking: 38,
      minGPA: 3.3,
      tuitionRange: '$25,000 - $50,000',
      fields: ['Computer Science', 'Engineering', 'Business Administration', 'Natural Sciences'],
      acceptanceRate: 31.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Large public research university with strong programs and vibrant student life.'
    },

    // United Kingdom Universities
    {
      id: '5',
      name: 'University of Oxford',
      country: 'United Kingdom',
      ranking: 4,
      minGPA: 3.8,
      tuitionRange: '$30,000 - $50,000',
      fields: ['Law', 'Medicine', 'Arts & Humanities', 'Natural Sciences', 'Social Sciences', 'Business Administration'],
      acceptanceRate: 17.5,
      image: 'https://images.unsplash.com/photo-1702238230256-f798027de7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NTcyMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Historic university with tutorial system and excellence across all academic disciplines.'
    },
    {
      id: '6',
      name: 'University of Cambridge',
      country: 'United Kingdom',
      ranking: 5,
      minGPA: 3.8,
      tuitionRange: '$30,000 - $50,000',
      fields: ['Engineering', 'Natural Sciences', 'Computer Science', 'Medicine', 'Arts & Humanities', 'Law'],
      acceptanceRate: 21.0,
      image: 'https://images.unsplash.com/photo-1623632306901-e509641e7191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1icmlkZ2UlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Prestigious collegiate university with outstanding research and academic tradition.'
    },
    {
      id: '7',
      name: 'Imperial College London',
      country: 'United Kingdom',
      ranking: 8,
      minGPA: 3.7,
      tuitionRange: '$30,000 - $50,000',
      fields: ['Engineering', 'Computer Science', 'Medicine', 'Natural Sciences'],
      acceptanceRate: 14.3,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Specialized in science, engineering, medicine and business with strong industry links.'
    },

    // Canada Universities
    {
      id: '8',
      name: 'University of Toronto',
      country: 'Canada',
      ranking: 18,
      minGPA: 3.5,
      tuitionRange: '$25,000 - $50,000',
      fields: ['Computer Science', 'Engineering', 'Medicine', 'Business Administration', 'Arts & Humanities', 'Social Sciences'],
      acceptanceRate: 43.0,
      image: 'https://images.unsplash.com/photo-1618255630366-f402c45736f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdG9yb250byUyMGNhbXB1c3xlbnwxfHx8fDE3Njk1NzIxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Canada\'s top university with comprehensive programs and diverse international community.'
    },
    {
      id: '9',
      name: 'McGill University',
      country: 'Canada',
      ranking: 27,
      minGPA: 3.4,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Medicine', 'Law', 'Engineering', 'Natural Sciences', 'Arts & Humanities'],
      acceptanceRate: 46.3,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Internationally renowned university in Montreal with bilingual environment.'
    },

    // Australia Universities
    {
      id: '10',
      name: 'University of Melbourne',
      country: 'Australia',
      ranking: 14,
      minGPA: 3.5,
      tuitionRange: '$25,000 - $50,000',
      fields: ['Medicine', 'Law', 'Business Administration', 'Engineering', 'Arts & Humanities', 'Natural Sciences'],
      acceptanceRate: 70.0,
      image: 'https://images.unsplash.com/photo-1609036567523-c804ca6b22e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWxib3VybmUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Australia\'s leading university with strong research output and global partnerships.'
    },
    {
      id: '11',
      name: 'Australian National University',
      country: 'Australia',
      ranking: 30,
      minGPA: 3.3,
      tuitionRange: '$25,000 - $50,000',
      fields: ['Natural Sciences', 'Social Sciences', 'Engineering', 'Computer Science', 'Arts & Humanities'],
      acceptanceRate: 35.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Research-intensive university in Canberra with strong government and policy connections.'
    },

    // Singapore Universities
    {
      id: '17',
      name: 'SIM Global Education',
      country: 'Singapore',
      ranking: 89,
      minGPA: 2.5,
      tuitionRange: '260,000 - 840,000 THB',
      fields: ['Business Administration', 'Computer Science', 'Engineering', 'Arts & Humanities', 'Social Sciences'],
      acceptanceRate: 70.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level (English proficiency may be required)',
      scholarships: 'Merit scholarships covering 100% or 50% of course fees for new diploma students and academic/excellence awards (e.g., S$15,000) for degree students',
      intakePeriods: ['January', 'April', 'October'],
      image: 'https://images.unsplash.com/photo-1633111126270-f50f378fde68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premier private education provider offering diverse programmes with partner universities worldwide.'
    },
    {
      id: '21',
      name: 'JCU Singapore',
      country: 'Singapore',
      ranking: 75,
      minGPA: 2.5,
      tuitionRange: '1,550,000 - 1,650,000 THB',
      fields: ['Business Administration', 'Computer Science', 'Psychology', 'Tourism', 'Environmental Science'],
      acceptanceRate: 65.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level (IELTS ≥ 6.0 mandatory)',
      scholarships: 'Merit scholarships up to S$20,000 and competitive awards for international students based on academic achievement',
      intakePeriods: ['January'],
      image: 'https://images.unsplash.com/photo-1633111126270-f50f378fde68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Australian university campus offering globally recognized degrees in tropical Singapore.'
    },
    {
      id: '30',
      name: 'Kaplan Singapore',
      country: 'Singapore',
      ranking: 84,
      minGPA: 2.5,
      tuitionRange: '280,000 - 450,000 THB',
      fields: ['Business Administration', 'Computer Science', 'Finance', 'Marketing', 'Hospitality Management'],
      acceptanceRate: 75.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, OSSD, IGCSE O Level, IGCSE A Level (English proficiency required)',
      scholarships: 'Occasional partial tuition fee discounts or promotional scholarships for international students',
      intakePeriods: ['January', 'August'],
      image: 'https://images.unsplash.com/photo-1633111126270-f50f378fde68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Established private education institution offering degrees in partnership with overseas universities.'
    },
    {
      id: '31',
      name: 'Singapore Polytechnic',
      country: 'Singapore',
      ranking: 49,
      minGPA: 2.8,
      tuitionRange: '180,000 - 260,000 THB',
      fields: ['Engineering', 'Computer Science', 'Design', 'Business Administration', 'Applied Sciences'],
      acceptanceRate: 60.0,
      admissionInfo: 'Myanmar Grade-12 certificate, IGCSE O Level, IGCSE A Level (English proficiency required)',
      scholarships: 'Limited merit-based scholarships and bursaries for international students based on academic performance',
      intakePeriods: ['January'],
      image: 'https://images.unsplash.com/photo-1633111126270-f50f378fde68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2OTU3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Leading polytechnic offering diploma and advanced diploma programmes with strong industry connections.'
    },

    // Japan Universities
    {
      id: '18',
      name: 'University of Tokyo',
      country: 'Japan',
      ranking: 23,
      minGPA: 3.4,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Engineering', 'Natural Sciences', 'Computer Science', 'Medicine', 'Arts & Humanities'],
      acceptanceRate: 35.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Japan\'s premier university with excellent research facilities and growing English programs.'
    },
    {
      id: '22',
      name: 'Kyoto University',
      country: 'Japan',
      ranking: 36,
      minGPA: 3.3,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Natural Sciences', 'Engineering', 'Medicine', 'Arts & Humanities'],
      acceptanceRate: 38.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Historic Japanese university with strong emphasis on research and academic freedom.'
    },

    // South Korea Universities
    {
      id: '19',
      name: 'Seoul National University',
      country: 'South Korea',
      ranking: 41,
      minGPA: 3.3,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Engineering', 'Computer Science', 'Business Administration', 'Natural Sciences', 'Social Sciences'],
      acceptanceRate: 20.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Top Korean university with strong technology programs and Asian business connections.'
    },
    {
      id: '23',
      name: 'KAIST',
      country: 'South Korea',
      ranking: 56,
      minGPA: 3.2,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Engineering', 'Computer Science', 'Natural Sciences'],
      acceptanceRate: 15.0,
      image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NDgwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Leading science and technology university in South Korea with cutting-edge research.'
    },

    // China Universities
    {
      id: '24',
      name: 'Tsinghua University',
      country: 'China',
      ranking: 16,
      minGPA: 3.7,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Engineering', 'Computer Science', 'Natural Sciences', 'Business Administration'],
      acceptanceRate: 2.0,
      image: 'https://images.unsplash.com/photo-1691758070204-d684a5187d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWtpbmclMjB1bml2ZXJzaXR5JTIwY2hpbmF8ZW58MXx8fHwxNzY5NjA4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'China\'s top university for engineering and technology with extensive international programs.'
    },
    {
      id: '25',
      name: 'Peking University',
      country: 'China',
      ranking: 17,
      minGPA: 3.7,
      tuitionRange: '$10,000 - $30,000',
      fields: ['Arts & Humanities', 'Natural Sciences', 'Social Sciences', 'Business Administration', 'Medicine'],
      acceptanceRate: 2.5,
      image: 'https://images.unsplash.com/photo-1691758070204-d684a5187d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWtpbmclMjB1bml2ZXJzaXR5JTIwY2hpbmF8ZW58MXx8fHwxNzY5NjA4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premier comprehensive university in China with strong humanities and sciences programs.'
    },

    // Thailand Universities
    {
      id: '26',
      name: 'Assumption University of Thailand',
      country: 'Thailand',
      ranking: 120,
      minGPA: 2.5,
      tuitionRange: '180,000 - 350,000 THB',
      fields: ['Business Administration', 'Computer Science', 'Engineering', 'Arts & Humanities', 'International Relations'],
      acceptanceRate: 65.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level',
      scholarships: 'Limited merit-based tuition discounts available for high-performing international students',
      intakePeriods: ['January', 'August'],
      image: 'https://images.unsplash.com/photo-1725256455511-6d91e8049dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdGhhaWxhbmQlMjBiYW5na29rfGVufDF8fHx8MTc2OTYwODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Leading private university with strong business and IT programs, offering quality English-taught courses.'
    },
    {
      id: '27',
      name: 'Rangsit University',
      country: 'Thailand',
      ranking: 135,
      minGPA: 2.5,
      tuitionRange: '150,000 - 320,000 THB',
      fields: ['Medicine', 'Engineering', 'Business Administration', 'Design', 'Communication Arts'],
      acceptanceRate: 70.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level',
      scholarships: 'Entrance scholarships and tuition reductions offered for international students depending on grades',
      intakePeriods: ['January', 'August'],
      image: 'https://images.unsplash.com/photo-1725256455511-6d91e8049dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdGhhaWxhbmQlMjBiYW5na29rfGVufDF8fHx8MTc2OTYwODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Large private university with many English-taught programs and health-related programs with stricter entry.'
    },
    {
      id: '32',
      name: 'Bangkok University',
      country: 'Thailand',
      ranking: 145,
      minGPA: 2.5,
      tuitionRange: '200,000 - 400,000 THB',
      fields: ['Business Administration', 'Communication Arts', 'Media', 'Digital Media', 'Marketing'],
      acceptanceRate: 68.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level',
      scholarships: 'Partial tuition scholarships available for international students with strong academic background',
      intakePeriods: ['January', 'August'],
      image: 'https://images.unsplash.com/photo-1725256455511-6d91e8049dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdGhhaWxhbmQlMjBiYW5na29rfGVufDF8fHx8MTc2OTYwODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Strong focus on business, media, and communication with practical-oriented curriculum and creative programs.'
    },
    {
      id: '33',
      name: 'Thammasat University',
      country: 'Thailand',
      ranking: 140,
      minGPA: 2.8,
      tuitionRange: '120,000 - 300,000 THB',
      fields: ['Economics', 'Political Science', 'International Studies', 'Law', 'Business Administration'],
      acceptanceRate: 45.0,
      admissionInfo: 'Myanmar Grade-12 certificate, GED, SAT, OSSD, IGCSE O Level, IGCSE A Level',
      scholarships: 'Thammasat offers merit-based and faculty-level scholarships for international students',
      intakePeriods: ['August', 'January'],
      image: 'https://images.unsplash.com/photo-1725256455511-6d91e8049dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwdGhhaWxhbmQlMjBiYW5na29rfGVufDF8fHx8MTc2OTYwODI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Public university with strong academic reputation, competitive programs in economics and political science.'
    },

    // Malaysia Universities
    {
      id: '28',
      name: 'University of Malaya',
      country: 'Malaysia',
      ranking: 65,
      minGPA: 3.2,
      tuitionRange: 'Under $10,000',
      fields: ['Engineering', 'Computer Science', 'Medicine', 'Business Administration', 'Social Sciences'],
      acceptanceRate: 35.0,
      image: 'https://images.unsplash.com/photo-1562227678-3f9e5e74c70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbWFsYXlzaWElMjBrdWFsYSUyMGx1bXB1cnxlbnwxfHx8fDE3Njk2MDgyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Malaysia\'s oldest university with comprehensive programs and affordable world-class education.'
    },
    {
      id: '29',
      name: 'Universiti Teknologi Malaysia',
      country: 'Malaysia',
      ranking: 188,
      minGPA: 3.0,
      tuitionRange: 'Under $10,000',
      fields: ['Engineering', 'Computer Science', 'Architecture', 'Natural Sciences'],
      acceptanceRate: 40.0,
      image: 'https://images.unsplash.com/photo-1562227678-3f9e5e74c70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbWFsYXlzaWElMjBrdWFsYSUyMGx1bXB1cnxlbnwxfHx8fDE3Njk2MDgyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Leading Malaysian technical university specializing in engineering and technology education.'
    }
  ];
}