/**
 * @typedef {object} Space
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {string} address
 * @property {string} imageUrl
 * @property {number} capacity
 * @property {number} pricePerDayIndividual
 * @property {number} pricePerDayCorporate
 * @property {string[]} amenities
 * @property {number} [rating]
 * @property {number} [reviewsCount]
 */

/**
 * @typedef {object} Booking
 * @property {string} id
 * @property {string} spaceId
 * @property {string} userId
 * @property {'individual' | 'corporate'} bookingType
 * @property {string} date
 * @property {string} [startTime]
 * @property {string} [endTime]
 * @property {number} numberOfPeople
 * @property {number} totalPrice
 * @property {'pending' | 'confirmed' | 'cancelled'} status
 * @property {string} [paymentId]
 * @property {string} createdAt
 */

/** @type {Space[]} */
export const mockSpaces = [
  {
    id: 'space-1',
    name: 'Mumbai CoWork Hub',
    slug: 'mumbai-cowork-hub',
    description: 'A vibrant coworking space in the heart of Mumbai, perfect for creatives and tech enthusiasts. Offers flexible desks, private offices, and meeting rooms with excellent natural light.',
    address: '123 Dalal Street, Fort, Mumbai, MH 400001',
    imageUrl: 'https://picsum.photos/seed/mumbaihub/600/400',
    capacity: 50,
    pricePerDayIndividual: 2500, // Example INR price
    pricePerDayCorporate: 18000, // Example INR price
    amenities: ['High-Speed WiFi', 'Ergonomic Chairs', 'Coffee & Tea', 'Meeting Rooms', 'Printing', '24/7 Access', 'Kitchenette'],
    rating: 4.8,
    reviewsCount: 120,
  },
  {
    id: 'space-2',
    name: 'Bangalore Tech Park Central',
    slug: 'bangalore-tech-park-central',
    description: 'Find focus and tranquility at Bangalore Tech Park Central. Ideal for those who prefer a quieter environment. Features dedicated quiet zones and wellness rooms.',
    address: '456 MG Road, Bangalore, KA 560001',
    imageUrl: 'https://picsum.photos/seed/bangalorepark/600/400',
    capacity: 30,
    pricePerDayIndividual: 3000, // Example INR price
    pricePerDayCorporate: 15000, // Example INR price
    amenities: ['Ultra-Fast Fiber Internet', 'Quiet Zones', 'Meditation Room', 'Premium Coffee', 'Lockers'],
    rating: 4.5,
    reviewsCount: 85,
  },
  {
    id: 'space-3',
    name: 'Delhi Innovation Center',
    slug: 'delhi-innovation-center',
    description: 'A dynamic and collaborative space in Delhi, designed for startups and tech companies. Regular networking events and workshops.',
    address: '789 Connaught Place, New Delhi, DL 110001',
    imageUrl: 'https://picsum.photos/seed/delhiworks/600/400',
    capacity: 100,
    pricePerDayIndividual: 2200, // Example INR price
    pricePerDayCorporate: 20000, // Example INR price
    amenities: ['High-Speed WiFi', 'Event Space', 'Mentorship Programs', 'Game Room', 'Free Snacks'],
    rating: 4.7,
    reviewsCount: 150,
  },
  {
    id: 'space-4',
    name: 'Hyderabad Creative Corner',
    slug: 'hyderabad-creative-corner',
    description: 'A cozy and affordable coworking space in Hyderabad with a friendly community. Great for freelancers and remote workers.',
    address: '101 Hitech City, Hyderabad, TS 500081',
    imageUrl: 'https://picsum.photos/seed/hyderabadspace/600/400',
    capacity: 25,
    pricePerDayIndividual: 1500, // Example INR price
    pricePerDayCorporate: 10000, // Example INR price
    amenities: ['Reliable WiFi', 'Community Events', 'Pet-Friendly', 'Bike Storage', 'Free Coffee'],
    rating: 4.3,
    reviewsCount: 65,
  },
];

/** @type {Booking[]} */
export const mockBookings = [
  {
    id: 'booking-1',
    spaceId: 'space-1', // Mumbai CoWork Hub
    userId: 'user-priya-sharma', // Updated user ID
    bookingType: 'individual',
    date: '2024-08-15',
    numberOfPeople: 1,
    totalPrice: 2500, // Matches Mumbai CoWork Hub individual price
    status: 'confirmed',
    createdAt: '2024-07-20T10:00:00Z',
  },
  {
    id: 'booking-2',
    spaceId: 'space-3', // Delhi Innovation Center
    userId: 'corp-innovatech', // Updated user ID
    bookingType: 'corporate',
    date: '2024-08-20',
    startTime: '09:00',
    endTime: '17:00',
    numberOfPeople: 10,
    totalPrice: 20000, // Example corporate price for Delhi space (assuming full day)
    status: 'confirmed',
    createdAt: '2024-07-15T14:30:00Z',
  },
  {
    id: 'booking-3',
    spaceId: 'space-2', // Bangalore Tech Park Central
    userId: 'user-rohan-patel', // Updated user ID
    bookingType: 'individual',
    date: '2024-09-01',
    numberOfPeople: 1,
    totalPrice: 3000, // Matches Bangalore Tech Park Central individual price
    status: 'pending',
    createdAt: '2024-07-28T11:00:00Z',
  },
];
