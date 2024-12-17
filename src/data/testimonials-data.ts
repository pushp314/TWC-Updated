export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  company?: string;
  eventType?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Event Organizer',
    company: 'Tech Innovations Inc.',
    eventType: 'Corporate Conference',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'EventHub has transformed how I manage events. The platform is intuitive and the support team is exceptional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Conference Director',
    company: 'Global Events Ltd',
    eventType: 'Tech Summit',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The analytics and reporting features have helped us make data-driven decisions for our events.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'Creative Solutions',
    eventType: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'Our ticket sales increased by 45% after switching to EventHub. The marketing tools are fantastic.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'Wedding Planner',
    company: 'Perfect Moments',
    eventType: 'Wedding',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'The attention to detail and creativity in event planning is unmatched. Truly exceptional service!',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Chang',
    role: 'Corporate Event Manager',
    company: 'Enterprise Solutions',
    eventType: 'Annual Gala',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'Professional, reliable, and innovative. They made our company events stand out from the rest.',
    rating: 5
  },
  {
    id: '6',
    name: 'James Anderson',
    role: 'Festival Organizer',
    company: 'Urban Festivals',
    eventType: 'Music Festival',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: "The team's expertise in handling large-scale events is remarkable. They think of everything!",
    rating: 5
  },
  {
    id: '7',
    name: 'Sophie Martinez',
    role: 'Bride',
    eventType: 'Wedding',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'They made our dream wedding a reality. Every detail was perfect, and our guests were amazed.',
    rating: 5
  },
  {
    id: '8',
    name: 'Robert Kim',
    role: 'Non-Profit Director',
    company: 'Green Earth Foundation',
    eventType: 'Charity Gala',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    content: 'Their dedication to our cause and attention to detail helped us exceed our fundraising goals.',
    rating: 5
  }
];