'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Heart, Globe } from 'lucide-react';

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products Sold', value: '100K+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Countries', value: '25+' },
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority. We go above and beyond to ensure you have the best shopping experience.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous quality checks to ensure you receive only the finest items.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We source products from around the world to bring you diverse and unique fashion choices.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously evolve to bring you the latest trends and technologies in fashion retail.',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'Founder & CEO',
    description: 'Visionary leader with 15 years of fashion retail experience.',
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Design',
    description: 'Award-winning designer passionate about sustainable fashion.',
  },
  {
    name: 'Michael Brown',
    role: 'Operations Director',
    description: 'Ensuring smooth operations and timely deliveries worldwide.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 text-white mb-6">About Global Warehouse</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in fashion for over a decade, bringing style, quality, and affordability together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <p>
                  Founded in 2014, Global Warehouse began with a simple mission: to make premium fashion 
                  accessible to everyone. What started as a small online boutique has grown into a trusted 
                  destination for fashion enthusiasts worldwide.
                </p>
                <p>
                  We believe that great style shouldn't come with a hefty price tag. By working directly 
                  with manufacturers and cutting out middlemen, we're able to offer exceptional quality at 
                  prices that won't break the bank.
                </p>
                <p>
                  Today, we serve over 50,000 happy customers across 25 countries, offering a carefully 
                  curated selection of clothing, shoes, and accessories for every style and occasion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="subtitle max-w-2xl mx-auto">
              These principles guide everything we do and shape our relationship with customers and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="product-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Meet Our Leadership Team</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Dedicated professionals committed to bringing you the best shopping experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="product-card p-6 text-center"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1560250097-0b93528c311a' : index === 1 ? '1573496359142-b89e5f5cecad' : '1519085360753-af0119f7c3be'}?w=400&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
