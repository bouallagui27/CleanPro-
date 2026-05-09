import NumberTicker from "./magicui/number-ticker";
import { Link } from "react-router-dom";
const stats = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 1000, suffix: '+', label: 'Cleanings Done' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 bg-hero-gradient pt-60 pb-20">
      <h1 data-aos="fade-down" className="text-5xl md:text-6xl font-bold text-text-primary mb-4 leading-[1.1] tracking-tight">
        Premium Cleaning Services <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purpleLight to-brand-blue drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          Sfax & Sousse
        </span>
      </h1>

      <p className="text-text-secondary text-base max-w-lg mb-8 leading-relaxed font-light">
        Experience the freshness of a professionally cleaned space. Book
        your cleaning service today and enjoy a spotless environment.
      </p>

      <Link to="/booking">
  <button className="px-8 py-3 bg-gradient-to-r from-brand-purpleLight to-brand-blue text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95 mb-20">
    Book Your Clean Now
  </button>
</Link>

      {/* Stats Section */}
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center group">
            <div className="flex items-baseline text-4xl font-bold tracking-tighter text-white">
              <NumberTicker value={s.value} className="text-white" />
              <span className="text-brand-purpleLight ml-0.5">{s.suffix}</span>
            </div>
            <span className="text-text-secondary text-xs uppercase tracking-[0.2em] mt-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;