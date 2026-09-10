import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/hero.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Operations.
              <br />
              <span className="text-white">Empowering Growth.</span>
            </h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              Professional outsourcing and business process management solutions
              from Delhi NCR, serving global enterprises across Insurance,
              Telecom, Healthcare, Finance, and more with end-to-end customer
              support and back-office operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#280b57] text-white px-8 sm:px-10 py-4 font-semibold hover:bg-[#1f0944] transition-colors inline-block tracking-tight text-center"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 sm:px-10 py-4 font-semibold hover:bg-white hover:text-[#280b57] transition-colors inline-block tracking-tight text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/home.jpg"
              alt="Business"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
