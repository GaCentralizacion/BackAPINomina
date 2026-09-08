const sql = require('mssql')
const config = require('../configDb')

let poolPromise

async function getPool() {
    if (!poolPromise) {
        const pool = new sql.ConnectionPool(config)

        pool.on('error', error => {
            console.error('Error en el pool de SQL Server:', error)
            poolPromise = undefined
        })

        poolPromise = pool.connect().catch(error => {
            poolPromise = undefined
            throw error
        })
    }

    return poolPromise
}

async function closePool() {
    if (!poolPromise) {
        return
    }

    const activePoolPromise = poolPromise
    poolPromise = undefined

    try {
        const pool = await activePoolPromise
        await pool.close()
    } catch (error) {
        console.error('Error al cerrar el pool de SQL Server:', error)
    }
}

module.exports = { getPool, closePool }
