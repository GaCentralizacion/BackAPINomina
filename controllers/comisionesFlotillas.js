const config = require('../configDb')
const sql = require('mssql')

async function InfoDepartamentosComisiones(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('SEL_DEPARTAMENTOS_COMISIONES_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ActualizarPorcentaje(iddepartamento, estatus, idUsuario){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('iddepartamento',sql.Int, iddepartamento)
                                .input('estatus',sql.Int, estatus)
                                .input('idUsuario',sql.Int, idUsuario)
                                .execute('UPD_DEPARTAMENTO_PORCENTAJE_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function DetalleFlotillas(idFlotilla){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idFlotilla',sql.Int, idFlotilla)
                                .execute('SEL_DEPARTAMENTOS_COMISIONES_FLOTILLA_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function EliminaSucFlotilla(idDetalleFlotilla, idUsuario){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idDetalleFlotilla',sql.Int, idDetalleFlotilla)
                                .input('idUsuario',sql.Int, idUsuario)
                                .execute('UPD_COMISIONES_FLOTILLA_SUCURSAL_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function InsertarSucFlotilla(IdFlotilla,idSucursal,porcentaje,idUsuario){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('IdFlotilla',sql.Int, IdFlotilla)
                                .input('idSucursal',sql.Int, idSucursal)
                                .input('porcentaje',sql.Decimal(18,2), porcentaje)
                                .input('idUsuario',sql.Int, idUsuario)
                                .execute('INS_COMISIONES_FLOTILLA_SUCURSAL_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}


module.exports={
    InfoDepartamentosComisiones,
    ActualizarPorcentaje,
    DetalleFlotillas,
    EliminaSucFlotilla,
    InsertarSucFlotilla
}