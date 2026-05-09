const reviews = [
  { name: 'Ahmed Ben Salah', city: 'Sfax', text: "Exceptional service! My apartment has never been cleaner. Highly recommend Tnadhef!" },
  { name: 'Leila Mansour', city: 'Sousse', text: "Professional team, arrived on time, and did an amazing job. Will book again!" },
  { name: 'Mohamed Trabelsi', city: 'Sfax', text: "Great deep cleaning service after our renovation. Everything sparkles now!" },
]

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-brand-purple text-lg">★</span>
    ))}
  </div>
)

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 px-8  bg-bg-primary">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-bg-secondary border border-border-card rounded-2xl p-6">
            <Stars />
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{r.text}</p>
            <div>
              <p className="text-text-primary font-semibold text-sm">{r.name}</p>
              <p className="text-text-muted text-xs mt-1">{r.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection