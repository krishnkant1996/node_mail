//Load required modules
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//Fill out SMTP credentials
var transport = nodemailer.createTransport(smtpTransport({
	service: 'Gmail',
	host : 'smtp.gmail.com',
	secureConnection: true,
	port : 465,
	auth:{
		user : "",     //username
		pass : ""                //password
	}
}));

//
var msg = {
	transport :  transport,
	text : "U got a mail from Node.js by krishnkant tiwari"  ,   //Message
	from : "<krishnkant120@gmail.com>",                 //From
	subject : "Mail with the help of Nodejs"          //Subject
};

// List of Receivers 
var maillist = [
	'<shetyv@gmail.com> ,<tiwarineeraj2012@gmail.com>,<vinaysingh@sistec.ac.in>'
]



transport.verify(function(error, success) {  //Verify the conncetion
   if (error) {
        console.log(error);
   }
   else {
        console.log('Server is ready to take our messages');
		maillist.forEach(function(to,i){
			msg.to = to;
			transport.sendMail(msg,function(err){   //Mail 
				if(err){
					console.log("not send");
					return;
				}
				console.log('Send to ' + to);
			});
	});
   }
});


