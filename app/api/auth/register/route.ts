import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { generateId } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { email, password, brandName, categories, role = 'SELLER' } = await request.json()

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Un utilisateur avec cet email existe déjà' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const userId = generateId()
    await db.insert(users).values({
      id: userId,
      email,
      password: hashedPassword,
      brandName,
      categories: JSON.stringify(categories),
      role: role as 'CLIENT' | 'SELLER' | 'ADMIN',
      status: role === 'SELLER' ? 'PENDING' : 'APPROVED',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })

    return NextResponse.json(
      { message: 'Utilisateur créé avec succès' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    )
  }
}