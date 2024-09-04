import Image from "next/image";

function SaathiServices() {
  return (
    <section className="relative bg-cover bg-center py-16 px-6 md:px-16 lg:px-24 flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/YoungBoy.webp" // Replace with the actual path to your image
          layout="fill"
          objectFit="cover"
          objectPosition="top" // Show the upper part of the image
          quality={100}
          alt="Happy Family"
          className=""
        />
        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-primary opacity-50 rounded-lg"></div>
        {/* Increase the opacity to make the image appear lighter */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left">
        <div className="mb-8 md:mb-0 md:max-w-2xl mx-auto">
          <p className="text-xl tracking-wider text-white mb-6 leading-relaxed font-serif mt-52 text-center animate-fade-in">
            Saathi provides a wide range of services to make life easier for
            your loved ones and give you peace of mind. Whether it&apos;s
            providing emotional support, managing daily tasks, or making sure
            health needs are met, we are here to help.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SaathiServices;
