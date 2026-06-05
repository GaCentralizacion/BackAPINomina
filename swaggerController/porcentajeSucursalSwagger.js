let express = require('express')
let router = express.Router()
const peticion = require('../controllers/porcentajeSucursal')

/**
 * @swagger
 * /api/porcentajeSucursal/InfoPorcentajes:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
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
 router.route('/InfoPorcentajes').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio

    peticion.InfoPorcentajes(mes, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/Sucursales:
 *   get:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/Sucursales').get((req,resp) => {

    peticion.Sucursales().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/ActualizarPorcentaje:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: consecutivo
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: mes
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: porcentaje
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/ActualizarPorcentaje').put((req,resp) => {
    
    let consecutivo = req.body.consecutivo
    let mes = req.body.mes
    let anio = req.body.anio
    let porcentaje = req.body.porcentaje
    let idUsuario = req.body.idUsuario

    peticion.ActualizarPorcentaje(consecutivo, mes, anio, porcentaje,idUsuario).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/GuardarPorcentaje:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: porcentaje
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idUsuario
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
 router.route('/GuardarPorcentaje').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let porcentaje = req.body.porcentaje
    let idUsuario = req.body.idUsuario
    let idSucursal = req.body.idSucursal

    peticion.GuardarPorcentaje(mes, anio, porcentaje, idUsuario,idSucursal).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/InfoPorcentajesServicio:
 *   get:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/InfoPorcentajesServicio').get((req,resp) => {

    peticion.InfoPorcentajesServicio().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/ActualizarPorcentajeServicio:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: consecutivo
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: porcentaje
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idUsuario
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/ActualizarPorcentajeServicio').put((req,resp) => {
    
    let consecutivo = req.body.consecutivo
    let porcentaje = req.body.porcentaje
    let idUsuario = req.body.idUsuario

    peticion.ActualizarPorcentajeServicio(consecutivo, porcentaje, idUsuario).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/porcentajeSucursal/GuardarPorcentajeServicio:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [PorcentajeSucursal]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: porcentaje
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idUsuario
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
 router.route('/GuardarPorcentajeServicio').post((req,resp) => {
    
    let porcentaje = req.body.porcentaje
    let idUsuario = req.body.idUsuario
    let idSucursal = req.body.idSucursal

    peticion.GuardarPorcentajeServicio(porcentaje, idUsuario, idSucursal).then(res =>{
        resp.status(200).json(res[0])
    })
})

module.exports = router