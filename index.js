const SteemBot = require('steem-bot').default
const fs = require('fs');

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

const username = config.username;
const postingKey = config.posting_key;
const discord_token = config.discord_token;

const targetUsers = ['cloh76', 'cloh76.witness', 'rodeo670']; // put as many users as you want in this array or omit the argument for all users
const bot = new SteemBot({username, postingKey});

bot.onComment(targetUsers, handleComment);

function handleComment(data, responder) {
  console.log('user %s commented!', data.author);
  console.log(data.body);

  responder.upvote(); // 100% upvote

}


bot.start();