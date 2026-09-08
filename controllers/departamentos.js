const sql = require('mssql')
const { getPool } = require('../db/sqlPool')

async function InfoDepartamentos(){
    try {
        
        let pool = await getPool();
        let peticion = await pool.request()
                                .execute('SEL_DEPARTAMENTOS_CORPORATIVO_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ActualizarPorcentaje(){
    try {

        let pool = await getPool();
        let peticion = await pool.request()
                                .input('iddepartamento',sql.Int, iddepartamento)
                                .input('estatus', sql.Int, estatus)
                                .input('idUsuario', sql.Int, idUsuario)
                                .execute('UPD_DEPARTAMENTO_PORCENTAJE_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    InfoDepartamentos,
    ActualizarPorcentaje
}