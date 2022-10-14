let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

class Server{
    
    constructor(){
        
        this.app = express()
        
        this.port = process.env.port || 8090

        this.middlewares()

        this.routes()
    }

    
    middlewares(){
        //CORS
        this.app.use(cors())

        //BODY-PARSE
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(bodyParser.json())

        //SWAGGER
        const swaggerOptions = {
            swaggerDefinition:{
                info:{
                    version:"1.0.0",
                    title:'api rest',
                    description:'Api para el proyecto de nomina',
                    contact:{
                        name:'Roberto Almanza'
                    },
                    servers:[
                        "http:localhost:8090"
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
                './swaggerController/accesoSwagger.js'
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
    }

    listen(){
        this.app.listen(this.port)
        console.log('iniciando');
    }
}

module.exports = Server