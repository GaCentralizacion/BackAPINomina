const config = require('../configDb')
const sql = require('mssql')
const poolPromise = sql.connect(config)

function normalizeToSqlXml(value, rootNode = 'data') {
    if (value === null || value === undefined) {
        return `<${rootNode} />`
    }

    const raw = typeof value === 'string' ? value.trim() : JSON.stringify(value)

    // Si ya parece XML, se manda tal cual para respetar estructura original.
    if (raw.startsWith('<')) {
        return raw
    }

    // Evita romper CDATA cuando el contenido incluye la secuencia de cierre.
    const safeCdata = raw.replace(/\]\]>/g, ']]]]><![CDATA[>')
    return `<${rootNode}><![CDATA[${safeCdata}]]></${rootNode}>`
}

async function polizasPorConciliar() {
    try {
        const pool = await poolPromise
        let peticion = await pool.request()
                                .execute('SEL_POLIZAS_POR_CONCILIAR_CPA')

        let resultado = peticion.recordset

        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function extractor(mes, anio, periodoId, periodo, tipoNomina, lugarTrabajo){
    try {
        const pool = await poolPromise
        let peticion = await pool.request()
                                .input('mes', sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('periodoId', sql.Int, periodoId)
                                .input('periodo', sql.Int, periodo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('centroId', sql.Int, lugarTrabajo)
                                .execute('EXTRACTOR_DATOS_CPA')

        return peticion.recordsets

    } catch (error) {
        console.log(error);
    }
}

async function inserta_bitacora_cpa(mes, anio, periodoId, periodo, tipoNomina, lugarTrabajo,tokengenerado,jsonEnvio){
    try {
        const xmlEnvio = normalizeToSqlXml(jsonEnvio, 'jsonEnvio')

        const pool = await poolPromise
        let peticion = await pool.request()
                                .input('mes', sql.Int, mes)
                                .input('anio', sql.Int, anio)
                                .input('periodoId', sql.Int, periodoId)
                                .input('periodo', sql.Int, periodo)
                                .input('tipoNomina',sql.Int, tipoNomina)
                                .input('centroId', sql.Int, lugarTrabajo)
                                .input('tokengenerado', sql.NVarChar(200), tokengenerado)
                                .input('jsonEnvio', sql.Xml, xmlEnvio)
                                .execute('INS_BITACORA_CONSUMO_API_CPA')

        return peticion.recordsets[0]

    } catch (error) {
        console.log(error);
    }
}

async function actualiza_bitacora_cpa(token, jsonRespuesta, payload, rfcEmisor, link, error,errorDetalle,punto){
    try {
        const xmlRespuesta = normalizeToSqlXml(jsonRespuesta, 'jsonRespuesta')

        const pool = await poolPromise
        let peticion = await pool.request()
                                .input('token', sql.NVarChar(200), token)
                                .input('jsonRespuesta', sql.Xml, xmlRespuesta)
                                .input('payload', sql.NVarChar(255), payload)
                                .input('rfcEmisor', sql.NVarChar(20), rfcEmisor)
                                .input('link',sql.NVarChar(255), link)
                                .input('error', sql.NVarChar(255), error)
                                .input('errorDetalle', sql.NVarChar(255), errorDetalle)
                                .input('punto', sql.NVarChar(50), punto)
                                .execute('UPD_BITACORA_CONSUMO_API_CPA')

        return peticion.recordsets[0]

    } catch (error) {
        console.log(error);
    }
}

module.exports={
    polizasPorConciliar,
    extractor,
    inserta_bitacora_cpa,
    actualiza_bitacora_cpa
}
