const config = require('../configDb')
const sql = require('mssql')

async function permisos(User, pass){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('User',sql.VarChar(10), User)
                                .input('pass', sql.VarChar(10), pass)
                                .execute('SEL_ACCESO_LOGIN_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function usuarioLogeado(idEmpleado){
    try {
        
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idEmpleado',sql.Int, idEmpleado)
                                .execute('SEL_EMPLEADO_SP')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function menuNomina(idRol){
    try {
                
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('idRol',sql.Int, idRol)
                                .execute('SEL_MENU_NOMINA')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}

async function menuNominaDetalle(items,idRol){
    try {
                
        let pool = await sql.connect(config);
        let peticion = await pool.request()
                                .input('items',sql.Int, items)
                                .input('idRol',sql.Int, idRol)
                                .execute('SEL_MENU_NOMINA_DETALLE')

        return peticion.recordsets


    } catch (error) {
        console.log(error);
    }
}


module.exports={
    permisos,
    usuarioLogeado,
    menuNomina,
    menuNominaDetalle
}