let express = require('express')
let router = express.Router()
let peticion = require('../controllers/mailer')


/**
* @swagger
* /api/mailer/SendMail:
*   post:
*      description: 
*      tags: [Mailer]
*      produces:
*          - application/json
*      parameters:
*          - name: asunto
*            description: asunto del correo
*            in: formData
*            type: string
*            required: true
*          - name: email
*            description: destinatario
*            in: formData
*            type: string
*            required: true
*          - name: cuerpo
*            description: destinatario
*            in: formData
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/SendMail').post((req,resp) => {

    let asunto = req.body.asunto
    let email = req.body.email
    let body = req.body.cuerpo

   peticion.sendMail(asunto,email, body).then(res =>{
       resp.status(200).json(res)
   })
})



module.exports = router