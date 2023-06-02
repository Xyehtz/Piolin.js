const { Events } = require('discord.js');

module.exports = {
  // Console logs when the bot is ready
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`${client.user.tag} is ready`);
  },
};
