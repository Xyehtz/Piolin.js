const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: false,

  execute(client) {
    const status = [
      {
        name: 'Searching for good morning greeting images',
        type: ActivityType.Playing,
      },
      {
        name: 'Searching for good evening greeting images',
        type: ActivityType.Playing,
      },
      {
        name: 'Searching for good night greeting images',
        type: ActivityType.Playing,
      },
    ];

    setInterval(() => {
      let random = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[random]);
    }, 300000);
  }
};