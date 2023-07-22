const config = require('../configDb')
const sql = require('mssql')

async function selFechaEjecucion(anio,mes){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .input('anio', sql.Int,anio )
                            .input('mes', sql.Int,mes )
                            .execute('SEL_FECHA_REPERCUSION')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function resumenInsertaBalanzaCentralizado(mes, anio, idDetalle,inserta){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('mes', sql.Int,mes )
        .input('anio', sql.Int,anio )
        .input('idDetalle', sql.Int,idDetalle )
        .input('inserta', sql.Int,inserta )
        .execute('REPORTE_BALANZA_REPERCUSION_COMPLETO')
        return peticion.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function balanzaComisionesBono( mes, anio, quincena){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('mes',sql.Int, mes)
        .input('anio', sql.Int, anio)
        .input('quincena', sql.Int, quincena)
        .execute('REPORTE_BALANZA_COMISIONES_BONO_REPERCUSION')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}

async function consultaOrdenesCompra(fecha){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('fecha',sql.VarChar(10), fecha)
        .execute('ORDENES_COMPRA_REPERCUSION')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}

async function consultaFacturas(fecha){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('fecha',sql.NVarChar(255), fecha)
        .execute('CONSULTA_FACTURAS_REPERCUSION')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}

async function consultaOCError(oc,sucursal){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('oc',sql.VarChar(100), oc)
        .input('sucursal',sql.VarChar(150), sucursal)
        .execute('ORDENES_COMPRA_ERROR_REPERCUSION')

        return peticion.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function consultaFechaFaturacion(mes,anio,quincena,inserta){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('mes',sql.Int, mes)
        .input('anio',sql.Int, anio)
        .input('quincena',sql.Int, quincena)
        .input('inserta',sql.Int, inserta)
        .execute('SOLICITUD_FACTURACION_REPERCUSION')

        return peticion.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function parametrosNotificacion(tabla){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('tabla',sql.VarChar(150), tabla)
        .execute('OBTIENE_PARAMETROS_V2')

        return peticion.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function prorrateoBalanza(mes,anio,quincena,dia){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('mes',sql.Int, mes)
        .input('anio',sql.Int, anio)
        .input('idDetalle',sql.Int, quincena)
        .input('dia',sql.Int, dia)
        .execute('INS_GASTOS_BALANZA_SP')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}

async function rangoPagoSeminuevoComisiones(anio,mes){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('anio',sql.Int, anio)
        .input('mes',sql.Int, mes)
        .execute('RANGO_PAGO_SEMINUEVOS_COMISIONES_SP')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}

async function RangoPagoNuevoComisiones(anio,mes){
    try{
        let pool = await sql.connect(config)
        let peticion = await pool.request()
        .input('anio',sql.Int, anio)
        .input('mes',sql.Int, mes)
        .execute('RANGO_PAGO_NUEVOS_COMISIONES_SP')

        return peticion.recordsets
    }
    catch(error){
        console.log(error)
    }
}


module.exports={
    selFechaEjecucion,
    resumenInsertaBalanzaCentralizado,
    balanzaComisionesBono,
    consultaOrdenesCompra,
    consultaFacturas,
    consultaOCError,
    consultaFechaFaturacion,
    parametrosNotificacion,
    prorrateoBalanza,
    rangoPagoSeminuevoComisiones,
    RangoPagoNuevoComisiones
}