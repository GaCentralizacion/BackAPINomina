const config = require('../configDb')
const sql = require('mssql')

async function ReporteBalanza(anio, mes, quincena){
    try {

        let pool = await sql.connect(config);
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