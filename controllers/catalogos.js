const config = require('../configDb')
const sql = require('mssql')

async function catalogoConceptoSabana(){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .execute('CATALOGO_CONCEPTO_SABANA_SICOSS')

        return peticion.recordsets

    } catch (error) {
        return []
    }
}

async function fechasPagas(anio, mes){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .input('anio',sql.Int,anio)
                                .input('mes' ,sql.Int,mes)
                                .execute('FECHA_PAGAS_SICOSS')

        return peticion.recordsets
    } catch (error) {
        return []
    }
}

async function lugarestrabajo(){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .execute('LUGARES_TRABAJO_SICOSS')

        return peticion.recordsets
    } catch (error) {
        return []
    }
}

async function SicossGrupo(){
    try {
        let pool = await sql.connect(config)

        let categorias = await pool.request().query(`

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
    } catch (error) {
        return []
    }
}

async function PeriodosSicoss(){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .execute('SEL_PERIODOS_SICOSS')

        return peticion.recordset

    } catch (error) {
        console.log(error);
        return []
    }
}

async function TipoNominaSicoss(){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .execute('SEL_TIPO_NOMINA_SICOSS')

        return peticion.recordset

    } catch (error) {
        console.log(error);
        return []
    }
}

async function RelacionWSFCentralizacion(){
    try {
        
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                                .execute('RELACION_WSF_CENTRALIZACION_COMISIONES')

        return peticion.recordset

    } catch (error) {
        console.log(error);
        return []
    }
}

module.exports = {
    catalogoConceptoSabana,
    fechasPagas,
    lugarestrabajo,
    SicossGrupo,
    PeriodosSicoss,
    TipoNominaSicoss,
    RelacionWSFCentralizacion
}