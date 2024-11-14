import { fastify } from "fastify"
import { DatabaseMemory } from './database/database-memory.js'
import fastifyCors from "@fastify/cors"
// import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabaseMemory()
// const database = new DatabasePostgres()

server.register(fastifyCors, {
  origin: '*',
})

server.post('/respostas', async (request, reply) => {
  const { resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8 } = request.body

  await database.create({
    //title: title, .... (short syntax)
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    resposta5,
    resposta6,
    resposta7,
    resposta8,
  })

  return reply.status(201).send()
})

server.get('/respostas', async (request) => {
  const search = request.query.search

  const respostas = await database.list(search)

  return respostas
})

server.put('/respostas/:id', async (request, reply) => {
  const respostaId = request.params.id
  const { resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8 } = request.body

  await database.update(respostaId, {
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    resposta5,
    resposta6,
    resposta7,
    resposta8,
  })

  return reply.status(204).send()
})

server.delete('/respostas/:id', async (request, reply) => {
  const respostaId = request.params.id

  await database.delete(respostaId)

  return reply.status(204).send()
})


server.listen({
  port: 3000,
})