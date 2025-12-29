'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Award, CreditCard, HeadphonesIcon, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'rizzui';

const reasons = [
  {
    icon: Shield,
    title: 'Premium Quality Products',
    description: 'Every product is carefully selected and undergoes strict quality control. We only offer items that meet our high standards.',
    color: 'blue',
  },
  {
    icon: Truck,
    title: 'Fast & Free Shipping',
    description: 'Enjoy free shipping on orders over $50. We partner with reliable carriers to ensure your items arrive quickly and safely.',
    color: 'green',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: '100% secure payment processing with industry-standard encryption. Shop with confidence knowing your data is protected.',
    color: 'purple',
  },
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions or concerns.',
    color: 'orange',
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    description: 'Competitive pricing without compromising quality. We work directly with manufacturers to pass savings to you.',
    color: 'red',
  },
  {
    icon: CheckCircle,
    title: 'Easy Returns & Exchanges',
    description: '30-day hassle-free returns and exchanges. Not satisfied? We will make it right with no questions asked.',
    color: 'teal',
  },
];

const benefits = [
  'Curated collection from trusted brands',
  'Size guides for perfect fit every time',
  'Exclusive deals and member discounts',
  'Sustainable and ethical sourcing',
  'Regular new arrivals and trending items',
  'Loyalty rewards program',
];

const testimonials = [
  {
    name: 'Jessica Martinez',
    role: 'Loyal Customer',
    content: 'The quality is unmatched! I have been shopping here for 3 years and have never been disappointed.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'First-time Buyer',
    content: 'Fast shipping, great prices, and excellent customer service. This is now my go-to store!',
    rating: 5,
  },
  {
    name: 'Amanda Wilson',
    role: 'Fashion Blogger',
    content: 'As someone who reviews fashion brands professionally, I can say Global Warehouse exceeds expectations.',
    rating: 5,
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80)',
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
            <h1 className="heading-1 text-white mb-6">Why Choose Global Warehouse?</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for thousands of satisfied customers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="product-card p-6 hover:shadow-2xl"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-xl mb-3">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Even More Reasons to Shop With Us</h2>
              <p className="subtitle">
                We're committed to providing the best possible shopping experience from start to finish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Trusted by Thousands</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Don't just take our word for it - see what our customers have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="product-card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
              Join thousands of satisfied customers and discover why Global Warehouse is the smart choice.
            </p>
            <Link href="/products">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Start Shopping Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
