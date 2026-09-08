const sql = require('mssql')
const { getPool } = require('../db/sqlPool')

async function ReporteBalanza(anio, mes, quincena){
    try {

        let pool = await getPool();
        let peticion = await pool.request()
                                .input('anio',sql.Int, anio)
                                .input('mes', sql.Int, mes)
                                .input('quincena', sql.Int, quincena)
                                .execute('SEL_REPORTE_BALANZA_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    ReporteBalanza
}