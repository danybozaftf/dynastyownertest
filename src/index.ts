import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getCommits } from './handlers'

dotenv.config()

const port = process.env.PORT || 8080

const app = Express()
app.use(cors())
app.get('/commits', getCommits)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
