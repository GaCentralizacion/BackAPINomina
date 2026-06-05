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

/**
 * @swagger
 * /api/comisionesFlotillas/ConfigMarkDevCenter:
 *   post:
 *      description: Muestra la configuracion para los departamentos MARKETING Y DEV CENTER (CONF_MARK_DEV_CENTER_COMISIONES_SP)
 *      tags: [ComisionesFlotillas]
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
 *          - name: idDepto
 *            description: 0101 para marketing y 0132 para dev center
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Faltan los comentarios de JC
 */
 router.route('/ConfigMarkDevCenter').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let idDepto = req.body.idDepto

    peticion.ConfigMarkDevCenter(mes,anio,idDepto).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/AgregaEliminaConfMarkDev:
 *   post:
 *      description: agrega o elimina conficuracion para los departamentos MARKETING Y DEV CENTER (AGREGA_ELIMINA_CONFIG_MARK_DEV_COMISIONES)
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idDepto
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idEmpresa
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: idSucursal
 *            description:
 *            in: formData
 *            type: number
 *            required: true
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
 *          - name: accion
 *            description: 1. inserta, 0. borra
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
 router.route('/AgregaEliminaConfMarkDev').post((req,resp) => {
    
    let idDepto = req.body.idDepto
    let idEmpresa = req.body.idEmpresa
    let idSucursal = req.body.idSucursal
    let anio = req.body.anio
    let mes = req.body.mes
    let accion = req.body.accion

    peticion.AgregaEliminaConfMarkDev(idDepto,idEmpresa,idSucursal,anio,mes,accion).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/ConfiguracionRangoNuevosComisiones:
 *   post:
 *      description: agrega o elimina conficuracion para los departamentos Nuevos (CONFIGURACION_RANGO_NUEVOS_COMISIONES)
 *      tags: [ComisionesFlotillas]
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
 *          - name: limInferior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: limSuperior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: porcentaje
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: accion
 *            description: 1. inserta, 0. borra
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
 router.route('/ConfiguracionRangoNuevosComisiones').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let limInferior = req.body.limInferior
    let limSuperior = req.body.limSuperior
    let porcentaje = req.body.porcentaje
    let accion = req.body.accion

    peticion.ConfiguracionRangoNuevosComisiones(mes,anio,limInferior,limSuperior,porcentaje,accion).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/ConfiguracionRangoSemiNuevosComisiones:
 *   post:
 *      description: agrega o elimina conficuracion para los departamentos seminuevos (CONFIGURACION_RANGO_SEMINUEVOS_COMISIONES)
 *      tags: [ComisionesFlotillas]
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
 *          - name: limInferior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: limSuperior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: monto
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: accion
 *            description: 1. inserta, 0. borra
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
 router.route('/ConfiguracionRangoSemiNuevosComisiones').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let limInferior = req.body.limInferior
    let limSuperior = req.body.limSuperior
    let monto = req.body.monto
    let accion = req.body.accion

    peticion.ConfiguracionRangoSemiNuevosComisiones(mes,anio,limInferior,limSuperior,monto,accion).then(res =>{
        resp.status(200).json(res[0])
    })
})


/**
 * @swagger
 * /api/comisionesFlotillas/ConfiguracionRangoNuevosComisiones:
 *   post:
 *      description: agrega o elimina conficuracion para los departamentos Nuevos (CONFIGURACION_RANGO_NUEVOS_COMISIONES)
 *      tags: [ComisionesFlotillas]
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
 *          - name: limInferior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: limSuperior
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: porcentaje
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *          - name: accion
 *            description: 1. inserta, 0. borra
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
router.route('/ConfiguracionRangoNuevosComisiones').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let limInferior = req.body.limInferior
    let limSuperior = req.body.limSuperior
    let porcentaje = req.body.porcentaje
    let accion = req.body.accion

    peticion.ConfiguracionRangoNuevosComisiones(mes,anio,limInferior,limSuperior,porcentaje,accion).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/SucursalesComisiones:
 *   get:
 *      description: Regresa la lista de las sucursales en las que calculara la comision de flotillas (SUCURSALES_COMISIONES)
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description:
 */
 router.route('/SucursalesComisiones').get((req,resp) => {

    peticion.SucursalesComisiones().then(res =>{
        resp.status(200).json(res)
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/CatEmpresasComisiones:
 *   get:
 *      description: Regresa la lista de las empresas en las que calculara la comision de flotillas (CAT_EMPRESAS_COMISIONES)
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description:
 */
 router.route('/CatEmpresasComisiones').get((req,resp) => {

    peticion.CatEmpresasComisiones().then(res =>{
        resp.status(200).json(res)
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/CalculoGastoComisionesFlotillas:
 *   post:
 *      description: Obtiene el mmonto del gasto usado para el calculo de pago de comisiones de flotillas (CALCULO_GASTO_COMISIONES_FLOTILLAS)
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idSucursalWSF
 *            description:
 *            in: formData
 *            type: number
 *            required: true
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
 *          - name: detalle
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
router.route('/CalculoGastoComisionesFlotillas').post((req,resp) => {
    
    let idSucursalWSF = req.body.idSucursalWSF
    let anio = req.body.anio
    let mes = req.body.mes
    let detalle = req.body.detalle

    peticion.CalculoGastoComisionesFlotillas(idSucursalWSF,anio,mes,detalle).then(res =>{
        resp.status(200).json(res)
    })
})

/**
 * @swagger
 * /api/comisionesFlotillas/CalculoDetalleComisionesFlotillas:
 *   post:
 *      description: Obtiene los calculas base para obtener la comision (CALCULO_FLOTILLAS_COMISIONES)
 *      tags: [ComisionesFlotillas]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: base
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: ip
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: nombreDepto
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: fechaInicio
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: fechafin
 *            description:
 *            in: formData
 *            type: string
 *            required: true
 *          - name: totalGasto
 *            description:
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description:
 */
router.route('/CalculoDetalleComisionesFlotillas').post((req,resp) => {
    
    let base = req.body.base
    let ip = req.body.ip
    let nombreDepto = req.body.nombreDepto
    let fechaInicio = req.body.fechaInicio
    let fechafin = req.body.fechafin
    let totalGasto = req.body.totalGasto

    peticion.CalculoDetalleComisionesFlotillas(base,ip,nombreDepto,fechaInicio,fechafin,totalGasto).then(res =>{
        resp.status(200).json(res)
    })
})


module.exports = router