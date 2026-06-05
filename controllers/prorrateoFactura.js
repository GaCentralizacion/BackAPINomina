const config = require('../configDb')
const sql = require('mssql')

async function facturas(){
    try {
        let pool = await sql.connect(config);
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