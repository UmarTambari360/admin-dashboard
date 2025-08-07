// Mock data for the SaaS admin dashboard
export const dashboardStats = {
  users: {
    total: 26000,
    change: -12.4,
    trend: 'down'
  },
  income: {
    total: 6200,
    change: 40.8,
    trend: 'up'
  },
  conversionRate: {
    total: 2.49,
    change: 84.7,
    trend: 'up'
  },
  sessions: {
    total: 44000,
    change: -23.6,
    trend: 'down'
  }
};

export const socialMetrics = {
  facebook: {
    followers: 89000,
    friends: 89,
    label: 'FRIENDS'
  },
  twitter: {
    followers: 1792,
    tweets: 459,
    label: 'TWEETS'
  },
  linkedin: {
    connections: 500,
    feeds: 1292,
    label: 'CONTACTS'
  },
  calendar: {
    events: 12,
    meetings: 4,
    label: 'EVENTS'
  }
};

export const trafficData = [
  { name: 'Jan', newClients: 4000, recurring: 2400, pageviews: 2400, organic: 1800 },
  { name: 'Feb', newClients: 3000, recurring: 1398, pageviews: 2210, organic: 2100 },
  { name: 'Mar', newClients: 2000, recurring: 9800, pageviews: 2290, organic: 2400 },
  { name: 'Apr', newClients: 2780, recurring: 3908, pageviews: 2000, organic: 2200 },
  { name: 'May', newClients: 1890, recurring: 4800, pageviews: 2181, organic: 2500 },
  { name: 'Jun', newClients: 2390, recurring: 3800, pageviews: 2500, organic: 2300 },
  { name: 'Jul', newClients: 3490, recurring: 4300, pageviews: 2100, organic: 2600 }
];

export const salesMetrics = {
  newClients: 9123,
  recurringClients: 22643,
  pageviews: 78623,
  organic: 49123
};

export const recentActivity = [
  {
    id: 1,
    type: 'subscription',
    user: 'John Doe',
    action: 'Upgraded to Pro Plan',
    amount: '$29.99',
    time: '2 hours ago',
    status: 'success'
  },
  {
    id: 2,
    type: 'payment',
    user: 'Sarah Wilson',
    action: 'Monthly payment received',
    amount: '$19.99',
    time: '4 hours ago',
    status: 'success'
  },
  {
    id: 3,
    type: 'user',
    user: 'Mike Johnson',
    action: 'New user registration',
    amount: '$0.00',
    time: '6 hours ago',
    status: 'info'
  },
  {
    id: 4,
    type: 'refund',
    user: 'Emma Davis',
    action: 'Refund processed',
    amount: '-$29.99',
    time: '1 day ago',
    status: 'warning'
  },
  {
    id: 5,
    type: 'subscription',
    user: 'Alex Chen',
    action: 'Subscription cancelled',
    amount: '$0.00',
    time: '2 days ago',
    status: 'error'
  }
];

export const userStats = {
  totalUsers: 26000,
  activeUsers: 18500,
  newUsersToday: 156,
  retentionRate: 85.2
};