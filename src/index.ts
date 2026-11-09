import express, { type Express } from "express"


export const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
  res.json({message: 'hello from example app'})
})

app.get('/health', (req, res)=> {
  res.status(200).json({status: 'healthy'})
})

export const server = app.listen(port, ()=> {
  console.log(`server running on port ${port}`)
})