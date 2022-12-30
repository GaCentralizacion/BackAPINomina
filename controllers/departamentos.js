const config = require('../configDb')
const sql = require('mssql')

async function InfoDepartamentos(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('SEL_DEPARTAMENTOS_CORPORATIVO_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ActualizarPorcentaje(){
    try {

        let pool = await sql.connect(config);
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