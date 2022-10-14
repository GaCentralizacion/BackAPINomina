const config = require('../configDb')
const sql = require('mssql')

async function InfoPorcentajes(mes, anio){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .execute('SEL_PORCENTAJES_SUCURSAL_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function Sucursales(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('SEL_SUCURSALES_NOMINA_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ActualizarPorcentaje(consecutivo, mes, anio, porcentaje,idUsuario){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('consecutivo',sql.Int, consecutivo)
                                .input('mes',sql.Int, mes)
                                .input('anio',sql.Int, anio)
                                .input('porcentaje',sql.Int, porcentaje)
                                .input('idUsuario',sql.Int, idUsuario)
                                .execute('UPD_SUCURSAL_PORCENTAJE_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

async function GuardarPorcentaje(mes, anio, porcentaje, idUsuario,idSucursal){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio',sql.Int, anio)
                                .input('porcentaje',sql.Int, porcentaje)
                                .input('idUsuario',sql.Int, idUsuario)
                                .input('idSucursal',sql.Int, idSucursal)
                                .execute('INS_SUCURSAL_PORCENTAJE_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

async function InfoPorcentajesServicio(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('SEL_PORCENTAJES_SERVICIOS_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

async function ActualizarPorcentajeServicio(consecutivo, porcentaje, idUsuario){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('consecutivo',sql.Int, consecutivo)
                                .input('porcentaje',sql.Decimal(18,2), porcentaje)
                                .input('idUsuario',sql.Int, idUsuario)
                                .execute('UPD_SUCURSAL_PORCENTAJE_SERVICIO_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

async function GuardarPorcentajeServicio(porcentaje, idUsuario, idSucursal){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('porcentaje',sql.Int, porcentaje)
                                .input('idUsuario',sql.Decimal(18,2), idUsuario)
                                .input('idSucursal',sql.Int, idSucursal)
                                .execute('INS_SUCURSAL_PORCENTAJE_SERVICIO_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

module.exports={
    InfoPorcentajes,
    Sucursales,
    ActualizarPorcentaje,
    GuardarPorcentaje,
    InfoPorcentajesServicio,
    ActualizarPorcentajeServicio,
    GuardarPorcentajeServicio
}