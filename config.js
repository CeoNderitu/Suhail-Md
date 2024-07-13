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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_12_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFnWHFpdEwwQXVPMWZ2cUQwdUN5UE9UcllPS0hFZUVGS3l3QkNCeW02dE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBzTFlWZWZtUnd5VmpPQjNJZ1ptb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDYwYTg0YWEtYjkxMi00ZGE2LWIwNzItZGM4ZjE5OTc0NDYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDU2LFxuICAgICAgMzIsXG4gICAgICAyMTksXG4gICAgICA1NyxcbiAgICAgIDM3LFxuICAgICAgMTAzLFxuICAgICAgMjQ5LFxuICAgICAgNDQsXG4gICAgICAyMDcsXG4gICAgICA4OCxcbiAgICAgIDIyMixcbiAgICAgIDE4NCxcbiAgICAgIDIwLFxuICAgICAgMTgzLFxuICAgICAgMjA4LFxuICAgICAgMTg3LFxuICAgICAgNjcsXG4gICAgICAzOSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjEwLFxuICAgICAgOTksXG4gICAgICAxMTYsXG4gICAgICAyNDgsXG4gICAgICAxMTksXG4gICAgICA3NCxcbiAgICAgIDc2LFxuICAgICAgOTksXG4gICAgICAyMyxcbiAgICAgIDE4NSxcbiAgICAgIDIwNSxcbiAgICAgIDE1MyxcbiAgICAgIDIwMixcbiAgICAgIDI0OCxcbiAgICAgIDE2OSxcbiAgICAgIDY1LFxuICAgICAgMTIyLFxuICAgICAgMTU3LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEtla3BZRUVJaUt5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtc05XbEpIM0RjajlCTlhzK1QzZHNXRW9XTmw1RWt0YmdSb0JkYm1hM0Y4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIml1OWVzV0Jpd1MzR2RSc09xWnFJbUhmT1Z1VWNGOUk5TDJ6TklCTXNrNzd3WWo3aE5iMzVXNnpIOUYrN2h2TytFZVY3UThuaUxyZmNXbXBQYmprcEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImY2T2VqUnBpcWtrdmFOSnJUeU1TalZ1MDR1ejkwcnhySTRDbTZibGpnSG5PclpZaUI5YmFtUW5LTkZTKzNtM1NJRGpibitES0ZPdWptRkVibWlTMEN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzUxMDcwODgwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDLkUuTyBOZGVyaXR1ICNBZmZpbml0eV9Hcm91cF9LZW55YVwiLFxuICAgIFwibGlkXCI6IFwiNDY0MzMyNzczNTQxNjk6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1MTA3MDg4MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODYxOTY0XG59Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
