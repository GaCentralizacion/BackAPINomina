let express = require('express')
let router = express.Router()
const dbNomina = require('../controllers/nomina')

/**
 * @swagger
 * /api/nomina/fechasPaga:
 *   post:
 *      description: Regresa las fechas de paga de nomina de acuerdo a los parametros de mes y año
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: mes de la paga
 *            in: formData
 *            required: true
 *          - name: anio
 *            description: año de la paga
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: listado fecha pagas nomina
 */
router.route('/fechasPaga').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio

    dbNomina.fechasPagas(mes, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/nomina/ConsultaBitacoraPolizas:
 *   post:
 *      description: Regresa las fechas de paga de nomina de acuerdo a los parametros de mes y año
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: mes de la paga
 *            in: formData
 *            required: true
 *          - name: anio
 *            description: año de la paga
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: listado fecha pagas nomina
 */
 router.route('/ConsultaBitacoraPolizas').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio

    dbNomina.ConsultaBitacoraPolizas(mes, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/nomina/ObtieneAsientoContablePaga:
 *   post:
 *      description: Regresa la vista de como quedaria la T de mayor, con la información que se dejara en tablas intemedias
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            type: string
 *            in: formData
 *            required: true
 *          - name: fechaPagaSelected
 *            description: Fecha de la paga formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipoSelected
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            in: formData
 *            type: string
 *            required: true
 *          - name: frecuenciaSelected
 *            description: frecuencia de la paga, semanales 001, quincenales 003
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Vista de la Poliza a insertar
 */
 router.route('/ObtieneAsientoContablePaga').post((req,resp) => {
    
    let lugarTrabajo = req.body.lugarTrabajo
    let fechaPagaSelected = req.body.fechaPagaSelected
    let tipoSelected = req.body.tipoSelected
    let frecuenciaSelected = req.body.frecuenciaSelected

    dbNomina.ObtieneAsientoContablePaga(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected).then(res =>{
        resp.status(200).json(res[1])
    })
})

/**
 * @swagger
 * /api/nomina/lugaresTrabajo:
 *   get:
 *      description: Regresa la lista de los lugares de trabajo activos, estos son los lugares de trabajo de los cuales se obtendra la sabana de META4
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Lista de lugares de trabajo activos para polizas de nomina
 */
 router.route('/lugaresTrabajo').get((req,resp) => {

    dbNomina.LugaresTrabajo().then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nomina/GeneraPolizaIndividual:
 *   post:
 *      description: Deja la información en tablas intermedias para la generación de las polizas de nomina
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            type: string
 *            required: true
 *          - name: fechaPagaSelected
 *            description: Fecha de la paga formato YYYYMMdd
 *            type: number
 *            required: true
 *          - name: tipoSelected
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            type: string
 *            required: true
 *          - name: frecuenciaSelected
 *            description: frecuencia de la paga, semanales 001, quincenales 003
 *            type: string
 *            required: true
 *          - name: polizaFaltante
 *            description: 
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Vista de la Poliza a insertar
 */
 router.route('/GeneraPolizaIndividual').post((req,resp) => {
    
    let lugarTrabajo = req.body.lugarTrabajo
    let fechaPagaSelected = req.body.fechaPagaSelected
    let tipoSelected = req.body.tipoSelected
    let frecuenciaSelected = req.body.frecuenciaSelected
    let polizaFaltante = req.body.polizaFaltante

    dbNomina.GeneraPolizaIndividual(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected, polizaFaltante).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/nomina/FechasPagasBitacora:
 *   post:
 *      description: Regresa las fechas de paga de nomina de acuerdo a los parametros de mes y año
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: mes de la paga
 *            in: formData
 *            required: true
 *          - name: anio
 *            description: año de la paga
 *            in: formData
 *            required: true
 *      responses:
 *          '200':
 *              description: listado fecha pagas nomina
 */
 router.route('/FechasPagasBitacora').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio

    dbNomina.FechasPagasBitacora(mes, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/nomina/ListaEmpresasPoliza:
 *   get:
 *      description: Regresa la lista de los lugares de trabajo activos y que estan activos para generar poliza
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Lista de lugares de trabajo activos para polizas de nomina
 */
 router.route('/ListaEmpresasPoliza').get((req,resp) => {

    dbNomina.ListaEmpresasPoliza().then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nomina/ConsultaPoliza:
 *   post:
 *      description: Regresa la informacion de la poliza Generada
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            in: formData
 *            type: string
 *            required: true
 *          - name: idCabecero
 *            description: id de la tabla intermedia
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: informacion de la poliza generada
 */
 router.route('/ConsultaPoliza').post((req,resp) => {

    let lugarTrabajo = req.body.lugarTrabajo
    let idCabecero = req.body.idCabecero

    dbNomina.ConsultaPoliza(lugarTrabajo,idCabecero).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nomina/usuarios:
 *  get:
 *      description: Lista de usuarios para el portal de nominas 
 *      tags: [Nomina]
 *      responses:
 *          '200':
 *              description: listado
 */
 router.route('/usuarios').get((req,resp) => {
    dbNomina.usuarios().then(res =>{
        resp.json(res[0])
    })
})

/**
 * @swagger
 * /api/nomina/ReporteExcelMeta:
 *   post:
 *      description: QUERY EN DESUSO
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            type: string
 *            in: formData
 *            required: true
 *          - name: frecuencia
 *            description: Frecuencia de la paga 003 quincenal, 001 semanal
 *            in: formData
 *            type: string
 *            required: true
 *          - name: fechaPaga
 *            description: Fecha de la paga en formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: Vista de la Poliza a insertar
 */
 router.route('/ReporteExcelMeta').post((req,resp) => {
    
    let lugarTrabajo = req.body.lugarTrabajo
    let frecuencia = req.body.frecuencia
    let fechaPaga = req.body.fechaPaga

    dbNomina.ReporteExcelMeta(lugarTrabajo, frecuencia, fechaPaga).then(res =>{
        resp.status(200).json(res[0])
    })
})


/**
 * @swagger
 * /api/nomina/ConsultaSabanaMeta:
 *   post:
 *      description: Regresa la información de la sabana de meta4 sin guardar los datos, se usa para poder consultar la poliza antes de generarla
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            type: string
 *            in: formData
 *            required: true
 *          - name: fechaPagaSelected
 *            description: Fecha de la paga formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipoSelected
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            in: formData
 *            type: string
 *            required: true
 *          - name: frecuenciaSelected
 *            description: frecuencia de la paga, semanales 001, quincenales 003
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
 router.route('/ConsultaSabanaMeta').post((req,resp) => {
    
    let lugarTrabajo = req.body.lugarTrabajo
    let fechaPagaSelected = req.body.fechaPagaSelected
    let tipoSelected = req.body.tipoSelected
    let frecuenciaSelected = req.body.frecuenciaSelected

    dbNomina.ConsultaSabanaMeta(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected).then(res =>{
        if(res.length > 0 ){
            resp.status(200).json(res[0])
        }else{
            resp.status(200).json([])
        }
        
    })

})

/**
 * @swagger
 * /api/nomina/ConsultaSabanaMetaGrupo:
 *   post:
 *      description: Regresa la información de la sabana de meta4 sin guardar los datos, se usa para poder consultar la poliza antes de generarla
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: lugarTrabajo
 *            description: Lugar de trabajo que deseamos consultar
 *            type: string
 *            in: formData
 *            required: true
 *          - name: fechaPagaSelected
 *            description: Fecha de la paga formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipoSelected
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            in: formData
 *            type: string
 *            required: true
 *          - name: frecuenciaSelected
 *            description: frecuencia de la paga, semanales 001, quincenales 003
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
 router.route('/ConsultaSabanaMetaGrupo').post((req,resp) => {
    
    let lugarTrabajo = req.body.lugarTrabajo
    let fechaPagaSelected = req.body.fechaPagaSelected
    let tipoSelected = req.body.tipoSelected.toUpperCase() 
    let frecuenciaSelected = req.body.frecuenciaSelected

    let jsonGrupos;
    let jsonGruposDetalle;
    let jsonData;
    let jsonFinal={};
    let js = new Object()
    let final = []
    let arrayFinal = []

    dbNomina.GruposMeta().then(resG =>{

        jsonGrupos = resG[0]
        jsonGruposDetalle = resG[1]
        
        dbNomina.ConsultaSabanaMeta(lugarTrabajo, fechaPagaSelected, tipoSelected, frecuenciaSelected).then(resD =>{
//            resp.status(200).json(res[0])
            jsonData = resD[0]

            /**Recorremos los grupos encontrados */
            for (let i = 0; i < jsonGrupos.length; i++) {
                const nomGrupo = jsonGrupos[i].nombre_grupo;
                
                js = new Object()
                //final = new Array()

                /**Filtramos los detalles del grupo */
                let detalle = jsonGruposDetalle.filter(x => x.nombre_grupo === nomGrupo)

               /**Recorremos los datos de la sabana */
                for (let j = 0; j < jsonData.length; j++) {
                    const data = jsonData[j];

                    /**Recorremos los detalles del grupo */
                    for (let d = 0; d < detalle.length; d++) {
                        const elementDetalle = detalle[d];  

                        /**Si la data tiene como propierdad el nombre del campo que se en encuentra en el grupo lo asignamos */
                        if(data.hasOwnProperty(elementDetalle.nombreCampo)){
                            //js[elementDetalle.nombreCampo]=data[elementDetalle.nombreCampo]
                            
                            /** Descomentar si queremos mostrar el alias como columna de los valores */
                            js[elementDetalle.alias]=data[elementDetalle.nombreCampo]
                            js = { ...js}
                        } 

                        js['grupo']=nomGrupo
                        js['fechaPaga'] = fechaPagaSelected
                    
                    }
                    final.push(js)
                }
            
                jsonFinal['final']=[...final]
                
            }

            arrayFinal.push(jsonFinal)
            //console.log('existe ',jsonFinal)
            resp.status(200).json(arrayFinal)

        })
    })

})

/**
 * @swagger
 * /api/nomina/MetaGrupo:
 *   get:
 *      description: Regresa la información de la sabana de meta4 sin guardar los datos, se usa para poder consultar la poliza antes de generarla
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
 router.route('/MetaGrupo').get((req,resp) => {
    
    dbNomina.GruposMeta().then(resG =>{
        resp.status(200).json(resG[1])
    })

})

/**
 * @swagger
 * /api/nomina/CalculoPolizaNomina:
 *   post:
 *      description: Nuevo calculo de nomina inclue el prorrateo unicamente de las cuentas 6 miles  y 5 miles NUEVO_CALCULO_POLIZAS_NOMINA
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: mes de la paga
 *            type: string
 *            in: formData
 *            required: true
 *          - name: anio
 *            description: año de la paga
 *            in: formData
 *            type: string
 *            required: true
 *          - name: fechaNomina
 *            description: Fecha de la paga formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipoNomina
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            in: formData
 *            type: string
 *            required: true
 *          - name: lugarTrabajo
 *            description: id de meta 4 del lugar de trabajo
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
 router.route('/CalculoPolizaNomina').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio
    let fechaNomina = req.body.fechaNomina
    let tipoNomina = req.body.tipoNomina
    let lugarTrabajo = req.body.lugarTrabajo

    dbNomina.CalculoPolizaNomina(mes,anio,fechaNomina,tipoNomina,lugarTrabajo).then(res =>{
        if(res.length > 0 ){
            resp.status(200).json(res[0])
        }else{
            resp.status(200).json([])
        }
        
    })

})


/**
 * @swagger
 * /api/nomina/ConsultaAsientoPolizaBpro:
 *   post:
 *      description: Consulta la informacion que se dejo en tablas intermedias sp CONSULTA_ASIENTO_POLIZA_BPRO
 *      tags: [Nomina]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idSucursal
 *            description: id Meta 4 del lugar de trabajo
 *            type: string
 *            in: formData
 *            required: true
 *          - name: fechaPaga
 *            description: Fecha de la paga formato YYYYMMdd
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipo
 *            description: (S) semanal, (Q) quincena, (FS) finiquito semana, (FQ) finiquito quincena
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
 router.route('/ConsultaAsientoPolizaBpro').post((req,resp) => {
    
    let idSucursal = req.body.idSucursal
    let fechaPaga = req.body.fechaPaga
    let tipo = req.body.tipo

    dbNomina.ConsultaAsientoPolizaBpro(idSucursal,fechaPaga,tipo).then(res =>{
        if(res.length > 0 ){
            resp.status(200).json(res[0])
        }else{
            resp.status(200).json([])
        }
        
    })

})

module.exports = router