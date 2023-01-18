const mailer = require('nodemailer');

const sendMail = async(to)=>{


    const transporter = mailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'samir.royal4all@gmail.com',
            pass: 'vgmaexpgaghcqzqv'
        }
    })

    const options = {
        from: 'samir.royal4all@gmail.com',
        to: to,
        subject: 'Hello',
        text: 'Hello world'
    }

    transporter.sendMail(options, (err, info)=>{
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}

module.exports = {sendMail};