import { Home, Building2, Sparkles, Hammer } from 'lucide-react';
const services = [
  { icon: <Home />, title: 'Residential Cleaning', desc: 'Professional home cleaning services for apartments and houses', price: 'From 50 DT' },
  { icon: <Building2 />, title: 'Office Cleaning', desc: 'Keep your workspace spotless and professional', price: 'From 80 DT' },
  { icon: <Sparkles />, title: 'Deep Clean', desc: 'Intensive cleaning for a fresh start', price: 'From 120 DT' },
  { icon: <Hammer />, title: 'Post-Construction', desc: 'Complete cleanup after renovation or construction', price: 'From 150 DT' },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-8 bg-bg-primary">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Our Services
      </h2>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-bg-secondary hover:shadow-lg group hover:shadow-brand-purple border border-border-card rounded-2xl px-8  py-6 hover:border-brand-purple transition-all">
            <div className="w-12 group-hover:text-brand-purple h-12 bg-bg-card rounded-xl flex items-center justify-center text-2xl mb-4">
              {s.icon}
            </div>
            <h3 className="text-text-primary font-semibold mb-2">{s.title}</h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">{s.desc}</p>
            <span className="text-brand-purpleLight text-sm font-medium">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection