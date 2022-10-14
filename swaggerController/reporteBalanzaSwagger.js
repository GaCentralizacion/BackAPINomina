let express = require('express')
let router = express.Router()
const peticion = require('../controllers/reporteBalanza')

/**
 * @swagger
 * /api/reporteBalanza/ReporteBalanza:
 *   post:
 *      description: Faltan los comentarios de JC
 *      tags: [ReporteBalanza]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: anio
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: mes
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *          - name: quincena
 *            description: Faltan los comentarios de JC
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/ReporteBalanza').post((req,resp) => {
    
    let anio = req.body.anio
    let mes = req.body.mes
    let quincena = req.body.quincena

    peticion.ReporteBalanza(anio, mes, quincena).then(res =>{
        resp.status(200).json(res[0])
    })
})

module.exports = router