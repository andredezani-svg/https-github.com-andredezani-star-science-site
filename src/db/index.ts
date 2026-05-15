import { drizzle } from 'drizzle-orm/neon-serverless'
import { Pool } from '@neondatabase/serverless'

const url = process.env.DATABASE_URL || 'postgresql://localhost:5432/starsciencelab'

const pool = new Pool({ connectionString: url })

const db = drizzle(pool)

export default db
