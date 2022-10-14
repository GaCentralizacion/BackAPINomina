const config = require('../configDb')
const sql = require('mssql')

async function Organizaciones(idUsuario, anio){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int, idUsuario)
                                .input('anio',sql.Int, anio)
                                .execute('SEL_Organizaciones_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function Empresas(idUsuario, anio, id_organizacion){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int, idUsuario)
                                .input('anio',sql.Int, anio)
                                .input('id_organizacion',sql.VarChar(10), id_organizacion)
                                .execute('SEL_Empresas_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function anio(){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .execute('SEL_ANIOS')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function Fechas(idUsuario, anio, id_organizacion, idEmpresa){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('id_organizacion',sql.VarChar(10),id_organizacion )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .execute('SEL_Fechas_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function Nomina(idUsuario, anio, id_organizacion, idEmpresa, fecha){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('id_organizacion',sql.VarChar(10),id_organizacion )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('fecha',sql.VarChar(10),fecha )
                                .execute('SEL_Nomina_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function ReporteNomina(idUsuario, anio, id_organizacion, idEmpresa, fecha){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('id_organizacion',sql.VarChar(10),id_organizacion )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('fecha',sql.VarChar(10),fecha )
                                .execute('SEL_ReporteNomina_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function TipoConceptos(idUsuario, anio, id_organizacion, idEmpresa, fecha){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('id_organizacion',sql.VarChar(10),id_organizacion )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('fecha',sql.VarChar(10),fecha )
                                .execute('SEL_TipoConcepto_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function DetalleNomina(idUsuario, anio, fecha, CME_ID_POSITION, CME_N_POSITION){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('fecha',sql.VarChar(10),fecha )
                                .input('CME_ID_POSITION',sql.Int,CME_ID_POSITION )
                                .input('CME_N_POSITION',sql.VarChar(10),CME_N_POSITION )
                                .execute('SEL_DetalleNomina_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function Conceptos(idUsuario,anio,id_organizacion,idEmpresa,fecha,tipo){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('anio',sql.Int,anio )
                                .input('id_organizacion',sql.VarChar(10),id_organizacion )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('fecha',sql.VarChar(10),fecha )
                                .input('tipo',sql.VarChar(10),tipo )
                                .execute('SEL_DetalleNomina_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function GuardarConcepto(idUsuario,id_concepto,value){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('id_concepto',sql.Int,id_concepto )
                                .input('valor',sql.Int,value )
                                .execute('SEL_GuardarConcepto_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function GuardarConceptos(value){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('valor',sql.VarChar(150),value )
                                .execute('SEL_GuardarConceptos_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function UPDCatalogo(idUsuario,idEmpresa,idSucursal,idsubtramite,subtramite,idclasificacion,costo,precio,conUtilidad){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('idSucursal',sql.Int,idSucursal )
                                .input('idsubtramite',sql.Int,idsubtramite )
                                .input('subtramite',sql.VarChar(150),subtramite )
                                .input('idclasificacion',sql.Int,idclasificacion )
                                .input('costo',sql.Int,costo )
                                .input('precio',sql.Int,precio )
                                .input('conUtilidad',sql.Int,conUtilidad )
                                .execute('UPD_Catalogo_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function DELCatalogo(idUsuario,idEmpresa,idSucursal,idsubtramite,estatus){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('idSucursal',sql.Int,idSucursal )
                                .input('idsubtramite',sql.Int,idsubtramite )
                                .input('estatus',sql.Int,estatus )
                                .execute('DEL_Catalogo_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function SelProveedores(idUsuario,idEmpresa,idSucursal){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('idSucursal',sql.Int,idSucursal )
                                .execute('SEL_Proveedor_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function SelTramites(idUsuario,idEmpresa,idSucursal){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('idSucursal',sql.Int,idSucursal )
                                .execute('SEL_Tramites_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

async function INSCatalogo(idUsuario,idEmpresa,idSucursal,subtramite,idclasificacion,idpersona,costo,precio){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idUsuario',sql.Int,idUsuario )
                                .input('idEmpresa',sql.Int,idEmpresa )
                                .input('idSucursal',sql.Int,idSucursal )
                                .input('subtramite',sql.VarChar(150),subtramite )
                                .input('idclasificacion',sql.VarChar(150),idclasificacion )
                                .input('idpersona',sql.Int,idpersona )
                                .input('costo',sql.Decimal(18,2),costo )
                                .input('precio',sql.Decimal(18,2),precio )
                                .execute('SEL_Tramites_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    } 
}

module.exports={
    Organizaciones
    ,Empresas
    ,anio
    ,Fechas
    ,Nomina
    ,ReporteNomina
    ,TipoConceptos
    ,DetalleNomina
    ,Conceptos
    ,GuardarConcepto
    ,GuardarConceptos
    ,UPDCatalogo
    ,DELCatalogo
    ,SelProveedores
    ,SelTramites
    ,INSCatalogo
}