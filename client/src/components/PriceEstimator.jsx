import { useState } from 'react'

const basePrices = {
  Residential: 50,
  Office: 80,
  'Deep Clean': 120,
  'Post-Construction': 150,
}

const PriceEstimator = () => {
  const [service, setService] = useState('Residential')
  const [rooms, setRooms] = useState(3)
  const [sqm, setSqm] = useState(20)

  const estimated = basePrices[service] + rooms * 10 + Math.floor(sqm / 10) * 5

  return (
    <section id="pricing" className="py-20 px-8 bg-bg-primary">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Price Estimator
      </h2>

      <div className="max-w-2xl mx-auto bg-bg-secondary border border-border-card rounded-2xl p-8">
        {/* Service + Rooms */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-text-secondary text-sm mb-2 block">Service Type</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-bg-card border border-border-card text-text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple"
            >
              {Object.keys(basePrices).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-text-secondary text-sm mb-2 block">Number of Rooms</label>
            <input
              type="number"
              min={1}
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full bg-bg-card border border-border-card text-text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple"
            />
          </div>
        </div>

        {/* Slider */}
        <div className="mb-8">
          <label className="text-text-secondary text-sm mb-3 block">
            Square Meters: <span className="text-text-primary">{sqm} m²</span>
          </label>
          <input
            type="range"
            min={20}
            max={300}
            step={10}
            value={sqm}
            onChange={(e) => setSqm(Number(e.target.value))}
            className="w-full accent-brand-purple"
          />
        </div>

        {/* Result */}
        <div className="bg-price-gradient rounded-2xl p-6 text-center">
          <p className="text-text-secondary text-sm mb-2">Estimated Price</p>
          <p className="text-white text-5xl font-bold mb-4">{estimated} DT</p>
         <button className="px-8 py-3  bg-gradient-to-r from-brand-purpleLight to-brand-blue text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95">
          Book Now
        </button>
        </div>
      </div>
    </section>
  )
}

export default PriceEstimator