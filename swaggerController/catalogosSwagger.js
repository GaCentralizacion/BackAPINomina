let express = require('express')
let router = express.Router()
const peticion = require('../controllers/catalogos')

/**
 * @swagger
 * /api/catalogosSICOSS/ConceptosSabana:
 *   get:
 *      description: Faltan los comentarios de JC
 *      tags: [CatalogosSICOSS]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
router.route('/ConceptosSabana').get((req,resp) =>{

    peticion.catalogoConceptoSabana().then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/catalogosSICOSS/FechasPagas:
 *   post:
 *      description: Regresa la lista de las pagas de mes y año en curso
 *      tags: [CatalogosSICOSS]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: anio
 *            description: Año de la paga
 *            in: formData
 *            type: number
 *            required: true
 *          - name: mes
 *            description: Mes de la paga
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Retorna la fecha de las pagas
 */
 router.route('/FechasPagas').post((req,resp) =>{

    let anio = req.body.anio
    let mes = req.body.mes

    peticion.fechasPagas(anio, mes).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/catalogosSICOSS/LugaresTrabajo:
 *   get:
 *      description: Faltan los comentarios de JC
 *      tags: [CatalogosSICOSS]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/LugaresTrabajo').get((req,resp) =>{

    peticion.lugarestrabajo().then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/catalogosSICOSS/SicossGrupo:
 *   get:
 *      description: Regresa la lista de los grupos y campos configurados
 *      tags: [CatalogosSICOSS]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Regresa la lista de los grupos y campos configurados
 */
router.route('/SicossGrupo').get((req,resp) =>{

    peticion.SicossGrupo().then(res =>{
        resp.status(200).json(res[0])
    })

})

module.exports = router