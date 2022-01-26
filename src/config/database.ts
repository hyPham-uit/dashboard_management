import {ConnectionOptions} from 'typeorm'
import path from "path";
// import {User, Post, Comment} from '../models'
const isCompiled = path.extname(__filename).includes('js')

const config : ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5433,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "postgres",
  entities: [
    `src/models/**/*.${isCompiled ? "js" : "ts"}`
  ],
  synchronize: !process.env.POSTGRES_SYNC || true,
}

export default config