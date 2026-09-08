
const Server = require('./models/server')
const { closePool } = require('./db/sqlPool')

const server = new Server();

async function shutdown(signal) {
    console.log(`Cerrando la aplicacion por ${signal}`)
    await closePool()
    process.exit(0)
}

process.once('SIGINT', () => shutdown('SIGINT'))
process.once('SIGTERM', () => shutdown('SIGTERM'))

server.listen()
