import cors from '@fastify/cors'
import fastify from 'fastify'

import { todoRoutes } from './routes/todo'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(todoRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
