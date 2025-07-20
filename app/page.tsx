import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturesSection } from '@/components/features-section'
import { StepsSection } from '@/components/steps-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-lightBeige font-Bodoni">
      <div className="bg-herPurple w-full text-center py-2">
        <p className="text-sm">Découvrez notre nouvelle collection</p>
      </div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <StepsSection />
      <Footer />
    </div>
  )
}