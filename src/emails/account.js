const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

const sendWelcomeEmail = (email, name) =>{
    const mail = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thanks For Joining!",
        text: `Welcome to the Task App, ${name}. Let me know how you get along with the app.`
    }

    transporter.sendMail(mail, (error, info) =>{
        if(error)console.log(error)
        else console.log(info.response)
    })
}

const sendCancellationEmail = (email, name) =>{
    const mail = {
        from: "sunnycarlo0203@gmail.com",
        to: email,
        subject: "Sorry To See You Go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }

    transporter.sendMail(mail, (error, info) =>{
        if(error)console.log(error)
        else console.log(info.response)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}


