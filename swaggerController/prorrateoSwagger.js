let express = require('express')
let router = express.Router()
const peticion = require('../controllers/Prorrateo')

/**
 * @swagger
 * /api/prorrateo/EmpleadosActivosSucursal:
 *   get:
 *      description: Lista de los empleados activo por sucursal(EMPLEADOS_ACTIVOS_SICOSS)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: centroId
 *            description: Centro de trabajo
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Empleados activos
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/EmpleadosActivosSucursal').get((req,resp) =>{

    let centroId = req.query.centroId

    if (!centroId) {
        return resp.status(400).json({ message: 'La sucursal es requerida' });
    }

    peticion.EmpleadosActivosSucursal(centroId).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/SucursalProrrateoConcepto:
 *   get:
 *      description: Catalogo de sucursales para hacer prorrato por concepto(SUCURSAL_PRORRATEO_CONCEPTO)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Catalogo de sucursales
 *          '400':
 *              description: No se pudo obtener datos
 */
router.route('/SucursalProrrateoConcepto').get((req,resp) =>{

    peticion.SucursalProrrateoConcepto().then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/InsertaProrrateo:
 *   post:
 *      description: Inserta el detalle del prorrate del empleado seleccionado(INS_PRORRATEO_NUEVO)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idRh
 *            description: id RH de sicoss del trabajador
 *            type: number
 *            required: true
 *            in: formData
 *          - name: Centro_Id
 *            description: id sicoss de la sucursal a la que pertenece el empleado
 *            type: number
 *            required: true
 *            in: formData
 *          - name: Centro_Id_Prorrateo
 *            description: id sicoss de la sucursal en la que se va a prorratear
 *            type: number
 *            required: true
 *            in: formData
 *          - name: porcentaje
 *            description: porcentaje que se le dara al prorrateo
 *            type: number
 *            required: true
 *            in: formData
 *      responses:
 *          '200':
 *              description: Se inserto correctamente
 *          '400':
 *              description: Error al insertar, esposible que ya exista el dato
 */
router.route('/InsertaProrrateo').post((req,resp) =>{

    let idRh = req.body.idRh
    let Centro_Id = req.body.Centro_Id
    let Centro_Id_Prorrateo = req.body.Centro_Id_Prorrateo
    let porcentaje = req.body.porcentaje

    if (!idRh) {
        return resp.status(400).json({ message: 'El id del empleado es requerido' });
    }
    if (!Centro_Id) {
        return resp.status(400).json({ message: 'La sucursal es requerida' });
    }
    if (!porcentaje) {
        return resp.status(400).json({ message: 'El porcentaje es requerido' });
    }

    peticion.InsertaProrrateo(idRh,Centro_Id,Centro_Id_Prorrateo,porcentaje).then(res =>{
        resp.status(200).json(res[0])
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/DetalleProrrateoEmpleado:
 *   get:
 *      description: Detalle del prorrate del empleado seleccionado(SEL_PRORRATEO_NUEVO_EMPLEADO)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idRh
 *            description: id RH de sicoss del trabajador
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Empleados activos
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/DetalleProrrateoEmpleado').get((req,resp) =>{

    let idRh = req.query.idRh

    if (!idRh) {
        return resp.status(400).json({ message: 'El id del empleado es requerido' });
    }

    peticion.DetalleProrrateoEmpleado(idRh).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})


/**
 * @swagger
 * /api/prorrateo/EliminaProrrateoEmpleado:
 *   delete:
 *      description: Borrado logico del prorrateo seleccionado(SEL_PRORRATEO_NUEVO_EMPLEADO)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: idRh
 *            description: id RH de sicoss del trabajador
 *            type: number
 *            required: true
 *            in: query
 *          - name: id
 *            description: id de la tabla
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Empleados activos
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/EliminaProrrateoEmpleado').delete((req,resp) =>{

    let idRh = req.query.idRh
    let id = req.query.id

    if (!idRh) {
        return resp.status(400).json({ message: 'El id del empleado es requerido' });
    }

    if (!id) {
        return resp.status(400).json({ message: 'El id es requerido' });
    }

    peticion.EliminaProrrateoEmpleado(idRh,id).then(res =>{
        resp.status(200).json(res[0])
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/ProrrateosSucursal:
 *   get:
 *      description: Detalle del prorrate de la seleccionada(SEL_PRORRATEO_SUCURSAL)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Centro_Id
 *            description: id de sicoss de la sucursal
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Detalle del prorrateo por sucursal seleccionada
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/ProrrateosSucursal').get((req,resp) =>{

    let Centro_Id = req.query.Centro_Id

    if (!Centro_Id) {
        return resp.status(400).json({ message: 'El id del empleado es requerido' });
    }

    peticion.ProrrateosSucursal(Centro_Id).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/SucursalProrrateoDisponible:
 *   get:
 *      description: lista de sucursales disponibles para aplicar prorrateo por conceptos(SEL_SUCURSAL_PRORRATEO_DISPONIBLE)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Sucursales disponibles
 *          '400':
 *              description: 
 */
router.route('/SucursalProrrateoDisponible').get((req,resp) =>{

    peticion.SucursalProrrateoDisponible().then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/ConceptosProrrateoSicoss:
 *   get:
 *      description: Muestra el listado de los conceptos para una nomina por sucursal para prorrateo, solo se muestran conceptos de percepcion, si la cuenta es null quiere decir que no se ha configurado(SEL_CONCEPTOS_PRORRATEO_SICOSS)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Centro_Id_activo
 *            description: id de sicoss de la sucursal que esta habilitada para prorrateo
 *            type: number
 *            required: true
 *            in: query
 *          - name: Centro_Id
 *            description: id de sicoss de la sucursal
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Concepto de polizas de nomina
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/ConceptosProrrateoSicoss').get((req,resp) =>{

    let Centro_Id_activo = req.query.Centro_Id_activo
    let Centro_Id = req.query.Centro_Id

    if (!Centro_Id) {
        return resp.status(400).json({ message: 'La sucursal es requerida' });
    }

    peticion.ConceptosProrrateoSicoss(Centro_Id_activo,Centro_Id).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/ValidaCuentaContableProrrateo:
 *   get:
 *      description: Muestra el listado de los conceptos para una nomina por sucursal para prorrateo, solo se muestran conceptos de percepcion, si la cuenta es null quiere decir que no se ha configurado(SEL_CONCEPTOS_PRORRATEO_SICOSS)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: dirIp
 *            description: ip del servidor
 *            type: string
 *            required: true
 *            in: query
 *          - name: nombreBaseDatos
 *            description: nombre de la bd en donde se buscara la cuenta
 *            type: string
 *            required: true
 *            in: query
 *          - name: cuentaContable
 *            description: cuenta contable
 *            type: string
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Concepto de polizas de nomina
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/ValidaCuentaContableProrrateo').get((req,resp) =>{

    let dirIp = req.query.dirIp
    let nombreBaseDatos = req.query.nombreBaseDatos
    let cuentaContable = req.query.cuentaContable

    if (!dirIp) {
        return resp.status(400).json({ message: 'La IP es requerida' });
    }
    if (!nombreBaseDatos) {
        return resp.status(400).json({ message: 'La BD es requerida' });
    }
    if (!cuentaContable) {
        return resp.status(400).json({ message: 'La cuenta contable es requerida' });
    }

    peticion.ValidaCuentaContableProrrateo(dirIp,nombreBaseDatos,cuentaContable).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})

/**
 * @swagger
 * /api/prorrateo/InsConceptosProrrateoSicoss:
 *   post:
 *      description: Inserta los conceptos que ve pueden prorratear en la nomina(INS_CONCEPTOS_PRORRATEO_SICOSS)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: dirIp
 *            description: Servidor
 *            type: number
 *            required: true
 *            in: formData
 *          - name: nombreBaseDatos
 *            description: BD donde se buscara la cuenta contable
 *            type: number
 *            required: true
 *            in: formData
 *          - name: grupoId
 *            description: grupoId del concepto de nomina
 *            type: number
 *            required: true
 *            in: formData
 *          - name: nombreGrupo
 *            description: Concepto de nomina
 *            type: string
 *            required: true
 *            in: formData
 *          - name: DescripcionBPRO
 *            description: descripcion de la cuenta contable en bpro
 *            type: string
 *            required: true
 *            in: formData
 *          - name: estatus
 *            description: estatus para indicar si esta activa o no la configuracion
 *            type: number
 *            required: true
 *            in: formData
 *          - name: cuenta
 *            description: Cuenta contable que se usara para la poliza
 *            type: string
 *            required: true
 *            in: formData
 *      responses:
 *          '200':
 *              description: Se inserto correctamente
 *          '400':
 *              description: Error al insertar, esposible que ya exista el dato
 */
router.route('/InsConceptosProrrateoSicoss').post((req,resp) =>{

    let Centro_Id_Activo = req.body.Centro_Id_Activo
    let Centro_Id = req.body.Centro_Id
    let grupoId = req.body.grupoId
    let nombreGrupo = req.body.nombreGrupo
    let DescripcionBPRO = req.body.DescripcionBPRO
    let estatus = req.body.estatus
    let cuenta = req.body.cuenta

    if (!Centro_Id_Activo) {
        return resp.status(400).json({ message: 'la Ip es querida' });
    }
    if (!Centro_Id) {
        return resp.status(400).json({ message: 'La BD es requerida' });
    }
    if (!grupoId) {
        return resp.status(400).json({ message: 'El grupo es requerido' });
    }
    if (!nombreGrupo) {
        return resp.status(400).json({ message: 'El nombre es requerido' });
    }
    if (!DescripcionBPRO && cuenta!=='') {
        return resp.status(400).json({ message: 'La descripcion es requerida' });
    }
    if (!estatus) {
        return resp.status(400).json({ message: 'El estatus es requerido' });
    }
    if (cuenta === undefined || cuenta === null) {
        return resp.status(400).json({ message: 'La cuenta contable es requerida' });
    }

    peticion.InsConceptosProrrateoSicoss(Centro_Id_Activo,Centro_Id,grupoId,nombreGrupo,DescripcionBPRO,estatus,cuenta).then(res =>{
        resp.status(200).json(res[0])
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})


/**
 * @swagger
 * /api/prorrateo/BuscaCuentaContable:
 *   get:
 *      description: Muestra el listado de los conceptos para una nomina por sucursal para prorrateo, solo se muestran conceptos de percepcion, si la cuenta es null quiere decir que no se ha configurado(SEL_CONCEPTOS_PRORRATEO_SICOSS)
 *      tags: [Prorrateo]
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Centro_Id_prorrateo
 *            description: Sucursal en la que se va a buscar la cuenta
 *            type: number
 *            required: true
 *            in: query
 *          - name: Centro_Id
 *            description: Sucursal de las cuentas que queremos
 *            type: number
 *            required: true
 *            in: query
 *      responses:
 *          '200':
 *              description: Listado de cuentas contables encontradas
 *          '400':
 *              description: Parametro faltante o inválido
 */
router.route('/BuscaCuentaContable').get((req,resp) =>{

    let Centro_Id_prorrateo = req.query.Centro_Id_prorrateo
    let Centro_Id = req.query.Centro_Id


    peticion.BuscaCuentaContable(Centro_Id_prorrateo,Centro_Id).then(res =>{
        resp.status(200).json(res)
    }).catch(err => {
        resp.status(500).json({ message: 'Error interno del servidor', error: err });
    });

})


module.exports = router