const config = require('../configDb')
const sql = require('mssql')

async function fechasPagas(mes, anio){
    try {
        
        let tipo = ''
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('tipo', sql.VarChar(5), tipo)
                                .execute('CONSULTA_FECHAS_PAGA')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ObtieneAsientoContablePaga(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected){
    try {
        
        var poliza   = 4;
        var insertaPoliza  = 0; 

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('poliza',sql.Int, poliza)
                                .input('insertaPoliza', sql.Int, insertaPoliza)
                                .input('workLocat', sql.VarChar(5), lugarTrabajo)
                                .input('fechaPagaSelected', sql.VarChar(10), fechaPagaSelected)
                                .input('tipoSelected', sql.VarChar(5), tipoSelected)
                                .input('frecuenciaSelected', sql.VarChar(5), frecuenciaSelected)
                                .execute('POLIZA_NOSCA_NOTRA_V7')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function LugaresTrabajo(){

    try {
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('LUGARES_DE_TRABAJO_V2')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function GeneraPolizaIndividual(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected, polizaFaltante){
    try {
        
        var poliza   = 4;
        var insertaPoliza  = 1; 

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('poliza',sql.Int, poliza)
                                .input('insertaPoliza', sql.Int, insertaPoliza)
                                .input('workLocat', sql.VarChar(5), lugarTrabajo)
                                .input('fechaPagaSelected', sql.VarChar(10), fechaPagaSelected)
                                .input('tipoSelected', sql.VarChar(5), tipoSelected)
                                .input('frecuenciaSelected', sql.VarChar(5), frecuenciaSelected)
                                .input('polizaFaltante', sql.Int, polizaFaltante)
                                .execute('POLIZA_NOSCA_NOTRA_V7')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ConsultaBitacoraPolizas(mes,anio){
    try {
        

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .execute('CONSULTA_BITACORA_NOSCA')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function FechasPagasBitacora(mes,anio){
    try {
        
        var tipo = '';

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes',sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('tipo', sql.VarChar(5), tipo)
                                .execute('CONSULTA_FECHAS_PAGA_BITACORA')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ConsultaPoliza(lugarTrabajo,idCabecero){
    try {

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('lugarTrabajo',sql.VarChar(5), lugarTrabajo)
                                .input('idCabecero', sql.Int, idCabecero)
                                .execute('SEL_DATOS_POLIZA_SUCURSAL_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ListaEmpresasPoliza() {
    try {
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('LUGAR_TRABAJO_POLIZA_V2')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}


async function usuarios(){

    try{
        let pool = await sql.connect(config)

        let categorias = await pool.request().query('SELECT * FROM USUARIOS u')

        return categorias.recordsets

    }
    catch(err){
        console.log(err);
    }

}

async function ReporteExcelMeta(lugarTrabajo,frecuencia,fechaPaga){
    try {

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('work_locat',sql.VarChar(5), lugarTrabajo)
                                .input('frecuencia', sql.VarChar(4), frecuencia)
                                .input('fechaPaga', sql.VarChar(15), fechaPaga)
                                .execute('SEL_REPORTE_EXCEL_META')

        return peticion.recordsets

    } catch (error) {
        console.log(error);
    }
}

async function ConsultaSabanaMeta(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected){
    try {

        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('lugarTrabajo', sql.VarChar(5), lugarTrabajo)
                                .input('fechasPaga', sql.VarChar(10), fechaPagaSelected)
                                .input('tipo', sql.VarChar(5), tipoSelected)
                                .input('frecuencia', sql.VarChar(5), frecuenciaSelected)
                                .execute('CONSULTA_SABANA_META')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function GruposMeta(){

    try{
        let pool = await sql.connect(config)

        let categorias = await pool.request().query(`

        SELECT  distinct gc.nombre_grupo
        FROM GRUPOS_CONCEPTO gc
        JOIN GRUPOS_CONCEPTODETALLE gc1
        ON gc.id_grupo = gc1.id_grupo
        JOIN MAPA_ACUMULADOS_SABANA mas
        ON gc1.id_concepto = mas.id

        SELECT gc.id_grupo, gc.nombre_grupo, mas.nombreCampo, mas.alias
        FROM GRUPOS_CONCEPTO gc
        JOIN GRUPOS_CONCEPTODETALLE gc1
        ON gc.id_grupo = gc1.id_grupo
        JOIN MAPA_ACUMULADOS_SABANA mas
        ON gc1.id_concepto = mas.id
        order by gc1.id_grupo, gc1.orden`)

        return categorias.recordsets

    }
    catch(err){
        console.log(err);
    }

}

async function CalculoPolizaNomina(mes,anio,fechaNomina,tipoNomina,lugarTrabajo){
    try {
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('mes', sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('fechaNomina', sql.VarChar(10), fechaNomina)
                                .input('tipoNomina', sql.VarChar(5), tipoNomina)
                                .input('lugarTrabajo', sql.VarChar(5), lugarTrabajo)
                                .execute('NUEVO_CALCULO_POLIZAS_NOMINA')

        return peticion.recordsets
    } catch (err) {
        console.log(err);
    }
}

module.exports={
    fechasPagas,
    ObtieneAsientoContablePaga,
    usuarios,
    LugaresTrabajo,
    GeneraPolizaIndividual,
    FechasPagasBitacora,
    ConsultaPoliza,
    ListaEmpresasPoliza,
    ConsultaBitacoraPolizas,
    ReporteExcelMeta,
    ConsultaSabanaMeta,
    GruposMeta,
    CalculoPolizaNomina
}