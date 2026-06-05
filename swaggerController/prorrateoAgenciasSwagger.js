let express = require('express')
let router = express.Router()
let peticion = require('../controllers/prorrateoAgencias')

/**
 * @swagger
 * /api/prorrateoAgencias/InfoDepartamentosAgencias:
 *   get:
 *      description: Regresa la lista de los departamentos configurados con la informacion general de configuracion (SEL_DEPARTAMENTOS_AGENCIAS_PRORRATEO_SP)
 *      tags: [ProrrateoAgencias]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Respuesta correcta
 */
router.route('/InfoDepartamentosAgencias').get((req,resp) => {

    peticion.InfoDepartamentosAgencias().then(res =>{
        resp.status(200).json(res)
    })
})

/**
* @swagger
* /api/prorrateoAgencias/DetalleAgencias:
*   post:
*      description: Regresa el detalle de la configuracion del departamento seleccionado (SEL_DEPARTAMENTOS_AGENCIAS_FLOTILLA_SP)
*      tags: [ProrrateoAgencias]
*      produces:
*          - application/json
*      parameters:
*          - name: idAgencias
*            description: idDepartamento
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/DetalleAgencias').post((req,resp) => {

    let idAgencias = req.body.idAgencias

   peticion.detalleAgencias(idAgencias).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/prorrateoAgencias/EliminaSucFlotillaAgencia:
*   post:
*      description: Realiza borrado logico de la configuracion seleccionada (UPD_COMISIONES_FLOTILLA_SUCURSAL_AGENCIA_SP)
*      tags: [ProrrateoAgencias]
*      produces:
*          - application/json
*      parameters:
*          - name: idDetalleFlotilla
*            description: idDetalleFlotilla que se desea borrar
*            in: formData
*            type: number
*            required: true
*          - name: idUsuario
*            description: idDepartamento
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/EliminaSucFlotillaAgencia').post((req,resp) => {

    let idDetalleFlotilla = req.body.idDetalleFlotilla
    let idUsuario = req.body.idUsuario

   peticion.eliminaSucFlotillaAgencia(idDetalleFlotilla,idUsuario).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/prorrateoAgencias/InsertarSucFlotillaAgencia:
*   post:
*      description: Inserta configuracion (INS_FLOTILLA_SUCURSAL_AGENCIA_SP)
*      tags: [ProrrateoAgencias]
*      produces:
*          - application/json
*      parameters:
*          - name: IdFlotilla
*            description: IdFlotilla
*            in: formData
*            type: number
*            required: true
*          - name: idSucursal
*            description: idSucursal
*            in: formData
*            type: number
*            required: true
*          - name: porcentaje
*            description: porcentaje
*            in: formData
*            type: number
*            required: true
*          - name: idUsuario
*            description: idUsuario
*            in: formData
*            type: number
*            required: true
*          - name: porSucursal
*            description: porSucursal
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/InsertarSucFlotillaAgencia').post((req,resp) => {

   peticion.insertarSucFlotillaAgencia(req.body.IdFlotilla
    ,req.body.idSucursal
    ,req.body.porcentaje
    ,req.body.idUsuario
    ,req.body.porSucursal).then(res =>{
       resp.status(200).json(res[0])
   })
})

/**
 * @swagger
 * /api/prorrateoAgencias/DepartamentoAgencias:
 *   get:
 *      description: Regresa la lista de los departamentos (DEPARTAMENTO_AGENCIAS_SP)
 *      tags: [ProrrateoAgencias]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Respuesta correcta
 */
router.route('/DepartamentoAgencias').get((req,resp) => {

    peticion.DepartamentoAgencias().then(res =>{
        resp.status(200).json(res)
    })
})

/**
* @swagger
* /api/prorrateoAgencias/AgregaEliminaAgencia:
*   post:
*      description: Realiza borrado logico de la configuracion seleccionada (UPD_COMISIONES_FLOTILLA_SUCURSAL_AGENCIA_SP)
*      tags: [ProrrateoAgencias]
*      produces:
*          - application/json
*      parameters:
*          - name: id_departamento
*            description: id_departamento
*            in: formData
*            type: number
*            required: true
*          - name: opcion
*            description: opcion
*            in: formData
*            type: number
*            required: true
*          - name: idUsuario
*            description: idUsuario
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/AgregaEliminaAgencia').post((req,resp) => {

    let id_departamento = req.body.id_departamento
    let opcion = req.body.opcion
    let idUsuario = req.body.idUsuario

   peticion.AgregaEliminaAgencia(id_departamento,opcion,idUsuario).then(res =>{
       resp.status(200).json(res)
   })
})


module.exports = router