//Web Page
const http = require('http');
http.createServer(function (req, res) {
  res.write("無事成功しました。");
  res.end();
}).listen(8080);

//定義系
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;
const prefix = "k#"

//起動設定
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(client.guilds.cache.size + "serversに導入済み | 暇を持て余した神々の遊び", { type: "COMPETING" },{ status: "online" });
});

//Login
client.login(token);

//メッセージ対応
client.on('message', async message =>{
  if (message.author.bot) return;
if (message.content === "にゃーん"){
    message.reply("にゃーん")
      .then(message => console.log("Sent message: " + "にゃーん"))
      .catch(console.error);
    return;
  }
if (message.content === prefix + "ping") {
    message.channel.send(":ping_pong:",
      {embed: {
         title: ":ping_pong:Pong!",
         description: "ただいまのPing値は" + client.ws.ping + "msです。"
      }});
  };
