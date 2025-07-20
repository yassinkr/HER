import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-herBrown text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center justify-between py-4 border-b border-white/20 hover:text-herBeige transition-colors"
          >
            <span className="text-lg">Accueil</span>
            <span>→</span>
          </Link>
          
          <Link
            href="/contact"
            className="flex items-center justify-between py-4 border-b border-white/20 hover:text-herBeige transition-colors"
          >
            <span className="text-lg">Contactez nous</span>
            <span>→</span>
          </Link>
          
          <div className="flex items-center justify-between py-4">
            <span className="text-lg">Follow us</span>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-herBeige transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-herBeige transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-herBeige transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a2.99 2.99 0 01-2.99 2.99c-.83 0-1.58-.41-2.08-1.03a2.99 2.99 0 01-.91-2.16V2H6.68v5.73c0 .85.33 1.64.91 2.16.5.62 1.25 1.03 2.08 1.03a2.99 2.99 0 002.99-2.99V2h2.08v.44a4.83 4.83 0 003.77 4.25z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
          <p>&copy; 2024 HER Marketplace. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}