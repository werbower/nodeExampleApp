import express, { type Express } from "express"
import { defRouter } from "./controllers/default.controller.ts"


export const app: Express = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use('/', defRouter)

export const server = app.listen(port, ()=> {
  console.log(`server running on port ${port}`)
})