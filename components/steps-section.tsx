import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function StepsSection() {
  const steps = [
    {
      number: '01',
      title: "S'inscrire au HER",
      description: 'Créez votre compte vendeur',
      action: "S'inscrire",
      href: '/auth/signup'
    },
    {
      number: '02',
      title: 'Ajoutez vos Articles',
      description: 'Mettez en ligne vos produits'
    },
    {
      number: '03',
      title: 'Recevez vos commandes',
      description: 'Gérez vos ventes facilement'
    }
  ]

  return (
    <div className="bg-lightBeige py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-herBlack mb-4">
            Rejoignez-nous et vendez
            <br />
            vos articles
          </h2>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex items-start gap-6 flex-1">
                <div className="text-6xl md:text-8xl font-bold text-herBrown leading-none">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-herBlack mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {step.description}
                  </p>
                  {step.action && step.href && (
                    <Link href={step.href}>
                      <Button variant="herBrown" size="lg">
                        {step.action}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}