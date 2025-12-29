"use client";

import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Package, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "rizzui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb10_1px,transparent_1px),linear-gradient(to_bottom,#2563eb10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
            
            <motion.div 
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Package className="w-32 h-32 md:w-40 md:h-40 text-blue-500 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)] relative z-10" />
            </motion.div>
            
            {/* 404 Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          صفحہ نہیں ملا
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Oops! Jo page aap dhundh rahe hain woh move, delete ya exist nahi karta.
        </motion.p>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-12"
        >
          <AlertCircle className="h-4 w-4" />
          <span>Error Code: 404 - Page Not Found</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              size="xl"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Home Page</span>
            </Button>
          </Link>

          <Link href="/products">
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Browse Products</span>
            </Button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">Aap ye bhi dekh sakte hain:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Products", href: "/products" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose Us", href: "/why-choose-us" },
              { label: "Contact", href: "/contact" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium underline underline-offset-4"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
}
