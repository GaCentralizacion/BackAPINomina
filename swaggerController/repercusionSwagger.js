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
    let quincena = Number(req.body.quincena) === 1 || Number(req.body.quincena) === 23 ? 23 : 26
    let dia = req.body.dia

   peticion.prorrateoBalanza(mes,anio,quincena,dia).then(res =>{
       resp.status(200).json(res)
   })
})


/**
* @swagger
* /api/repercusion/RangoPagoSeminuevoComisiones:
*   post:
*      description: Regresa la tabla de rangos para el pago de comisiones en seminuevos
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description:
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description:
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/RangoPagoSeminuevoComisiones').post((req,resp) => {

    let mes = req.body.mes
    let anio = req.body.anio

   peticion.rangoPagoSeminuevoComisiones(anio,mes).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/RangoPagoNuevoComisiones:
*   post:
*      description: Regresa la tabla de rangos para el pago de comisiones en nuevos (RANGO_PAGO_NUEVOS_COMISIONES_SP)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description:
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description:
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/RangoPagoNuevoComisiones').post((req,resp) => {

    let mes = req.body.mes
    let anio = req.body.anio

   peticion.RangoPagoNuevoComisiones(anio,mes).then(res =>{
       resp.status(200).json(res)
   })
})


/**
* @swagger
* /api/repercusion/InsertaOrdenCompraCentralizado:
*   post:
*      description: Inserta los registros en tablas intermedias para la generacion de OC centralizados (INS_OC_CENTRALIZADOS_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description: anio
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description: mes
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
router.route('/InsertaOrdenCompraCentralizado').post((req,resp) => {

    let anio = req.body.anio
    let mes = req.body.mes
    let idDetalle = req.body.idDetalle
    let inserta = req.body.inserta

   peticion.InsertaOrdenCompraCentralizado(mes,anio,idDetalle,inserta).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/InsertaOrdenCompraNoCentralizado:
*   post:
*      description: Inserta los registros en tablas intermedias para la generacion de OC centralizados (REPORTE_BALANZA_REPERCUSION_NO_CENTRALIZADO)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description: anio
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description: mes
*            in: formData
*            type: number
*            required: true
*          - name: quincena
*            description: 1.- 1ra quincena, 2.- 2da quincena
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
router.route('/InsertaOrdenCompraNoCentralizado').post((req,resp) => {

    let anio = req.body.anio
    let mes = req.body.mes
    let quincena = req.body.quincena
    let inserta = req.body.inserta
    let idpagadora = '001'

   peticion.InsertaOrdenCompraNoCentralizado(mes,anio,idpagadora,quincena,inserta).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/InsertaSolicitudFacturacion:
*   post:
*      description: Inserta los registros en tablas intermedias para la generacion de las facturas (INS_REGISTROS_FACTURACION_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      parameters:
*          - name: anio
*            description: anio
*            in: formData
*            type: number
*            required: true
*          - name: mes
*            description: mes
*            in: formData
*            type: number
*            required: true
*          - name: quincena
*            description: 1.- 1ra quincena, 2.- 2da quincena
*            in: formData
*            type: number
*            required: true
*          - name: idUsuario
*            description: Usuario que solicita la generacion de la facturacion
*            in: formData
*            type: number
*            required: true
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/InsertaSolicitudFacturacion').post((req,resp) => {

    let anio = req.body.anio
    let mes = req.body.mes
    let quincena = req.body.quincena
    let idUsuario = req.body.idUsuario

   peticion.InsertaSolicitudFacturacion(mes,anio,quincena,idUsuario).then(res =>{
       resp.status(200).json(res)
   })
})

/**
* @swagger
* /api/repercusion/AuthApi:
*   post:
*      description: Busca si ya se hizo la repercucion de gasto en el anio y mes (SEL_FECHA_REPERCUSION)
*      tags: [Repercusion]
*      produces:
*          - application/json
*      responses:
*          '200':
*              description: Respuesta correcta
*/
router.route('/AuthApi').post((req,resp) => {

    var self = this;
    var ajax = require('rxjs/ajax');
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    ajax.ajax({  
        createXHR,
        url: 'http://192.168.20.89:9052/api/login/auth',
        crossDomain: true,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*'
          },
        body: {
            "dealerId": "1000",
            "apiKey":"24779r0j-1802-2010-06ag-201f768348a0",
            "apiSecret":"xVgUwolpX8qQ75TF5Ionny6iz5vu+LbO9gm9qxTsR9nvYfJ0N8y5Bfi7L2EI2AxS6PTbNnCaGfLs+7u69UdJtODCeBA+ZJpc"
          }
    })
    .subscribe( async (res) =>  {
        //console.log(res)
        resp.status(200).json(res.response)
    }
    ,error => {
        console.log(error);
        // self.view.expositor(res, {
        //     result: {
        //         Token:'Error al generar el token de api',
        //         Error:{
        //             mensajeError:'Error al generar el token de api',
        //             apiKey: "24779r0j-1802-2010-06ag-201f768348tg",
        //             apiSecret: "xVgUwolpX8qQ75TF5Ionny6iz5vu+LbO9gm9qxTsR9nvYfJ0N8y5Bfi7L2EI2AxS6PTbNnCaGfLs+7u69UdJtODCeBO+ZJpc"
        //         }
        //     }
        // });
    }
    )

    function createXHR() {
        return new XMLHttpRequest();
       }
  
})

module.exports = router