import React from 'react';
import { FadeIn } from '../animations/fade-in';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Saif Siddiqui',
    role: 'Event Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Manish soni',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Suraj gajbhiye',
    role: 'Wedding Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

export function TeamPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Passionate professionals dedicated to creating perfect events
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.2}>
              <div className="relative group">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link to='/team'
              
              className="border-purple-600 outline p-3 rounded text-purple-600 hover:bg-purple-50"
            >
              Meet the Full Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}