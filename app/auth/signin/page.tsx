'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email ou mot de passe incorrect')
      } else {
        const session = await getSession()
        if (session?.user?.role) {
          router.push(`/${session.user.role.toLowerCase()}/dashboard`)
        } else {
          router.push('/')
        }
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
            <CardTitle className="text-2xl font-Bodoni">Se connecter</CardTitle>
            <CardDescription>
              Connectez-vous à votre compte HER
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-herBrown focus:border-herBrown"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/auth/forgot-password" className="text-sm text-herBrown hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">Pas de compte ? </span>
              <Link href="/auth/signup" className="text-sm text-herBrown font-semibold hover:underline">
                S'inscrire
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}