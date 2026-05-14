import { pgTable, uuid, text, timestamp, boolean, decimal, foreignKey, index } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: text('role', { enum: ['customer', 'admin'] }).default('customer').notNull(),
  avatar: text('avatar'),
  locale: text('locale').default('en'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const sessions = pgTable('sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const contacts = pgTable('contacts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  ip: text('ip'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const uploads = pgTable('uploads', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  fileKey: text('file_key').notNull(),
  fileType: text('file_type').notNull(),
  fileSize: decimal('file_size').notNull(),
  scanned: boolean('scanned').default(false),
  scanPassed: boolean('scan_passed'),
  uploadedAt: timestamp('uploaded_at').defaultNow().notNull(),
})

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  status: text('status', { enum: ['pending', 'in_progress', 'completed', 'cancelled'] }).default('pending').notNull(),
  total: decimal('total', { precision: 10, scale: 2 }),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => [
  index('idx_orders_user_id').on(table.userId),
  index('idx_orders_status').on(table.status),
])

export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  content: text('content').notNull(),
  category: text('category'),
  authorId: uuid('author_id').references(() => users.id),
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => [
  index('idx_blog_posts_slug').on(table.slug),
  index('idx_blog_posts_published').on(table.published),
])

export const emailQueue = pgTable('email_queue', {
  id: uuid('id').defaultRandom().primaryKey(),
  to: text('to').notNull(),
  subject: text('subject').notNull(),
  html: text('html').notNull(),
  status: text('status', { enum: ['pending', 'sent', 'failed'] }).default('pending').notNull(),
  attempts: decimal('attempts').default('0').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
