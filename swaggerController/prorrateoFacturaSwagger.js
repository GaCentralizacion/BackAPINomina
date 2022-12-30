let express = require('express')
let router = express.Router()
const repository = require('../controllers/prorrateoFactura')

/**
 * @swagger
 * /api/prorrateoFacturas/facturas:
 *  get:
 *      description: algo algo
 *      tags: [ProrrateoFacturas]
 *      responses:
 *          '200':
 *              description: listado
 */
 router.route('/facturas').get((req,resp) => {
    repository.facturas().then(res =>{
        resp.json(res[0])
    })
})

module.exports = router