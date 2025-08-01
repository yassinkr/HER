import Link from 'next/link'
import Image from 'next/image'

export function CategoriesSection() {
  const categories = [
    { name: 'Vêtement', slug: 'vetement', image: '/images/VETEMENT.png' },
    { name: 'Beauté', slug: 'beaute', image: '/images/BEAUTE.png' },
    { name: 'Parfum', slug: 'parfum', image: '/images/PARFUM.png' },
    { name: 'Maison & Déco', slug: 'maison-deco', image: '/images/MAISON & DECO.png' },
    { name: 'Accessoires', slug: 'accessoires', image: '/images/ACCESOIRES.png' },
  ]

  return (
    <div className="bg-lightBeige py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg width="388" height="115" viewBox="0 0 388 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M114.55 0.499991V0.799996H100.975V112.7H114.55V113H64.3V112.7H77.725V57.65H37.225V112.7H50.8V113H0.475V112.7H13.975V0.799996H0.475V0.499991H50.8V0.799996H37.225V57.35H77.725V0.799996H64.3V0.499991H114.55ZM219.245 114.5C212.145 114.5 205.82 113.125 200.27 110.375C194.72 107.575 190.345 103.5 187.145 98.15C183.945 92.8 182.345 86.25 182.345 78.5C182.345 70.75 183.895 64.2 186.995 58.85C190.145 53.5 194.445 49.45 199.895 46.7C205.395 43.9 211.695 42.5 218.795 42.5C226.245 42.5 232.395 44 237.245 47C242.095 49.95 245.72 53.825 248.12 58.625C250.52 63.425 251.72 68.55 251.72 74H192.395V73.7H229.37C229.37 70.35 229.245 66.9 228.995 63.35C228.795 59.75 228.345 56.4 227.645 53.3C226.945 50.15 225.87 47.625 224.42 45.725C223.02 43.775 221.145 42.8 218.795 42.8C216.195 42.8 214.045 43.775 212.345 45.725C210.645 47.625 209.295 50.225 208.295 53.525C207.345 56.775 206.67 60.425 206.27 64.475C205.87 68.525 205.67 72.7 205.67 77C205.67 81.8 205.895 86.4 206.345 90.8C206.845 95.2 207.72 99.1 208.97 102.5C210.22 105.9 211.97 108.6 214.22 110.6C216.47 112.55 219.345 113.525 222.845 113.525C230.045 113.525 236.17 111.45 241.22 107.3C246.27 103.1 249.72 97.85 251.57 91.55H251.87C249.92 98.05 246.27 103.5 240.92 107.9C235.57 112.3 228.345 114.5 219.245 114.5ZM350.379 79.925C350.379 74.725 350.679 69.875 351.279 65.375C351.929 60.875 353.004 56.925 354.504 53.525C356.054 50.075 358.154 47.375 360.804 45.425C363.454 43.475 366.829 42.5 370.929 42.5C374.329 42.5 377.229 43.275 379.629 44.825C382.029 46.375 383.854 48.375 385.104 50.825C386.404 53.225 387.054 55.775 387.054 58.475C387.054 61.925 385.904 64.925 383.604 67.475C381.354 70.025 378.354 71.3 374.604 71.3C370.854 71.3 367.804 70.15 365.454 67.85C363.154 65.55 362.004 62.8 362.004 59.6C362.004 55.9 363.179 52.9 365.529 50.6C367.929 48.25 370.904 47.075 374.454 47.075C376.854 47.075 379.004 47.625 380.904 48.725C382.804 49.775 384.279 51.175 385.329 52.925C386.429 54.625 386.979 56.475 386.979 58.475H386.754C386.754 55.825 386.129 53.325 384.879 50.975C383.629 48.575 381.829 46.625 379.479 45.125C377.129 43.575 374.279 42.8 370.929 42.8C366.879 42.8 363.529 43.775 360.879 45.725C358.279 47.675 356.229 50.375 354.729 53.825C353.229 57.275 352.179 61.25 351.579 65.75C350.979 70.2 350.679 74.925 350.679 79.925H350.379ZM350.679 44V112.7H361.704V113H319.929V112.7H329.679V44.3H319.929V44H350.679Z" fill="#E2D8E8" fillOpacity="0.5"/>
            </svg>
          </div>
          <h2 className="relative text-3xl md:text-4xl font-bold text-herBlack tracking-wider">
            Explorez Notre Monde de Produits
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-herBlack group-hover:text-herBrown transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}