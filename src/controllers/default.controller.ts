import express, {type ErrorRequestHandler} from 'express'

export const defRouter = express.Router()


export const errHandler: ErrorRequestHandler= (err, req, res, next)=> {
  if (res.headersSent)
    return next(err)

  res.status(500)
  res.json({error: 'server error'})

}

defRouter.get('/', (req, res)=> {
  res.json({message: 'hello'})
})

defRouter.get('/health', (req, res)=> {
  res.status(200).json({status: 'healthy'})
})

defRouter.use(errHandler)

