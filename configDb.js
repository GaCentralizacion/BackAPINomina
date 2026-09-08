const config = {
    user:'sa',
    password:'S0p0rt3',
    server:'192.168.20.59',
    database:'PolizasNomina',
    connectionTimeout: 15000,
    requestTimeout: 300000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options:{
        trustedconnection:false,
        enableArithAbort:true,
        encrypt:false
    }
}

module.exports = config;
