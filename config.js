const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163707678";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_42_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqMThrSFlXME9NTlJqN2VIbGhQUEVQQXBuelpTZ3FCOTU4S2VKWWhTVzdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjM3MDc2NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2RjcxOEE0NEY4OURBNkIxMkRGOTM5MTQzMzZEMEYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU5NzM1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5aE1xb0h1cVNyU0VsNHB6UlJoa2dRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4MDg5ZDgwLWJkMjAtNGYzNS1hZDQ3LTIwYjg0ODRmNzJjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxNzgsXG4gICAgICAyNDMsXG4gICAgICAyNDYsXG4gICAgICAxMDAsXG4gICAgICAyMTIsXG4gICAgICAxNDUsXG4gICAgICA0OSxcbiAgICAgIDkwLFxuICAgICAgMzUsXG4gICAgICAzNixcbiAgICAgIDIzNSxcbiAgICAgIDE1NSxcbiAgICAgIDE2MSxcbiAgICAgIDE2MyxcbiAgICAgIDcwLFxuICAgICAgMTQ5LFxuICAgICAgMTE2LFxuICAgICAgMjM2LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDIyOSxcbiAgICAgIDYxLFxuICAgICAgMTg2LFxuICAgICAgMTU2LFxuICAgICAgMjU1LFxuICAgICAgMTc2LFxuICAgICAgMjQ3LFxuICAgICAgMjQ2LFxuICAgICAgMCxcbiAgICAgIDEzMyxcbiAgICAgIDIyMCxcbiAgICAgIDEwOCxcbiAgICAgIDE5MixcbiAgICAgIDI0MyxcbiAgICAgIDUzLFxuICAgICAgMTY4LFxuICAgICAgMTU2LFxuICAgICAgMjQ3LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNZVkdaOE5EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNzA3Njc4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3Nzc1MDg3MjU1NjM5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGpUdTk0QkVPZjJ1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHcG05SUIrd0ZUaDJ3TFRKclNURUZYdnZsYzU5MndyR2FyVm82VkxSQVVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBLSHp4ZFlkSm1tWFRlb3E1WEl4YWtLa2MvSTRqd1p2SFhMUEs3ZExIZjBQL3MyQmFQVGtZejA2bmVja1kxUk10SUphakRKT2w2cURRd3RwUGtld0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNrMVJJbHczWWxsbnVXN21aRW0zUXE3UGxoY3lWOHBLREJYQzJQN2FaQUtXZG1nbUZ6cWxydlgvOUNvYUV1ZUJ4eUlxUVV5Z2NDYndmNStISWxDeUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM3MDc2Nzg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5NzM1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdYaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1hoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYnh5ZFg3SFYreDZtMXorV09veVpValo4bmxvNXQ1RnBUTlRzRnNydE82ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjY1NDUwNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzYxNTAwODUwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
