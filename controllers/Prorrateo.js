const sql = require('mssql')
const { getPool } = require('../db/sqlPool')


async function EmpleadosActivosSucursal(Centro_ID) {
    try {
        const pool = await getPool();
        let peticion = await pool.request()
                                .input('Centro_ID', sql.Int, Centro_ID)
                                .execute('EMPLEADOS_ACTIVOS_SICOSS')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function SucursalProrrateoConcepto() {
    try {
        const pool = await getPool();
        let peticion = await pool.request()
                                .execute('SUCURSAL_PRORRATEO_CONCEPTO')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function InsertaProrrateo(idRh,idCentro_Id,Centro_Id_Prorrateo,porcentaje) {
    try {
        const pool = await getPool();
        let peticion = await pool.request()
                                .input('idRh', sql.Int, idRh)
                                .input('Centro_Id', sql.Int, idCentro_Id)
                                .input('Centro_Id_Prorrateo', sql.Int, Centro_Id_Prorrateo)
                                .input('porcentaje', sql.Decimal(18,2), porcentaje)
                                .execute('INS_PRORRATEO_NUEVO')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function DetalleProrrateoEmpleado(idRh) {
    try {
        const pool = await getPool();
        let peticion = await pool.request()
                                .input('idRh', sql.Int, idRh)
                                .execute('SEL_PRORRATEO_NUEVO_EMPLEADO')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function EliminaProrrateoEmpleado(idRh, id){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('idRh', sql.Int, idRh)
        .input('id', sql.Int, id)
        .execute('DEL_BORRA_PRORRATEO_EMPLEADO')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function ProrrateosSucursal(Centro_Id){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('Centro_Id', sql.Int, Centro_Id)
        .execute('SEL_PRORRATEO_SUCURSAL')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function SucursalProrrateoDisponible(){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .execute('SEL_SUCURSAL_PRORRATEO_DISPONIBLE')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function ConceptosProrrateoSicoss(Centro_Id_activo,Centro_Id){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('Centro_Id_activo', sql.Int, Centro_Id_activo)
        .input('Centro_Id', sql.Int, Centro_Id)
        .execute('SEL_CONCEPTOS_PRORRATEO_SICOSS')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function ValidaCuentaContableProrrateo(dirIp,nombreBaseDatos,cuentaContable){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('dirIp', sql.VarChar(50), dirIp)
        .input('nombreBaseDatos', sql.VarChar(100), nombreBaseDatos)
        .input('cuentaContable', sql.VarChar(50), cuentaContable)
        .execute('VALIDA_CUENTACONTABLE_PRORRATEO')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}


async function InsConceptosProrrateoSicoss(Centro_Id_Activo,Centro_Id,grupoId,nombreGrupo,DescripcionBPRO,estatus,cuenta){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('Centro_Id_Activo', sql.Int, Centro_Id_Activo)
        .input('Centro_Id', sql.Int, Centro_Id)
        .input('grupoId', sql.Int, grupoId)
        .input('nombreGrupo', sql.VarChar(50), nombreGrupo)
        .input('DescripcionBPRO', sql.VarChar(152), DescripcionBPRO)
        .input('estatus', sql.Int, estatus)
        .input('cuenta', sql.VarChar(100), cuenta)
        .execute('INS_CONCEPTOS_PRORRATEO_SICOSS')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

async function BuscaCuentaContable(Centro_Id_prorrateo,Centro_Id){
    try {
        const pool = await getPool();
        let peticion = await pool.request()
        .input('Centro_Id_prorrateo', sql.Int, Centro_Id_prorrateo)
        .input('Centro_Id', sql.Int, Centro_Id)
        .execute('BUSQUEDACUENTACONTABLE')

        let resultado = peticion.recordset
        return resultado

    } catch (err) {
        console.log(err);
    }
}

module.exports={
    EmpleadosActivosSucursal,
    SucursalProrrateoConcepto,
    InsertaProrrateo,
    DetalleProrrateoEmpleado,
    EliminaProrrateoEmpleado,
    ProrrateosSucursal,
    SucursalProrrateoDisponible,
    ConceptosProrrateoSicoss,
    ValidaCuentaContableProrrateo,
    InsConceptosProrrateoSicoss,
    BuscaCuentaContable
}