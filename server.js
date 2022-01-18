var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const nodemailer = require('nodemailer');
USER = process.env.USER
PASS = process.env.PASS

app.use(express.static('./Simer00'));
app.use(express.json());


//--------------------------------------GETS--------------------------------------//

app.get('/', function(req, res) {
  res.sendFile('/home/runner/Simer00/Simer00/index.html')
 // to get to the home page
});

app.get('/alt', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/alt.html')
  // to get to the alt page
});

app.get('/games', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games.html')
  // to get to the games page
});

app.get('/animations', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/animations.html')
  // to get to animations
});

app.get('/minecraft', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/minecraft/minecraft.html')
  // to get to minecraft
});

app.get('/killtheking', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/killTheKing/index.html')
  // to get to KillTheKing
});

app.get('/stickHero', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/stickhero/index.html')
  // to get to StickHero
});

app.get('/themine', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/theMine/index.html')
  // to get to TheMine
});

app.get('/voxelmaker', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/voxelMaker/index.html')
  // to get to VoxelMaker
});

app.get('/towerblocks', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/towerBlocks/index.html')
  // to get to TowerBlocks
});

app.get('/crossyRoads', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/games/crossyRoads/index.html')
  // to get to CrossyRoads
});

app.get('/Threejs', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/threejs.html')
  // to get to threejs
});

app.get('/*', (req, res) => {
  res.sendFile('/home/runner/Simer00/Simer00/offline.html')
  // used for 404 if no other get functions are triggered
});

//-----------------------------------CONTACT US------------------------------------//

app.post('/', (req, res) => {
  // console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${USER}`,
      pass: `${PASS}`,
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: `${USER}`,
    subject: `Message from ${req.body.email} : ${req.body.subject}`,
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\n\nMessage: \n${req.body.message}`
  }

  const mailOptionsSender = {
    from: `${USER}`,
    to: req.body.email,
    subject: `Message from : Your email was recieved!`,
    //text: `Hello ${req.body.name}, \n \n This is to inform you that your email was recieved! I'll be in touch with you shortly. In a rare case you don't hear back from me, Shoot me another email with the reference number\n \n **Message Content:** \n ${req.body.message}`
    html:`<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0;">
 	<meta name="format-detection" content="telephone=no"/>

	<!-- Responsive Mobile-First Email Template by Konstantin Savchenko, 2015.
	https://github.com/konsav/email-templates/  -->

	<style>
/* Reset styles */
body { margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important;}
body, table, td, div, p, a { -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; }
table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0; }
img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
#outlook a { padding: 0; }
.ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; }
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }

/* Rounded corners for advanced mail clients only */
@media all and (min-width: 560px) {
	.container { border-radius: 8px; -webkit-border-radius: 8px; -moz-border-radius: 8px; -khtml-border-radius: 8px; }
}

/* Set color for auto links (addresses, dates, etc.) */
a, a:hover {
	color: #FFFFFF;
}
.footer a, .footer a:hover {
	color: #828999;
}

 	</style>

	<!-- MESSAGE SUBJECT -->
	<title>Responsive HTML email templates</title>

</head>

<!-- BODY -->
<!-- Set message background color (twice) and text color (twice) -->
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
	background-color: #2D3445;
	color: #FFFFFF;"
	bgcolor="#2D3445"
	text="#FFFFFF">

<!-- SECTION / BACKGROUND -->
<!-- Set message background color one again -->
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background"><tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
	bgcolor="#2D3445">

<!-- WRAPPER -->
<!-- Set wrapper width (twice) -->
<table border="0" cellpadding="0" cellspacing="0" align="center"
	width="500" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 500px;" class="wrapper">

	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 20px;
			padding-bottom: 20px;">

			<!-- PREHEADER -->
			<!-- Set text color to background color -->
			<div style="display: none; visibility: hidden; overflow: hidden; opacity: 0; font-size: 1px; line-height: 1px; height: 0; max-height: 0; max-width: 0;
				color: #2D3445;" class="preheader">
				AutoReply: &nbsp;Your message was&nbsp;successfully received.&nbsp;</div>

			<!-- LOGO -->
			<!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2. URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content=logo&utm_campaign={{Campaign-Name}} -->
			<a target="_blank" style="text-decoration: none;"
				href="https://Simer00.repl.co"><img border="0" vspace="0" hspace="0"
				src="https://cdn.discordapp.com/attachments/804488707817472100/824668562613862440/hacker.png"
				width="100" height="100"
				alt="Logo" title="Logo" style="
				color: #FFFFFF;
				font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" /></a>

		</td>
	</tr>

	<!-- HERO IMAGE -->
	<!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 (wrapper x2). Do not set height for flexible images (including "auto"). URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Ìmage-Name}}&utm_campaign={{Campaign-Name}} -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;
			padding-top: 0px;" class="hero"><a target="_blank" style="text-decoration: none;"
			href="https://Simer00.repl.co/received.html"><img border="0" vspace="0" hspace="0"
			src="https://cdn.discordapp.com/attachments/804488707817472100/824667220323074148/Splash.png"
			alt="Please enable images to view this content" title="Hero Image"
			width="340" style="
			width: 87.5%;
			max-width: 340px;
			color: #FFFFFF; font-size: 13px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;"/></a></td>
	</tr>

	<!-- SUPHEADER -->
	<!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 14px; font-weight: 400; line-height: 150%; letter-spacing: 2px;
			padding-top: 27px;
			padding-bottom: 0;
			color: #FFFFFF;
			font-family: sans-serif;" class="supheader">
				WELCOME
		</td>
	</tr>

	<!-- HEADER -->
	<!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;  padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
			padding-top: 5px;
			color: #FFFFFF;
			font-family: sans-serif;" class="header">
				Email Received
		</td>
	</tr>

	<!-- PARAGRAPH -->
	<!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
			padding-top: 15px;
			color: #FFFFFF;
			font-family: sans-serif;" class="paragraph">
				Hello ${req.body.name}, This is&nbsp;to&nbsp;inform you that your&nbsp;email was successfully received&nbsp;— &nbsp;I'll&nbsp;reply&nbsp;back&nbsp;shortly. While you wait, check out some browser games!
		</td>
	</tr>

	<!-- BUTTON -->
	<!-- Set button background color at TD, link/text color at A and TD, font family ("sans-serif" or "Georgia, serif") at TD. For verification codes add "letter-spacing: 5px;". Link format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Button-Name}}&utm_campaign={{Campaign-Name}} -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;
			padding-bottom: 5px;" class="button"><a
			href="https://Simer00.repl.co/games.html" target="_blank" style="text-decoration: underline;">
				<table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;"><tr><td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: underline; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
					bgcolor="#E9703E"><a target="_blank" style="text-decoration: underline;
					color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;"
					href="https://Simer00.repl.co/games.html">
						Browser Games
					</a>
			</td></tr></table></a>
		</td>
	</tr>

	<!-- LINE -->
	<!-- Set line color -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 30px;" class="line"><hr
			color="#565F73" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
		</td>
	</tr>

	<!-- FOOTER -->
	<!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
	<tr>
		<td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
			padding-top: 10px;
			padding-bottom: 20px;
			color: #828999;
			font-family: sans-serif;" class="footer">

				This email was sent to&nbsp;you as an&nbsp;autoreply&nbsp;upon receiving&nbsp;&nbsp;your response. You&nbsp;could change your <a href="https://Simer00.repl.co/" target="_blank" style="text-decoration: underline; color: #828999; font-family: sans-serif; font-size: 13px; font-weight: 400; line-height: 150%;">subscription settings</a> anytime.

				<!-- ANALYTICS -->
				<!-- http://www.google-analytics.com/collect?v=1&tid={{UA-Tracking-ID}}&cid={{Client-ID}}&t=event&ec=email&ea=open&cs={{Campaign-Source}}&cm=email&cn={{Campaign-Name}} -->
				<img width="1" height="1" border="0" vspace="0" hspace="0" style="margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;"
				src="https://raw.githubusercontent.com/konsav/email-templates/master/images/tracker.png" />

		</td>
	</tr>

<!-- End of WRAPPER -->
</table>

<!-- End of SECTION / BACKGROUND -->
</td></tr></table>

</body>
</html>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email Sent: ' + info.response);
      res.send("u+rLg/N6uoLriN6ToTW/hI3HfznffUuvakPdNQdW48Fn7uw= ENIGMA STREAM BASE64 Simer00");
    }
  })

  transporter.sendMail(mailOptionsSender, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email Sent to Sender: ' + info.response);
    }
  })
});

var server = app.listen(8080, function() {
  var port = server.address().port
  var family = server.address().family
  var address = server.address().address

  console.log("Server running on Port:", port, "| Family:", family,"| Address", address)
});