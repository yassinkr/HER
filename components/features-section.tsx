export function FeaturesSection() {
  const features = [
    { title: 'NOUVEAUTÉ', description: 'Découvrez les dernières tendances' },
    { title: 'DESTOCKAGE', description: 'Profitez de prix exceptionnels' },
    { title: 'RECOMMENDÉ', description: 'Nos coups de cœur sélectionnés' },
  ]

  return (
    <div className="w-full h-[300px] bg-herBeige">
      <div className="h-full flex flex-col lg:flex-row">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex-1 flex flex-col justify-center items-center border border-herBlack text-center p-8 hover:bg-herBrown hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {feature.title}
            </h2>
            <p className="text-sm opacity-80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}