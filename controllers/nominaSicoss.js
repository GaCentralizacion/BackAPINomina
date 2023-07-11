const config = require('../configDb')
const sql = require('mssql')

async function vistaPreviaPoliza(anio,mes,periodoId,periodo,centroId,tipoNomina){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('anio',sql.Int,anio)
        .input('mes',sql.Int,mes)
        .input('periodoId',sql.Int,periodoId)
        .input('periodo',sql.Int,periodo)
        .input('centroId',sql.Int,centroId)
        .input('tipoNomina',sql.Int,tipoNomina)
        .execute('CONSULTA_SABANA_PREVIA_SICOSS')

        return peticion.recordsets

    } catch (error) {
        return []
    }
}

async function CalculoPolizaSicoss(mes, anio, periodoId, periodo, tipoNomina, lugarTrabajo){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .input('mes', sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('periodoId', sql.Int, periodoId)
                                .input('periodo', sql.Int, periodo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('Lw', sql.Int, lugarTrabajo)
                                .execute('CALCULO_POLIZA_SICOSS')

        return peticion.recordsets

    } catch (error) {
        return []
    }
}

async function GruposMetaSICOSS(){

    try{
        let pool = await sql.connect(config)

        let categorias = await pool.request().query(`

        SELECT  distinct gc.nombre_grupo
        FROM GRUPOS_CONCEPTO gc
        JOIN GRUPOS_CONCEPTODETALLE gc1
        ON gc.id_grupo = gc1.id_grupo
        JOIN MAPA_ACUMULADOS_SABANA mas
        ON gc1.id_concepto = mas.id
        where gc.estatus = 1
        --and gc.id_grupo = 2

        SELECT gc.grupoId as id_grupo
        , gc.nombreGrupo as nombre_grupo
        , mas.nombreCampo
        , mas.alias
        FROM GRUPO_CONCEPTOS_SICOSS gc
        JOIN GRUPO_CONCEPTOS_DETALLE_SICOSS gcd
          ON gc.grupoId = gcd.grupoId
        JOIN MAPA_ACUMULADOS_SABANA_SICOSS mas
        ON gcd.Concepto_ID = mas.idRelacion
        where gc.estatus = 1
        ORDER BY gc.grupoId, gcd.orden`)

        return categorias.recordsets

    }
    catch(err){
        console.log(err);
        return []
    }

}

async function ConsultaAsientoPolizaBproSICOSS(idSucursal, fechaPaga, tipo, periodo,tipoNomina, esAbierta){
    try {
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idSucursal', sql.Int, idSucursal)
                                .input('fechaPaga', sql.VarChar(10), fechaPaga)
                                .input('tipo', sql.Int, tipo)
                                .input('periodo',sql.Int, periodo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('esAbierta',sql.Int, esAbierta)
                                .execute('CONSULTA_ASIENTO_POLIZA_BPRO_SICOSS')

        return peticion.recordsets
    } catch (err) {
        console.log(err);
        return []
    }
}

async function ConsultaBitacoraPolizasSICOSS(mes, anio){

    try{

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .execute('CONSULTA_BITACORA_NOSCA_SICOSS')
    
        return peticion.recordsets

    }catch(err){
        console.log(err);
        return []
    }

}

async function ConsultaPolizaSICOSS(lugarTrabajo,idCabecero){
    try {

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('lugarTrabajo',sql.VarChar(5), lugarTrabajo)
                                .input('idCabecero', sql.Int, idCabecero)
                                .execute('SEL_DATOS_POLIZA_SUCURSAL_SICOSS_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
        return []
    }
}

async function ConsultaAsientoPolizaBproEmpleadoSICOSS(idSucursal, fechaPaga, tipo,tipoNomina, esAbierta){
    try {
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idSucursal', sql.Int, idSucursal)
                                .input('fechaPaga', sql.VarChar(10), fechaPaga)
                                .input('tipo', sql.Int, tipo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('esAbierta',sql.Int, esAbierta)
                                .execute('CONSULTA_ASIENTO_POLIZA_BPRO_EMPLEADO_SICOSS')

        return peticion.recordsets
    } catch (err) {
        console.log(err);
        return []
    }
}

async function CalculoPolizaAbiertaSicoss(mes, anio, periodoId, periodo, tipoNomina, lugarTrabajo){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .input('mes', sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('periodoId', sql.Int, periodoId)
                                .input('periodo', sql.Int, periodo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('Lw', sql.Int, lugarTrabajo)
                                .execute('CALCULO_POLIZA_ABIERTA_SICOSS')

        return peticion.recordsets

    } catch (error) {
        return []
    }
}

async function InsertaBorraFechaPaga(periodoId,periodo,tipoNomina,fechInicio,fechFin,insertaBorra){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('periodoId', sql.Int, periodoId)
        .input('periodo', sql.Int, periodo)
        .input('tipoNomina', sql.Int, tipoNomina)
        .input('fechInicio', sql.VarChar(10), fechInicio)
        .input('fechFin', sql.VarChar(10), fechFin)
        .input('insertaBorra', sql.Int, insertaBorra)
        .execute('INS_FECHA_PAGA_SICOSS')

        return peticion.recordset

    } catch (error) {
        return []
    }
}


module.exports = {
    vistaPreviaPoliza
    ,CalculoPolizaSicoss
    ,GruposMetaSICOSS
    ,ConsultaAsientoPolizaBproSICOSS
    ,ConsultaBitacoraPolizasSICOSS
    ,ConsultaPolizaSICOSS
    ,ConsultaAsientoPolizaBproEmpleadoSICOSS
    ,CalculoPolizaAbiertaSicoss
    ,InsertaBorraFechaPaga
}