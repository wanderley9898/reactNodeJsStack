import Fastify from 'fastify';

async function bootstrap(){
  const fastify = Fastify({
    logger: true,  // habilita o fastify para logs da aplicação
  })

  fastify.get('/to', () => {
    return { tarefa: "sdasdasdsa"}
  })

  await fastify.listen({port: 3333})
}

bootstrap()