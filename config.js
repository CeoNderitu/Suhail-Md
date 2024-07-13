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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_13_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJicWJPdHZpTmZEb1AvNkZDTjlyQWdnYUEyVG5ET3JLKzZBVEZSdllsdlM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5S01rbk1HUFR5Q0ZRaDhiLXk4TzVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiODZjMmVjLTQ3N2YtNGUyYS05N2U5LTRmNmJjNDY3NjkwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDI0MSxcbiAgICAgIDg5LFxuICAgICAgMzUsXG4gICAgICAxMDgsXG4gICAgICAxNyxcbiAgICAgIDE5NixcbiAgICAgIDIyOSxcbiAgICAgIDE1OCxcbiAgICAgIDEwNCxcbiAgICAgIDExOCxcbiAgICAgIDE0NyxcbiAgICAgIDE4NCxcbiAgICAgIDE4MixcbiAgICAgIDIyMyxcbiAgICAgIDIyMSxcbiAgICAgIDE2NixcbiAgICAgIDE0MyxcbiAgICAgIDUsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDExNCxcbiAgICAgIDI0OCxcbiAgICAgIDEwNSxcbiAgICAgIDI1MyxcbiAgICAgIDIyOCxcbiAgICAgIDIwNSxcbiAgICAgIDE4NyxcbiAgICAgIDExNyxcbiAgICAgIDE5NCxcbiAgICAgIDE0NCxcbiAgICAgIDE1MyxcbiAgICAgIDc0LFxuICAgICAgMjYsXG4gICAgICA2NCxcbiAgICAgIDcwLFxuICAgICAgOTksXG4gICAgICAyNCxcbiAgICAgIDE1OCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEOHR0TUVFT2pDeWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiREdJSzgwUUpBUjFnVW5rVUxWbFVYcDVTSmFlNnBrdDJFSWVaMEtIVklDTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzT1pQY215bFZubVNXTTE5SXAyM0tSWnJucnR3cEpHV0hhelJ3RjIwbkw5U01hTDZkYkR4RktWd20wZG1BUFV4VVFJdytmZ2pCTmRlVEZXNnZMRDNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZVmxUN0xLOGE0ZHFqR3ZuMnp0c2ZFdFlhUlJSbmkzckdyclNQNktod1lpM2RsaWpwUEpvMm5mWmJ3cER0c0crUG5LNDFIOUg4ZTZpTEMyWERPdjlCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwMjM2NzM2OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTExNTM5ODA1MzA3ODU6M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMjM2NzM2OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NjkyMjlcbn0iCn0=" ;


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
