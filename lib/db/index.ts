import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('./sqlite.db');
export const db = drizzle(sqlite, { schema });

// Initialize default categories
export async function initializeDatabase() {
  const defaultCategories = [
    { id: '1', name: 'Vêtement', slug: 'vetement', description: 'Clothing and fashion items' },
    { id: '2', name: 'Beauté', slug: 'beaute', description: 'Beauty and cosmetic products' },
    { id: '3', name: 'Accessoires', slug: 'accessoires', description: 'Fashion accessories' },
    { id: '4', name: 'Maison & Déco', slug: 'maison-deco', description: 'Home and decoration items' },
    { id: '5', name: 'Parfum', slug: 'parfum', description: 'Perfumes and fragrances' },
  ];

  try {
    for (const category of defaultCategories) {
      await db.insert(schema.categories).values(category).onConflictDoNothing();
    }
  } catch (error) {
    console.log('Categories already exist or error:', error);
  }
}