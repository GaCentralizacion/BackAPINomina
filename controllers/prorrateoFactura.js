const sql = require('mssql')
const { getPool } = require('../db/sqlPool')

async function facturas(){
    try {
        let pool = await getPool();
        let peticion = await pool.request()
                                    .execute('SEL_FACTURASPRORRATEO_SP')

        return peticion.recordsets
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    facturas
}