export const mockInfluencers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    platform: 'Instagram',
    niche: 'Fashion',
    followers: 250000,
    engagementRate: 4.5,
    earnings: 15000,
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'Mike Chen',
    platform: 'YouTube',
    niche: 'Tech',
    followers: 500000,
    engagementRate: 6.2,
    earnings: 28000,
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: 'Emma Davis',
    platform: 'TikTok',
    niche: 'Lifestyle',
    followers: 1200000,
    engagementRate: 8.1,
    earnings: 35000,
    image: 'https://via.placeholder.com/100'
  }
];

export const mockCampaigns = [
  {
    id: 1,
    name: 'Summer Collection Launch',
    client: 'Fashion Brand Co.',
    platform: 'Instagram',
    startDate: '2025-06-01',
    endDate: '2025-06-30',
    budget: 50000,
    status: 'Active',
    description: 'Launch campaign for new summer collection'
  },
  {
    id: 2,
    name: 'Product Review Series',
    client: 'Tech Gadgets Inc.',
    platform: 'YouTube',
    startDate: '2025-07-01',
    endDate: '2025-08-15',
    budget: 75000,
    status: 'Upcoming',
    description: 'Series of tech product reviews'
  }
];

export const mockContracts = [
  {
    id: 1,
    title: 'Instagram Campaign Q2 2025',
    influencer: 'Sarah Johnson',
    campaign: 'Summer Collection Launch',
    startDate: '2025-06-01',
    endDate: '2025-06-30',
    value: 15000,
    status: 'Active'
  },
  {
    id: 2,
    title: 'YouTube Review Contract',
    influencer: 'Mike Chen',
    campaign: 'Product Review Series',
    startDate: '2025-07-01',
    endDate: '2025-08-15',
    value: 28000,
    status: 'Sent'
  }
];

export const mockPayments = [];

export const mockCalendarEvents = [
  {
    id: 1,
    date: '2025-11-15',
    title: 'Instagram Post',
    influencer: 'Sarah Johnson',
    campaign: 'Summer Collection Launch',
    platform: 'Instagram',
    contentType: 'Post'
  },
  {
    id: 2,
    date: '2025-11-20',
    title: 'YouTube Video',
    influencer: 'Mike Chen',
    campaign: 'Product Review Series',
    platform: 'YouTube',
    contentType: 'Video'
  }
];