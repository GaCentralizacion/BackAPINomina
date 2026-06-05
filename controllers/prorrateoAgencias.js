const config = require('../configDb')
const sql = require('mssql')

async function InfoDepartamentosAgencias(){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .execute('SEL_DEPARTAMENTOS_AGENCIAS_PRORRATEO_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function detalleAgencias(idAgencias){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .input('idDepartamento', sql.Int,idAgencias )
                            .execute('SEL_DEPARTAMENTOS_AGENCIAS_FLOTILLA_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function eliminaSucFlotillaAgencia(idDetalleFlotilla,idUsuario){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .input('idDetalleFlotilla', sql.Int,idDetalleFlotilla )
                            .input('idUsuario', sql.Int,idUsuario )
                            .execute('UPD_COMISIONES_FLOTILLA_SUCURSAL_AGENCIA_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function insertarSucFlotillaAgencia(IdFlotilla,idSucursal,porcentaje,idUsuario,porSucursal){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .input('IdFlotilla', sql.Int,IdFlotilla )
                            .input('idSucursal', sql.Int,idSucursal )
                            .input('porcentaje', sql.Decimal(18,2),porcentaje )
                            .input('idUsuario', sql.Int,idUsuario )
                            .input('porSucursal', sql.Int,porSucursal )
                            .execute('INS_FLOTILLA_SUCURSAL_AGENCIA_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function DepartamentoAgencias(){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .execute('DEPARTAMENTO_AGENCIAS_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

async function AgregaEliminaAgencia(id_departamento,opcion,idUsuario){
    try {
        let pool = await sql.connect(config)
        let peticion = await pool.request()
                            .input('id_departamento', sql.Int,id_departamento )
                            .input('opcion', sql.Int,opcion )
                            .input('idUsuario', sql.Int(18,2),idUsuario )
                            .execute('UPD_AGREGA_ELIMINA_AGENCIA_SP')
        return peticion.recordset
    }
    catch (error) {
        console.log(error)
    }
}

module.exports={
    InfoDepartamentosAgencias,
    detalleAgencias,
    eliminaSucFlotillaAgencia,
    insertarSucFlotillaAgencia,
    DepartamentoAgencias,
    AgregaEliminaAgencia

}