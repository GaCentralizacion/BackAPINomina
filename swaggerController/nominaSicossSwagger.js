let express = require('express')
let router = express.Router()
const peticion = require('../controllers/nominaSicoss')

/**
 * @swagger
 * /api/nominaSICOSS/VistaPreviaPoliza:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [NominaSICOSS]
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
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: centroId
 *            description: Lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 4. Aguinaldo, 5. PTU
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
 router.route('/VistaPreviaPoliza').post((req,resp) =>{

    let anio = req.body.anio
    let mes = req.body.mes
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let centroId = req.body.centroId
    let tipoNomina = req.body.tipoNomina

    peticion.vistaPreviaPoliza(anio,mes,periodoId,periodo,centroId,tipoNomina).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nominaSICOSS/CalculoPolizaSicoss:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [NominaSICOSS]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: Mes de la paga
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Año de la paga
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 4. Aguinaldo, 5. PTU
 *            in: formData
 *            type: number
 *            required: true
 *          - name: Lw
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/CalculoPolizaSicoss').post((req,resp) =>{

    let mes = req.body.mes
    let anio = req.body.anio
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let tipoNomina = req.body.tipoNomina
    let lugarTrabajo = req.body.lugarTrabajo

    peticion.CalculoPolizaSicoss(mes,anio,periodoId,periodo,tipoNomina,lugarTrabajo).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nominaSICOSS/ConsultaSabanaMetaGrupoSicoss:
 *   post:
 *      description: Regresa la información de la sabana de meta4 sin guardar los datos, se usa para poder consultar la poliza antes de generarla
 *      tags: [NominaSICOSS]
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
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: centroId
 *            description: Lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 4. Aguinaldo, 5. PTU
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fechaPaga
 *            description: Fecha de la paga
 *            in: formData
 *            type: string
 *            required: true
 *      responses:
 *          '200':
 *              description: tabla con la sabana de meta4
 */
router.route('/ConsultaSabanaMetaGrupoSicoss').post((req, resp) => {
   
    let anio = req.body.anio
    let mes = req.body.mes
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let centroId = req.body.centroId
    let tipoNomina = req.body.tipoNomina
    let fechaPagaSelected = req.body.fechaPaga

    let jsonGrupos;
    let jsonGruposDetalle;
    let jsonData;
    let jsonFinal={};
    let js = new Object()
    let final = []
    let arrayFinal = []

    peticion.GruposMetaSICOSS().then(resG => {
        
        jsonGrupos = resG[0]
        jsonGruposDetalle = resG[1]

        peticion.vistaPreviaPoliza(anio,mes,periodoId,periodo,centroId,tipoNomina).then(resD =>{
            
            jsonData = resD[0]

            /**Recorremos los grupos encontrados */
            for (let i = 0; i < jsonGrupos.length; i++){
                const nomGrupo = jsonGrupos[i].nombre_grupo;
                
               
                //final = new Array()

                /**Filtramos los detalles del grupo */
                let detalle = jsonGruposDetalle.filter(x => x.nombre_grupo === nomGrupo)

                /**Recorremos los datos de la sabana */
                for (let j = 0; j < jsonData.length; j++){
                    const data = jsonData[j]

                    js = new Object()

                    /**Recorremos los detalles del grupo */
                    for (let d = 0; d < detalle.length; d++){
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

                    if(Object.keys(js).length !== 0){
                        final.push(js)
                    }
                    
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
 * /api/nominaSICOSS/ConsultaAsientoPolizaBproSicoss:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [NominaSICOSS]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idSucursal
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fechaPaga
 *            description: Fecha de paga
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipo
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/ConsultaAsientoPolizaBproSicoss').post((req,resp) =>{

    let idSucursal = req.body.idSucursal
    let fechaPaga = req.body.fechaPaga
    let tipo = req.body.tipo
    let periodo = req.body.periodo
    let tipoNomina = req.body.tipoNomina

    peticion.ConsultaAsientoPolizaBproSICOSS(idSucursal,fechaPaga,tipo,periodo, tipoNomina).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nominaSICOSS/ConsultaBitacoraPolizasSICOSS:
 *   post:
 *      description: Regresa las fechas de paga de nomina de acuerdo a los parametros de mes y año
 *      tags: [NominaSICOSS]
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
router.route('/ConsultaBitacoraPolizasSICOSS').post((req,resp) => {
    
    let mes = req.body.mes
    let anio = req.body.anio

    peticion.ConsultaBitacoraPolizasSICOSS(mes, anio).then(res =>{
        resp.status(200).json(res[0])
    })
})

/**
 * @swagger
 * /api/nominaSICOSS/ConsultaPolizaSICOSS:
 *   post:
 *      description: Regresa la informacion de la poliza Generada
 *      tags: [NominaSICOSS]
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
router.route('/ConsultaPolizaSICOSS').post((req,resp) => {

    let lugarTrabajo = req.body.lugarTrabajo
    let idCabecero = req.body.idCabecero

    peticion.ConsultaPolizaSICOSS(lugarTrabajo,idCabecero).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nominaSICOSS/ConsultaAsientoPolizaBproEmpleadoSICOSS:
 *   post:
 *      description: Regresa la informacion de la poliza antes de ser enviada a BPRO
 *      tags: [NominaSICOSS]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idSucursal
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *          - name: fechaPaga
 *            description: Fecha de paga
 *            in: formData
 *            type: string
 *            required: true
 *          - name: tipo
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/ConsultaAsientoPolizaBproEmpleadoSICOSS').post((req,resp) =>{

    let idSucursal = req.body.idSucursal
    let fechaPaga = req.body.fechaPaga
    let tipo = req.body.tipo
    let tipoNomina = req.body.tipoNomina

    peticion.ConsultaAsientoPolizaBproEmpleadoSICOSS(idSucursal,fechaPaga,tipo, tipoNomina).then(res =>{
        resp.status(200).json(res[0])
    })

})

/**
 * @swagger
 * /api/nominaSICOSS/CalculoPolizaAbiertaSicoss:
 *   post:
 *      description: Regresa la informacion de pagas abiertas para la poliza antes de ser enviada a BPRO
 *      tags: [NominaSICOSS]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: mes
 *            description: Mes de la paga
 *            in: formData
 *            type: number
 *            required: true
 *          - name: anio
 *            description: Año de la paga
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodoId
 *            description: Es la frecuencia 1. Semanal, 2. Quincenal
 *            in: formData
 *            type: number
 *            required: true
 *          - name: periodo
 *            description: Es el número de semana o quincena
 *            in: formData
 *            type: number
 *            required: true
 *          - name: tipoNomina
 *            description: 1. Normal, 2.Finiquitos, 4. Aguinaldo, 5. PTU, 6. Vales despensa
 *            in: formData
 *            type: number
 *            required: true
 *          - name: Lw
 *            description: lugar de trabajo
 *            in: formData
 *            type: number
 *            required: true
 *      responses:
 *          '200':
 *              description: Se obtuvo la informacion de sicoss
 */
router.route('/CalculoPolizaAbiertaSicoss').post((req,resp) =>{

    let mes = req.body.mes
    let anio = req.body.anio
    let periodoId = req.body.periodoId
    let periodo = req.body.periodo
    let tipoNomina = req.body.tipoNomina
    let lugarTrabajo = req.body.Lw

    peticion.CalculoPolizaAbiertaSicoss(mes,anio,periodoId,periodo,tipoNomina,lugarTrabajo).then(res =>{
        resp.status(200).json(res[0])
    })

})

module.exports = router