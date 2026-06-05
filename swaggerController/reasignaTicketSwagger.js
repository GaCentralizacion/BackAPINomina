let express = require('express')
let router = express.Router()
const peticion = require('../controllers/reasignaTicket')

/**
 * @swagger
 * /api/reasignaTicket/Tickets:
 *   get:
 *      description: Obtiene la lista de los tickets que se deben enviar a traves del api
 *      tags: [Reasigna Ticket]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: lista de tickets
 */
router.route('/Tickets').get((req,resp) => {

    peticion.tickets().then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/reasignaTicket/RegistraBitacora:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [Reasigna Ticket]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: ticket
 *            description: ticket de aranda
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idResponsable
 *            description: id responsable de atender el ticket
 *            in: formData
 *            type: number
 *            required: true
 *          - name: token
 *            description: toket de autenticacion
 *            in: formData
 *            type: string
 *            required: true
 *          - name: jsonEnviado
 *            description: json 
 *            in: formData
 *            type: string
 *            required: true
 *          - name: respuestaApi
 *            description: 
 *            in: formData
 *            type: string
 *            required: true
 *          - name: opcion
 *            description: 0 inserta 1 actualiza
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/RegistraBitacora').post((req,resp) =>{

    let ticket = req.body.ticket
    let idResponsable = req.body.idResponsable
    let token = req.body.token
    let jsonEnviado = req.body.jsonEnviado
    let respuestaApi = req.body.respuestaApi
    let opcion = req.body.opcion

    peticion.registraBitacora(ticket,idResponsable,token,jsonEnviado,respuestaApi,opcion).then(res =>{
        resp.status(200).json(res[0])
    })

})

module.exports = router