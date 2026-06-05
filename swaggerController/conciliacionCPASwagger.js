let express = require('express')
let router = express.Router()
const peticion = require('../controllers/conciliacionCPA')

/**
 * @swagger
 * /api/conciliacion/polizasPorConciliar:
 *   get:
 *      description: lista de polizas por conciliar en CPA
 *      tags: [Conciliacion]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Empleados activos
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/polizasPorConciliar').get((req,resp) =>{

    peticion.polizasPorConciliar().then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/conciliacion/extractor:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [Conciliacion]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: Mes de la póliza
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Año de la póliza
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal, 3. Semanal monte auto, 4. Semanal velbus
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 3. Anticipos Nom, 4. Aguinaldo, 5. PTU
 *            in: formData
 *            type: number
 *            required: true
 *          - name: centroId
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/extractor').post((req,resp) =>{

    let mes = req.body.mes
    let anio = req.body.anio
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let tipoNomina = req.body.tipoNomina
    let centroId = req.body.centroId

    peticion.extractor(mes,anio,periodoId,periodo,tipoNomina,centroId).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/conciliacion/inserta_bitacora_cpa:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [Conciliacion]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: Mes de la póliza
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Año de la póliza
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal, 3. Semanal monte auto, 4. Semanal velbus
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 3. Anticipos Nom, 4. Aguinaldo, 5. PTU
 *            in: formData
 *            type: number
 *            required: true
 *          - name: centroId
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *          - name: tokengenerado
 *            description: Token generado
 *            in: formData
 *            type: string
 *          - name: jsonEnvio
 *            description: JSON con los datos a enviar
 *            in: formData
 *            type: string
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/inserta_bitacora_cpa').post((req,resp) =>{

    let mes = req.body.mes
    let anio = req.body.anio
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let tipoNomina = req.body.tipoNomina
    let centroId = req.body.centroId
    let tokengenerado = req.body.tokengenerado
    let jsonEnvio = req.body.jsonEnvio

    peticion.inserta_bitacora_cpa(mes,anio,periodoId,periodo,tipoNomina,centroId, tokengenerado, jsonEnvio).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/conciliacion/actualiza_bitacora_cpa:
 *   post:
 *      description: Actualiza la información de la bitácora de conciliación CPA después de enviar la información a CPA
 *      tags: [Conciliacion]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: token
 *            description: toknen generado para identificar el registro a actualizar
 *            in: formData
 *            type: string
 *            required: true
 *          - name: jsonRespuesta
 *            description: Respuesta en formato XML (se almacena en columna SQL tipo XML).
 *            in: formData
 *            type: string
 *            required: true
 *          - name: payload
 *            description: url devuelta por CPA al enviar la información, se guarda para futuras consultas
 *            in: formData
 *            type: string
 *            required: true
 *          - name: rfcEmisor
 *            description: rfc del emisor de la póliza, se guarda para futuras consultas
 *            in: formData
 *            type: string
 *            required: true
 *          - name: link
 *            description: link devuelto por CPA al enviar la información, se guarda para futuras consultas
 *            in: formData
 *            type: string
 *            required: true
 *          - name: error
 *            description: Titulo del error
 *            in: formData
 *            type: string
 *          - name: errorDetalle
 *            description: detalle del error en caso de que la respuesta de CPA sea un error, se guarda para futuras consultas
 *            in: formData
 *            type: string
 *          - name: punto
 *            description: cadena con la ubicacion del error
 *            in: formData
 *            type: string
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/actualiza_bitacora_cpa').post((req,resp) =>{

    let token = req.body.token
    let jsonRespuesta = req.body.jsonRespuesta
    let payload = req.body.payload
    let rfcEmisor = req.body.rfcEmisor
    let link = req.body.link
    let error = req.body.error
    let errorDetalle = req.body.errorDetalle
    let punto = req.body.punto

    peticion.actualiza_bitacora_cpa(token,jsonRespuesta,payload,rfcEmisor,link,error, errorDetalle, punto).then(res =>{
        resp.status(200).json(res)
    })

})

module.exports = router