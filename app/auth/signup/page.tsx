'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    brandName: '',
    categories: [] as string[],
    email: '',
    password: '',
    confirmPassword: '',
    role: 'SELLER'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const categories = [
    'Vêtement',
    'Parfum',
    'Accessoires',
    'Beauté',
    'Maison & déco'
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      categories: checked
        ? [...prev.categories, category]
        : prev.categories.filter(c => c !== category)
    }))
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.brandName || formData.categories.length === 0) {
      setError('Veuillez remplir tous les champs')
      return
    }
    setError('')
    setStep(2)
  }

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/auth/signin?message=Inscription réussie, vous pouvez maintenant vous connecter')
      } else {
        const data = await response.json()
        setError(data.error || 'Une erreur est survenue')
      }
    } catch (error) {
      setError('Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-lightBeige">
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] py-12">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-Bodoni">S'inscrire</CardTitle>
            <CardDescription>
              {step === 1 ? 'Informations sur votre marque' : 'Créez votre compte'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brandName">Nom du brand</Label>
                  <Input
                    id="brandName"
                    value={formData.brandName}
                    onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                    required
                    className="border-herBrown focus:border-herBrown"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Catégories</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={formData.categories.includes(category)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <Label htmlFor={category} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <Button type="submit" variant="herBrown" className="w-full">
                  Continuer
                </Button>
              </form>
            ) : (
              <form onSubmit={handleStep2Submit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="border-herBrown focus:border-herBrown"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                    className="border-herBrown focus:border-herBrown"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    required
                    className="border-herBrown focus:border-herBrown"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="herBrown"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Inscription...' : 'S\'inscrire'}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Vous avez déjà un compte ? </span>
              <Link href="/auth/signin" className="text-sm text-herBrown font-semibold hover:underline">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}