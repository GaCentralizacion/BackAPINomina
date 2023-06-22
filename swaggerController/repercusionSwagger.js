let express = require('express')
let router = express.Router()
let peticion = require('../controllers/repercusion')

/**
* @swagger
* /api/repercusion/SelFechaEjecucion:
*   post:
*      description: Busca si ya se hizo la repercucion de gasto en el anio y mes (SEL_FECHA_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description: anio de busqueda de ejecucion de la repercucion
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description: mes de la busqueda de ejecucion de la repercucion
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/SelFechaEjecucion').post((req,resp) => {

    let anio = req.body.anio
    let mes = req.body.mes

   peticion.selFechaEjecucion(anio,mes).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/ResumenInsertaBalanzaCentralizado:
*   post:
*      description: Busca si ya se hizo la repercucion de gasto en el anio y mes (REPORTE_BALANZA_REPERCUSION_COMPLETO)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description: anio de busqueda de ejecucion de la repercucion
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description: mes de la busqueda de ejecucion de la repercucion
*            in: formData
*            type: number
*            required: true
*          - name: idDetalle
*            description: Se refiere a la quincena, 23 es 1ra quincena, 26 2da quincena
*            in: formData
*            type: number
*            required: true
*          - name: inserta
*            description: Es para indicarle al SP si debe o no ejecutar el proceso de creaciones de OC
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ResumenInsertaBalanzaCentralizado').post((req,resp) => {

    let anio = req.body.anio
    let mes = req.body.mes
    let idDetalle = req.body.idDetalle
    let inserta = req.body.inserta

   peticion.resumenInsertaBalanzaCentralizado(mes,anio,idDetalle,inserta).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/ResumenBalanzaComisionesBonos:
*   post:
*      description: Regresa los datos de la balanza, comisiones y bonos de BPRO (REPORTE_BALANZA_COMISIONES_BONO_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: mes
*            description: mes de la busqueda de ejecucion de la repercucion
*            in: formData
*            type: number
*            required: true
*          - name: anio
*            description: año de la repercusion
*            in: formData
*            type: number
*            required: true
*          - name: quincena
*            description: Se refiere a la quincena, 23 es 1ra quincena, 26 2da quincena
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ResumenBalanzaComisionesBonos').post((req,resp) => {

    let mes = req.body.mes
    let anio = req.body.anio
    let quincena = req.body.quincena

   peticion.balanzaComisionesBono(mes,anio,quincena).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/ConsultaOrdenesCompra:
*   post:
*      description: Regresa el resultado de la consulta de ordenes de compra creadas para la repercucion (ORDENES_COMPRA_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: fecha
*            description: fecha (yyyymmdd) en la que se insertaron los registros en ordenes masivas
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ConsultaOrdenesCompra').post((req,resp) => {

    let fecha = req.body.fecha

   peticion.consultaOrdenesCompra(fecha).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/ConsultaFacturas:
*   post:
*      description: Regresa el resultado de la consulta de facturas creadas para la repercucion (CONSULTA_FACTURAS_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: fecha
*            description: fecha (yyyymmdd) en la que se insertaron los registros en ordenes masivas
*            in: formData
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ConsultaFacturas').post((req,resp) => {

    let fecha = req.body.fecha

   peticion.consultaFacturas(fecha).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/ConsultaOCError:
*   post:
*      description: Regresa el resultado de la consulta de facturas creadas para la repercucion (ORDENES_COMPRA_ERROR_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: oc
*            description:
*            in: formData
*            type: string
*            required: true
*          - name: sucursal
*            description:
*            in: formData
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ConsultaOCError').post((req,resp) => {

    let oc = req.body.oc
    let sucursal = req.body.sucursal

   peticion.consultaOCError(oc,sucursal).then(res =>{
       resp.status(200).json(res[0])
   })
})

/**
* @swagger
* /api/repercusion/ConsultaFechaFaturacion:
*   post:
*      description: Consulta la fecha cuando se inicio el proceso de la facturacion (SOLICITUD_FACTURACION_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: mes
*            description:
*            in: formData
*            type: string
*            required: true
*          - name: anio
*            description:
*            in: formData
*            type: string
*            required: true
*          - name: quincena
*            description:
*            in: formData
*            type: string
*            required: true
*          - name: inserta
*            description:
*            in: formData
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ConsultaFechaFaturacion').post((req,resp) => {

    let mes = req.body.mes
    let anio = req.body.anio
    let quincena = req.body.quincena
    let inserta = req.body.inserta

   peticion.consultaFechaFaturacion(mes,anio,quincena,inserta).then(res =>{
       resp.status(200).json(res[0])
   })
})

/**
* @swagger
* /api/repercusion/ParametrosNotificacion:
*   post:
*      description: Consulta la fecha cuando se inicio el proceso de la facturacion (SOLICITUD_FACTURACION_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: tabla
*            description:
*            in: formData
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ParametrosNotificacion').post((req,resp) => {

    let tabla = req.body.tabla

   peticion.parametrosNotificacion(tabla).then(res =>{
       resp.status(200).json(res[0])
   })
})

/**
* @swagger
* /api/repercusion/ProrrateoBalanza:
*   post:
*      description: Ejecuta el proceso de prorrateo de la balanza 
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: mes
*            description:
*            in: formData
*            type: number
*            required: true
*          - name: anio
*            description:
*            in: formData
*            type: number
*            required: true
*          - name: quincena
*            description:
*            in: formData
*            type: number
*            required: true
*          - name: dia
*            description:
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/ProrrateoBalanza').post((req,resp) => {

    let mes = req.body.mes
    let anio = req.body.anio
    let quincena = req.body.quincena === 1 ? 23 : 26
    let dia = req.body.dia

   peticion.prorrateoBalanza(mes,anio,quincena,dia).then(res =>{
       resp.status(200).json(res)
   })
})



module.exports = router