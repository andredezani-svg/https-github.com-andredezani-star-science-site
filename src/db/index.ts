import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const url = process.env.DATABASE_URL || 'postgresql://localhost:5432/starsciencelab'

const pool = new Pool({ connectionString: url, ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false })

const db = drizzle(pool)

export default db
