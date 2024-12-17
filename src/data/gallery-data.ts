export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  date?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    title: 'Elegant Wedding Reception',
    category: 'Weddings',
    description: 'A stunning wedding reception featuring elegant decor and lighting',
    date: 'June 2023'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    title: 'Corporate Conference',
    category: 'Corporate',
    description: 'Annual tech conference with over 500 attendees',
    date: 'July 2023'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    title: 'Birthday Celebration',
    category: 'Parties',
    description: 'Luxurious 50th birthday celebration',
    date: 'August 2023'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    title: 'Garden Wedding',
    category: 'Weddings',
    description: 'Beautiful outdoor wedding ceremony',
    date: 'September 2023'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    title: 'Gala Dinner',
    category: 'Corporate',
    description: 'Annual charity gala dinner event',
    date: 'October 2023'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    title: 'Engagement Party',
    category: 'Weddings',
    description: 'Intimate engagement celebration',
    date: 'November 2023'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44',
    title: 'Music Festival',
    category: 'Entertainment',
    description: 'Summer music festival with live performances',
    date: 'July 2023'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
    title: 'Graduation Party',
    category: 'Parties',
    description: 'University graduation celebration',
    date: 'June 2023'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    title: 'Fashion Show',
    category: 'Entertainment',
    description: 'Annual fashion week showcase',
    date: 'September 2023'
  }
];