import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function todoRoutes(app: FastifyInstance) {
  app.get('/todos', async (request, reply) => {
    const todos = await prisma.todo.findMany()

    return todos
  })

  app.get('/todos/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const todo = await prisma.todo.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return todo
  })

  app.post('/todos', async (request, reply) => {
    const bodySchema = z.object({
      description: z.string(),
    })

    const { description } = bodySchema.parse(request.body)

    const todo = await prisma.todo.create({
      data: {
        description,
        userId: 'f765dfe3-5608-4f89-8660-c6434aa9fd0c',
      },
    })

    return todo
  })

  app.put('/todos/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      description: z.string(),
      done: z.boolean(),
    })

    const { description, done } = bodySchema.parse(request.body)

    let todo = await prisma.todo.findUniqueOrThrow({
      where: {
        id,
      },
    })

    todo = await prisma.todo.update({
      where: { id },
      data: {
        description,
        done,
      },
    })

    return todo
  })
  app.delete('/todos/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.body)

    await prisma.todo.delete({
      where: { id },
    })
  })
}
