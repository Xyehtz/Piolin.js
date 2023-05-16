// Imports all the used libraries used in this project
require('dotenv').config();
const { Client, Intents, ActivityType, IntentsBitField, Collection } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path');
const WebSocket = require('ws');

// Declare all the intents of the bot
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Declare all the status, both the name and the type
let status = [
  {
    name: 'Buscando imagenes de buenos dias',
    type: ActivityType.Playing,
  },
  {
    name: 'Buscando imagenes de buenas tardes',
    type: ActivityType.Playing,
  },
  {
    name: 'Buscando imagenes de buenas noches',
    type: ActivityType.Playing,
  },
];

// Randomly selects a status and changes it every 5 minutes
client.on('ready', c => {
  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 300000);
});

// This will allow the onMessage file to send the messages
const messageCreate = require('../events/onMessage');
client.on('messageCreate', messageCreate);

// Console logs all the messages send in the servers where the bot is online
client.on('messageCreate', message => {
  console.log(message.content);
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, '..', 'commands'),
  //testServer: process.env.GUILD_ID,
  eventsPath: path.join(__dirname, '..', 'events'),
  validationsPath: path.join(__dirname, '..', 'validations'),
});

client.login(process.env.TOKEN);
