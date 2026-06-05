let express = require('express')
let router = express.Router()
const peticion = require('../controllers/polizasNomina')

/**
 * @swagger
 * /api/polizasNomina/Organizaciones:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Organizaciones').put((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio

    peticion.Organizaciones(idUsuario, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/Empresas:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Empresas').put((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion

    peticion.Empresas(idUsuario, anio, id_organizacion).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/anio:
 *   get:
 *      description: Regresa los ultimos 3 años
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: listado fecha pagas nomina
 */
 router.route('/anio').get((req,resp) => {

    peticion.anio().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/Fechas:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Fechas').put((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion
    let idEmpresa = req.body.idEmpresa

    peticion.Fechas(idUsuario, anio, id_organizacion, idEmpresa).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/Nomina:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fecha
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Nomina').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion
    let idEmpresa = req.body.idEmpresa
    let fecha = req.body.fecha

    peticion.Nomina(idUsuario, anio, id_organizacion, idEmpresa, fecha).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/ReporteNomina:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fecha
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/ReporteNomina').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion
    let idEmpresa = req.body.idEmpresa
    let fecha = req.body.fecha

    peticion.ReporteNomina(idUsuario, anio, id_organizacion, idEmpresa, fecha).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/TipoConceptos:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fecha
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/TipoConceptos').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion
    let idEmpresa = req.body.idEmpresa
    let fecha = req.body.fecha

    peticion.TipoConceptos(idUsuario, anio, id_organizacion, idEmpresa, fecha).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/DetalleNomina:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fecha
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: CME_ID_POSITION
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: CME_N_POSITION
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/DetalleNomina').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let fecha = req.body.fecha
    let CME_ID_POSITION = req.body.CME_ID_POSITION
    let CME_N_POSITION = req.body.CME_N_POSITION

    peticion.DetalleNomina(idUsuario, anio, fecha, CME_ID_POSITION, CME_N_POSITION).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/Conceptos:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_organizacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fecha
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipo
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Conceptos').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let anio = req.body.anio
    let id_organizacion = req.body.id_organizacion
    let idEmpresa = req.body.idEmpresa
    let fecha = req.body.fecha
    let tipo = req.body.tipo

    peticion.Conceptos(idUsuario,anio,id_organizacion,idEmpresa,fecha,tipo).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/GuardarConcepto:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: id_concepto
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: value
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/GuardarConcepto').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let id_concepto = req.body.id_concepto
    let value = req.body.value

    peticion.GuardarConcepto(idUsuario,id_concepto,value).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/GuardarConceptos:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: value
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/GuardarConceptos').post((req,resp) => {
    
    let value = req.body.value

    peticion.GuardarConceptos(value).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/GuardarConceptos:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: validUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idSucursal
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idsubtramite
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: subtramite
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idclasificacion
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: costo
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: precio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: conUtilidad
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/UPDCatalogo').put((req,resp) => {
    
    let validUsuario = req.body.validUsuario
    let idEmpresa = req.body.idEmpresa
    let idSucursal = req.body.idSucursal
    let idsubtramite = req.body.idsubtramite
    let subtramite = req.body.subtramite
    let idclasificacion = req.body.idclasificacion
    let costo = req.body.costo
    let precio = req.body.precio
    let conUtilidadue = req.body.conUtilidadue

    peticion.UPDCatalogo(validUsuario,idEmpresa,idSucursal,idsubtramite,subtramite,idclasificacion,costo,precio,conUtilidadue).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/DELCatalogo:
 *   delete:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idSucursal
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idsubtramite
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: estatus
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/DELCatalogo').delete((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let idEmpresa = req.body.idEmpresa
    let idSucursal = req.body.idSucursal
    let idsubtramite = req.body.idsubtramite
    let estatus = req.body.estatus

    peticion.DELCatalogo(idUsuario,idEmpresa,idSucursal,idsubtramite,estatus).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/polizasNomina/SelProveedores:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PolizasNomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idEmpresa
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idSucursal
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/SelProveedores').post((req,resp) => {
    
    let idUsuario = req.body.idUsuario
    let idEmpresa = req.body.idEmpresa
    let idSucursal = req.body.idSucursal
 

    peticion.SelProveedores(idUsuario,idEmpresa,idSucursal).then(res =>{
        resp.status(200).json(res[0])
    })
})

module.exports = router