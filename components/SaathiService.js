import Image from "next/image";

function SaathiServices() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 lg:w-2/3 mb-8 md:mb-0">
        <h2 className="text-6xl font-Caveat text-primary mb-6 text-center">
          Why Saathi?
        </h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed font-serif">
          Saathi provides a wide range of services to make life easier for your
          loved ones and give you peace of mind. Whether it's providing
          emotional support, managing daily tasks, or making sure health needs
          are met, we are here to help.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed font-serif">
          Our compassionate team is dedicated to ensuring the well-being of
          those you care about, making their lives more comfortable and
          fulfilling.
        </p>
        <div className="mt-8">
          <a
            href="#services"
            className="inline-block bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/3 flex justify-center">
        <div className="relative w-full max-w-md">
          <Image
            src="/images/happyFamily.png" // Replace with the actual path to your image
            layout="responsive"
            width={500}
            height={400}
            alt="Happy Family"
            className="rounded-lg border-8 shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-20 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

export default SaathiServices;
