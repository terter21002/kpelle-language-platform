const ShopSection = () => {
  return (
    <section className="min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 pb-12 md:pb-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <img
            src="/landing_page/shopping.png"
            alt="Illustration of person shopping for Liberian merchandise"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Shop Our Merchandise
          </h2>

          <p className="text-lg text-gray-600 max-w-md">
            Shop Beautiful Liberian Merchandise from store Now represent the
            culture of Liberian
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#C4392A] hover:bg-[#A32E22] text-white py-2 px-6 rounded-4xl text-lg cursor-pointer transition-all duration-300 shadow-xl">
              Explore Store
            </button>

            <button className="border-2 border-[#C4392A] text-[#C4392A] hover:bg-[#C4392A] hover:text-white py-2 px-7 rounded-4xl text-lg cursor-pointer transition-all duration-300 shadow-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
