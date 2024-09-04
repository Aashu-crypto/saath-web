import React from "react";
import Image from "next/image";

const SaathiCard = ({ name, role, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-36 h-36 mb-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-primary"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-primary mb-3 font-medium">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SaathisSection = () => {
  const saathis = [
    {
      id: "1",
      name: "Rajesh Kumar",
      role: "Healthcare Assistant",
      description:
        "Rajesh is dedicated to providing top-notch healthcare services with compassion and care.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: "2",
      name: "Anita Singh",
      role: "Emotional Support Specialist",
      description:
        "Anita offers a friendly ear and emotional support, helping clients navigate life's challenges.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "3",
      name: "Suresh Patil",
      role: "Errands Helper",
      description:
        "Suresh assists with daily errands, ensuring that your tasks are completed on time, every time.",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      id: "4",
      name: "Geeta Sharma",
      role: "Housekeeping Assistant",
      description:
        "Geeta keeps your home clean and organized, providing a stress-free living environment.",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
        Meet Our Saathis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {saathis.map((saathi) => (
          <SaathiCard
            key={saathi.id}
            name={saathi.name}
            role={saathi.role}
            description={saathi.description}
            image={saathi.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SaathisSection;
