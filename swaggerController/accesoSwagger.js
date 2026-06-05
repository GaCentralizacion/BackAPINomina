let express = require('express')
let router = express.Router()
const peticion = require('../controllers/acceso')

/**
 * @swagger
 * /api/acceso/Permisos:
 *   post:
 *      description: regresa el acceso del usuario
 *      tags: [Acceso]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: User
 *            description: Usuario
 *            in: formData
 *            required: true
 *          - name: pass
 *            description: contraseña
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: 
 */
 router.route('/permisos').post((req,resp) => {
    
    let User = req.body.User
    let pass = req.body.pass

    peticion.permisos(User, pass).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/acceso/UsuarioLogeado:
 *   post:
 *      description: regresa el acceso del usuario logeado desde el panel de aplicaciones, sp invocado SEL_EMPLEADO_SP
 *      tags: [Acceso]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idEmpleado
 *            description: id Usuario de cat_usuarios
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: 
 */
 router.route('/usuarioLogeado').post((req,resp) => {
    
    let idEmpleado = req.body.idEmpleado

    peticion.usuarioLogeado(idEmpleado).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/acceso/MenuNomina:
 *   post:
 *      description: regresa el acceso del usuario logeado desde el panel de aplicaciones, sp invocado SEL_MENU_NOMINA
 *      tags: [Acceso]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idRol
 *            description: id Rol del empleado
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: 
 */
 router.route('/menuNomina').post((req,resp) => {
    
    let idRol = req.body.idRol

    peticion.menuNomina(idRol).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/acceso/MenuNominaDetalle:
 *   post:
 *      description: regresa el acceso del usuario logeado desde el panel de aplicaciones, sp invocado SEL_MENU_NOMINA_DETALLE
 *      tags: [Acceso]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: items
 *            description: grupo del dealle
 *            in: formData
 *            required: true
 *          - name: idRol
 *            description: id Rol del empleado
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: 
 */
 router.route('/menuNominaDetalle').post((req,resp) => {
    
    let items = req.body.items
    let idRol = req.body.idRol

    peticion.menuNominaDetalle(items,idRol).then(res =>{
        resp.status(200).json(res[0])
    })
})

module.exports = router