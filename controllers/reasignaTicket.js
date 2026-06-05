const config = require('../configDb')
const sql = require('mssql')

async function tickets(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
        .execute('GET_TICKETS_BPRO')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function registraBitacora(ticket, idResponsable, token, jsonEnviado, respuestaApi, opcion){

    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
        .input('ticket',sql.VarChar(38),ticket)
        .input('idResponsable',sql.Int,idResponsable)
        .input('token',sql.NVarChar(sql.MAX),token)
        .input('jsonEnviado',sql.NVarChar(sql.MAX),jsonEnviado)
        .input('respuestaApi',sql.NVarChar(sql.MAX),respuestaApi)
        .input('opcion',sql.Int,opcion)
        .execute('REGITRA_BITACORA_TICKET_REASIGNADO')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }

}

module.exports={
    tickets,
    registraBitacora
}