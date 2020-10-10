var sendMail = require('../config/mail')

module.exports = {
    sendMailController : function(req,res){
        console.log('sending data to config ',req.body);
        sendMail(req.body)
        // .then((msg)=>{
        //     res.status(200).end(msg);
        // })
        res.end("sent");
    }
}