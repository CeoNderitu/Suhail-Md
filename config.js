const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://www.youtube.com/@bluepipsuniversity";
global.website=process.env.GURL || "https://www.youtube.com/@bluepipsuniversity" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "00000000000" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "000000000";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5ndStHcENXSGtaL0pGUnpFTGZvUXVqenI1enZNZXBSTExUUlE5VWo2d1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBQWFRjTGZXUkwyMmdCRW1Yd2dGN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhhODFjMTctNjVmNi00MTU2LTlkZTMtMzZiNWJjNzRiNmNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjI3LFxuICAgICAgOTksXG4gICAgICA5MyxcbiAgICAgIDc5LFxuICAgICAgOTcsXG4gICAgICA1MSxcbiAgICAgIDE1NSxcbiAgICAgIDI0NyxcbiAgICAgIDEzMCxcbiAgICAgIDEyNixcbiAgICAgIDEzMSxcbiAgICAgIDM2LFxuICAgICAgMTQ3LFxuICAgICAgMjIzLFxuICAgICAgMjMxLFxuICAgICAgMTUzLFxuICAgICAgMTUwLFxuICAgICAgMTQ5LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxODAsXG4gICAgICAxODksXG4gICAgICAyMzIsXG4gICAgICAxMixcbiAgICAgIDE0LFxuICAgICAgMjUsXG4gICAgICAyMzMsXG4gICAgICAxODAsXG4gICAgICAxODcsXG4gICAgICAxNjcsXG4gICAgICAxMTksXG4gICAgICAxMjksXG4gICAgICAyNTUsXG4gICAgICAzMixcbiAgICAgIDE3NixcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDE5MSxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3L21Qc0RFT2ZLeWJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicmloSEJhcmVvb0RWWW1zVTFWU04wc1QxWDVVVzVZTTViOFk5NXNXQ1Jtcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmZ0RwMmx3OHRMWTJFbnV5VzVPaEtiUmxpSzBzWDVVdmZBQmVycDFKRGM3aU9IaXg0VXJSMm5IRU9qT2JxZkxJK2dueGF5a0xXVGU1NXV4bkd3cHdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3OTdKMVVLZnZoV2x5SE5MNzh2VzhmOE1kbFZIMVhGRE1iNm4zVnJiVjVybGw5eDhJaDZLRXhzcFdDeFppVXlWd0oxTEhxTkV1dDBob256YVJCQmVnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwMjM2NzM2OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTExNTM5ODA1MzA3ODU6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMjM2NzM2OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODcwMjUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzNhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHM2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZc3daaXdJcG14MEF3VWlqTFViVXJqWG1rdXJneUdPc2RTeGlRckVPN2swPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjM2NjU2NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg3MDE3NTY3NlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ mr.bluepips²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "mr.bluepips",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ceo_nderitu",
  ownername:process.env.OWNER_NAME|| "ceo_nderitu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
