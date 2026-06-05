let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

class Server{
    
    constructor(){
        
        this.app = express()
        
        this.port = process.env.port || 8091

        this.middlewares()

        this.routes()

        this.errorHandler()
    }

    
    middlewares(){
        //CORS
        this.app.use(cors())

        //BODY-PARSER
        const bodyLimit = process.env.BODY_LIMIT || '60mb'
        this.app.use(bodyParser.urlencoded({ extended: true, limit: bodyLimit }))
        this.app.use(bodyParser.json({ limit: bodyLimit }))

        //SWAGGER
        const swaggerOptions = {
            swaggerDefinition:{
                info:{
                    version:"1.0.0",
                    title:'api para uso de los ejecutables',
                    description:'Api ejecutables',
                    contact:{
                        name:'Roberto Almanza'
                    },
                    servers:[
                        "http:localhost:8091"
                    ]
                }
            },
            apis:[
                './swaggerController/nominaSwagger.js',
                './swaggerController/prorrateoFacturaSwagger.js',
                './swaggerController/polizasNominaSwagger.js',
                './swaggerController/comisionesFlotillasSwagger.js',
                './swaggerController/departamentosSwagger.js',
                './swaggerController/reporteBalanzaSwagger.js',
                './swaggerController/porcentajeSucursalSwagger.js',
                './swaggerController/accesoSwagger.js',
                './swaggerController/catalogosSwagger.js',
                './swaggerController/nominaSicossSwagger.js',
                './swaggerController/prorrateoAgenciasSwagger.js',
                './swaggerController/repercusionSwagger.js',
                './swaggerController/mailerSwagger.js',
                './swaggerController/prorrateoSwagger.js',
                './swaggerController/conciliacionCPASwagger.js'
            ]
        }
        const swaggerDocs = swaggerJsDoc(swaggerOptions)
        this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
    }

    routes(){
        this.app.use('/api/nomina', require('../swaggerController/nominaSwagger'))
        this.app.use('/api/prorrateoFacturas', require('../swaggerController/prorrateoFacturaSwagger'))
        this.app.use('/api/polizasNomina', require('../swaggerController/polizasNominaSwagger'))
        this.app.use('/api/comisionesFlotillas', require('../swaggerController/comisionesFlotillasSwagger'))
        this.app.use('/api/departamentos', require('../swaggerController/departamentosSwagger'))
        this.app.use('/api/porcentajeSucursal', require('../swaggerController/porcentajeSucursalSwagger'))
        this.app.use('/api/reporteBalanza', require('../swaggerController/reporteBalanzaSwagger'))
        this.app.use('/api/acceso', require('../swaggerController/accesoSwagger'))
        this.app.use('/api/catalogosSICOSS', require('../swaggerController/catalogosSwagger'))
        this.app.use('/api/nominaSICOSS', require('../swaggerController/nominaSicossSwagger'))
        this.app.use('/api/prorrateoAgencias', require('../swaggerController/prorrateoAgenciasSwagger'))
        this.app.use('/api/repercusion', require('../swaggerController/repercusionSwagger'))
        this.app.use('/api/mailer', require('../swaggerController/mailerSwagger'))
        this.app.use('/api/prorrateo', require('../swaggerController/prorrateoSwagger')),
        this.app.use('/api/conciliacion', require('../swaggerController/conciliacionCPASwagger'))
    }

    errorHandler(){
        this.app.use((err, req, res, next) => {
            if (err && err.type === 'entity.too.large') {
                return res.status(413).json({
                    ok: false,
                    message: 'Payload demasiado grande',
                    limit: process.env.BODY_LIMIT || '60mb'
                })
            }

            if (err) {
                console.error('Error no controlado:', err.message)
                return res.status(err.status || 500).json({
                    ok: false,
                    message: 'Error interno del servidor'
                })
            }

            next()
        })
    }

    listen(){
        this.app.listen(this.port)
        console.log('iniciando');
    }
}

module.exports = Server
