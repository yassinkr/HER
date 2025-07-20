import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
import type { AdapterAccount } from '@auth/core/adapters';

// NextAuth tables
export const users = sqliteTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
  image: text('image'),
  role: text('role', { enum: ['CLIENT', 'SELLER', 'ADMIN'] }).default('CLIENT'),
  status: text('status', { enum: ['PENDING', 'APPROVED', 'REJECTED'] }).default('PENDING'),
  brandName: text('brandName'),
  categories: text('categories'), // JSON string of selected categories
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
  updatedAt: integer('updatedAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
});

export const accounts = sqliteTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = sqliteTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
});

export const verificationTokens = sqliteTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: integer('expires', { mode: 'timestamp_ms' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

// Application tables
export const categories = sqliteTable('category', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
});

export const products = sqliteTable('product', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: integer('price').notNull(), // Price in cents
  originalPrice: integer('originalPrice'), // For promotions
  stock: integer('stock').notNull().default(0),
  isActive: integer('isActive', { mode: 'boolean' }).notNull().default(true),
  images: text('images'), // JSON string of image URLs
  categoryId: text('categoryId')
    .notNull()
    .references(() => categories.id),
  sellerId: text('sellerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
  updatedAt: integer('updatedAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
});

export const orders = sqliteTable('order', {
  id: text('id').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id),
  status: text('status', { enum: ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'] }).default('PENDING'),
  total: integer('total').notNull(), // Total in cents
  shippingAddress: text('shippingAddress').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
  updatedAt: integer('updatedAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
});

export const orderItems = sqliteTable('orderItem', {
  id: text('id').notNull().primaryKey(),
  orderId: text('orderId')
    .notNull()
    .references(() => orders.id, { onDelete: 'cascade' }),
  productId: text('productId')
    .notNull()
    .references(() => products.id),
  quantity: integer('quantity').notNull(),
  price: integer('price').notNull(), // Price at time of order
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => Date.now()),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  products: many(products),
  orders: many(orders),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, { fields: [products.categoryId], references: [categories.id] }),
  seller: one(users, { fields: [products.sellerId], references: [users.id] }),
  orderItems: many(orderItems),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, { fields: [orders.userId], references: [users.id] }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
  product: one(products, { fields: [orderItems.productId], references: [products.id] }),
}));