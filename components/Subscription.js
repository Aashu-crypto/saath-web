"use client";
import React from "react";
import { FaStar, FaMedal, FaTrophy, FaRibbon } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Icon mapping
const iconMap = {
  "star-outline": FaStar,
  "medal-outline": FaMedal,
  "trophy-outline": FaTrophy,
  "ribbon-outline": FaRibbon,
};

// Subscription Card Component
const SubscriptionCard = ({ title, description, price, icon, colors }) => {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
      }}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap/click
    >
      <div className="p-8 flex flex-col items-center text-center h-full">
        <motion.div
          className="flex items-center justify-center mb-6 bg-white p-5 rounded-full shadow-lg"
          whileHover={{ rotate: 360 }} // Rotate icon on hover
          transition={{ duration: 1 }}
        >
          <IconComponent className="text-6xl text-primary" />
        </motion.div>
        <h3 className="text-3xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-lg text-white opacity-90 mb-6 whitespace-pre-line leading-relaxed">
          {description}
        </p>
        <div className="text-3xl font-bold text-white mb-8 whitespace-pre-line">
          {price}
        </div>
        <motion.button
          className="mt-auto px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }} // Slightly enlarge button on hover
          whileTap={{ scale: 0.95 }} // Slightly reduce button size on tap
          onClick={() => alert(`Subscribed to ${title} plan`)}
        >
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Page Component
const SubscriptionPage = () => {
  const packages = [
    {
      id: "1",
      title: "Basic",
      description: `✓ Weekly 1-hour call\n✓ One house visit\n✓ Digital media in "My Feed"`,
      price: "$30/m\n(Rs. 2500/m)",
      icon: "star-outline",
      colors: ["#A6FFCB", "#12D8FA"], // Gradient from mint green to blue
    },
    {
      id: "2",
      title: "Bronze",
      description: `✓ Weekly 1-hour call\n✓ Two house visits\n✓ 2 hours of errands\n✓ Digital media in "My Feed"`,
      price: "$40/m\n(Rs. 3500/m)",
      icon: "medal-outline",
      colors: ["#FFD194", "#D1913C"], // Gradient from peach to orange
    },
    {
      id: "3",
      title: "Silver",
      description: `✓ Weekly 1-hour call\n✓ Weekly house visits\n✓ 4 hours of errands`,
      price: "$60/m\n(Rs. 5000/m)",
      icon: "trophy-outline",
      colors: ["#D4FC79", "#96E6A1"], // Gradient from lime to green
    },
    {
      id: "4",
      title: "Gold",
      description: `✓ Weekly 1-hour call\n✓ Weekly house visits\n✓ 8 hours of errands`,
      price: "$80/m\n(Rs. 6500/m)",
      icon: "ribbon-outline",
      colors: ["#FDC830", "#F37335"], // Gradient from yellow to orange
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-8 py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <motion.h1
        className="text-6xl font-Caveat text-center text-gray-800 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Choose Your Subscription Plan
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
        {packages.map((pkg, index) => (
          <SubscriptionCard
            key={pkg.id}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            icon={pkg.icon}
            colors={pkg.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
