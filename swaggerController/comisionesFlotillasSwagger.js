let express = require('express')
let router = express.Router()
const peticion = require('../controllers/comisionesFlotillas')

/**
 * @swagger
 * /api/comisionesFlotillas/InfoDepartamentosComisiones:
 *   get:
 *      description: Faltan los comentarios de JC
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/InfoDepartamentosComisiones').get((req,resp) => {

    peticion.InfoDepartamentosComisiones().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/ActualizarPorcentaje:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: iddepartamento
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: estatus
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
    
    let iddepartamento = req.body.iddepartamento
    let estatus = req.body.estatus
    let idUsuario = req.body.idUsuario

    peticion.ActualizarPorcentaje(iddepartamento, estatus, idUsuario).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/DetalleFlotillas:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idFlotilla
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/DetalleFlotillas').post((req,resp) => {
    
    let idFlotilla = req.body.idFlotilla

    peticion.DetalleFlotillas(idFlotilla).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/EliminaSucFlotilla:
 *   delete:
 *      description: Faltan los comentarios de JC
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idDetalleFlotilla
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
 router.route('/EliminaSucFlotilla').delete((req,resp) => {
    
    let idDetalleFlotilla = req.body.idDetalleFlotilla
    let idUsuario = req.body.idUsuario

    peticion.EliminaSucFlotilla(idDetalleFlotilla, idUsuario).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/InsertarSucFlotilla:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: IdFlotilla
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idSucursal
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
 router.route('/InsertarSucFlotilla').post((req,resp) => {
    
    let IdFlotilla = req.body.IdFlotilla
    let idSucursal = req.body.idSucursal
    let porcentaje = req.body.porcentaje
    let idUsuario = req.body.idUsuario

    peticion.InsertarSucFlotilla(IdFlotilla,idSucursal,porcentaje,idUsuario).then(res =>{
        resp.status(200).json(res[0])
    })
})

module.exports = router