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

async function ConfigMarkDevCenter(mes, anio, idDepto){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio',sql.Int, anio)
                                .input('idDepto',sql.VarChar(5), idDepto)
                                .execute('CONF_MARK_DEV_CENTER_COMISIONES_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function AgregaEliminaConfMarkDev(idDepto, idEmpresa, idSucursal,anio,mes, accion){
    try{
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idDepto',sql.VarChar(5), idDepto)
                                .input('idEmpresa',sql.Int, idEmpresa)
                                .input('idSucursal',sql.Int, idSucursal)
                                .input('anio',sql.Int, anio)
                                .input('mes',sql.Int, mes)
                                .input('accion',sql.Int, accion)
                                .execute('AGREGA_ELIMINA_CONFIG_MARK_DEV_COMISIONES')

        return peticion.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function ConfiguracionRangoNuevosComisiones(mes,anio,limInferior,limSuperior,porcentaje,accion){

    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input("mes",sql.Int,mes)
        .input("anio",sql.Int,anio)
        .input("limInferior",sql.Decimal(18,2),limInferior)
        .input("limSuperior",sql.Decimal(18,2),limSuperior)
        .input("porcentaje",sql.Decimal(18,2),porcentaje)
        .input("accion",sql.Int,accion)
        .execute('CONFIGURACION_RANGO_NUEVOS_COMISIONES')
    
        return peticion.recordset
    } catch (error) {
        console.log(error);
        return []
        
    }

}

async function ConfiguracionRangoSemiNuevosComisiones(mes,anio,limInferior,limSuperior,monto,accion){

    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input("mes",sql.Int,mes)
        .input("anio",sql.Int,anio)
        .input("limInferior",sql.Decimal(18,2),limInferior)
        .input("limSuperior",sql.Decimal(18,2),limSuperior)
        .input("monto",sql.Decimal(18,2),monto)
        .input("accion",sql.Int,accion)
        .execute('CONFIGURACION_RANGO_SEMINUEVOS_COMISIONES')
    
        return peticion.recordset
    } catch (error) {
        console.log(error);
        return []
        
    }

}

async function SucursalesComisiones (){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request().execute('SUCURSALES_COMISIONES')

        return peticion.recordset
    } catch (error) {
        console.log(error)
        return []
    }
}


module.exports={
    InfoDepartamentosComisiones,
    ActualizarPorcentaje,
    DetalleFlotillas,
    EliminaSucFlotilla,
    InsertarSucFlotilla,
    ConfigMarkDevCenter,
    AgregaEliminaConfMarkDev,
    ConfiguracionRangoNuevosComisiones,
    ConfiguracionRangoSemiNuevosComisiones,
    SucursalesComisiones
}