'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    'VETEMENT',
    'BEAUTE', 
    'ACCESSOIRES',
    'MAISON & DECO',
    'PARFUM'
  ]

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase().replace(' & ', '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-herBrown transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-herBlack font-Bodoni">
              HER
            </div>
          </Link>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.slice(3).map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase().replace(' & ', '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-herBrown transition-colors"
              >
                {category}
              </Link>
            ))}
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href={`/${session.user.role.toLowerCase()}/dashboard`}>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {session.user.name}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                >
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(' & ', '-')}`}
                  className="text-sm font-medium text-gray-700 hover:text-herBrown transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              
              {session ? (
                <>
                  <Link
                    href={`/${session.user.role.toLowerCase()}/dashboard`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      {session.user.name}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      signOut()
                      setIsMenuOpen(false)
                    }}
                    className="w-full"
                  >
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Connexion
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}