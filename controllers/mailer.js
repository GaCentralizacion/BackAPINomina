nodemailer = require("nodemailer");
const Promise = require('bluebird');

function sendMail(asunto, email, body){
    try {

        return new Promise(function(resolve,reject){
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                host: 'smtp.gmail.com',            
                secure: false,           
                auth: {
                    user: 'reportes.bpro1@grupoandrade.com',
                    pass: '#h&EdV4R'
                },
                tls: { rejectUnauthorized: false }
           });
    
            var message = {
                from: "reportes.bpro1@grupoandrade.com",
                to: email,
                subject: asunto,
                html:`<div style="width: 310px; height: 140px;">
                       <center>
                        <img style="width: 80%;" src="https://cdn.discordapp.com/attachments/588785789438001183/613027505137516599/logoA.png" alt="GrupoAndrade" />
                       </center>
                    </div>
                    <div> ${body} </div>`,
                headers:{
                    priority:'high',
                    date: new Date()
                }

            }
    
            let respuesta
            //Enviamos el Email
            transporter.sendMail(message, function(err) {
                if (!err) {
                    resolve({response: {success: 1, msg: 'Se envió el correo con éxito.'}});
                } else {
                    resolve({response: {success: 0, msg: 'No se envió el correo con éxito, intentelo mas tarde.', error: err}});
                }
            });
            transporter.close;
        })

    } catch (error) {
        
    }
}

module.exports={
sendMail
}