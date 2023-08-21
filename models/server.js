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
                './swaggerController/reasignaTicketSwagger.js',
            ]
        }
        const swaggerDocs = swaggerJsDoc(swaggerOptions)
        this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
    }

    routes(){
        this.app.use('/api/reasignaTicket', require('../swaggerController/reasignaTicketSwagger'))
    }

    listen(){
        this.app.listen(this.port)
        console.log('iniciando');
    }
}

module.exports = Server