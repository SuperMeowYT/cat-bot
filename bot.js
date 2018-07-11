var Discord = require("discord.js");
var prefix = "с!";
var client = new Discord.Client();

client.on("ready", () => {
  console.log("cat bot loaded");
});

client.login(process.env.BOT_TOKEN);
