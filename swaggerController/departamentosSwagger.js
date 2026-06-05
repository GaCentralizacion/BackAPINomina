let express = require('express')
let router = express.Router()
const peticion = require('../controllers/departamentos')

/**
 * @swagger
 * /api/departamentos/InfoDepartamentos:
 *   get:
 *      description: Regresa las fechas de paga de nomina de acuerdo a los parametros de mes y año
 *      tags: [Departamentos]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: listado fecha pagas nomina
 */
 router.route('/InfoDepartamentos').get((req,resp) => {

    peticion.InfoDepartamentos().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/departamentos/ActualizarPorcentaje:
 *   put:
 *      description: Faltan los comentarios de JC
 *      tags: [Departamentos]
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

module.exports = router