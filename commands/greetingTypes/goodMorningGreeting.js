const {
  SlashCommandBuilder,
  ChannelType,
  EmbedBuilder,
} = require('discord.js');
const { goodMorningTitles } = require('../../embedNeeds/greetingEmbeds/embedTitles');
const {
  goodMorningDescriptions,
} = require('../../embedNeeds/greetingEmbeds/embedDescription');
const { goodMorningImages } = require('../../embedNeeds/greetingEmbeds/embedImages');
const schedule = require('node-schedule');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('good-morning-greeting')
    .setDescription(
      'Sends an embed with a good morning greeting, everyday at 7 AM'
    )
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription(
          'Select the channel where you want the good morning greeting message to be sent every day'
        )
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('timezone')
        .setDescription('Select your city or the nearest to where you live')
        .addChoices(
          { name: 'Bogota', value: 'America/Bogota' },
          { name: 'London', value: 'Europe/London' },
          { name: 'Madrid', value: 'Europe/Madrid'},
          { name: 'Paris', value: 'Europe/Paris'},
          { name: 'Berlin', value: 'Europe/Berlin'},
          { name: 'Athens', value: 'Europe/Athens'},
          { name: 'Kiev', value: 'Europe/Kiev'},
          { name: 'Moscow', value: 'Europe/Moscow'},
          { name: 'New Delhi', value: 'Asia/New_Delhi'},
          { name: 'Mumbai', value: 'Asia/Mumbai'},
          { name: 'Beijing', value: 'Asia/Beijing'},
          { name: 'Hong Kong', value: 'Asia/Hong_Kong'},
          { name: 'Tokyo', value: 'Asia/Tokyo'},
          { name: 'Kyoto', value: 'Asia/Kyoto'},
          { name: 'Sydney', value: 'Oceania/Sydney'},
          { name: 'Los Angeles', value: 'America/Los_Angeles'},
          { name: 'San Francisco', value: 'America/San_Francisco'},
          { name: 'Vancouver', value: 'America/Vancouver'},
          { name: 'New York', value: 'America/New_York'},
          { name: 'Miami', value: 'America/Miami'},
          { name: 'Toronto', value: 'America/Toronto'},
          { name: 'Chicago', value: 'America/Chicago'},
          { name: 'Denver', value: 'America/Denver'},
          { name: 'Buenos Aires', value: 'America/Buenos_Aires'},
          { name: 'Santiago', value: 'America/Santiago'}
        )
        .setRequired(true)
    ),

  async execute(interaction) {
    
    const channel = interaction.options.getChannel('channel');
    const timezone = interaction.options.getString('timezone');

    interaction.reply(
      `From now on all the good morning greetings will be send on ${channel} at the local hour of ${timezone}`
    );

    const embedSuccessfulConfiguration = new EmbedBuilder()
      .setAuthor({
        name: interaction.client.user.tag,
        iconURL: interaction.client.user.displayAvatarURL(),
        url: 'https://shorturl.at/hnuT8',
      })
      .setTitle('Good morning greetings command has been configured successfully')
      .setDescription(
        `From now on the ***Good morning greetings*** will be send to this channel everyday at 7 AM at the local hour of ${timezone}`
      )
      .setColor('Random')
      .setTimestamp()
      .setFooter({
        text: `Service provided by ${interaction.client.user.tag}`,
        iconURL: interaction.client.user.displayAvatarURL(),
      });

    channel.send({ embeds: [embedSuccessfulConfiguration] });

    const scheduleSend = schedule.scheduleJob(
      {
        hour: 7,
        minute: 0,
        tz: timezone,
      },
      function () {
        const randomTitle = Math.floor(
          Math.random() * goodMorningTitles.length
        );
        const chosenTitle = goodMorningTitles[randomTitle];

        const randomDescription = Math.floor(
          Math.random() * goodMorningDescriptions.length
        );
        const chosenDescription = goodMorningDescriptions[randomDescription];

        const randomImage = Math.floor(
          Math.random() * goodMorningImages.length
        );
        const chosenImage = goodMorningImages[randomImage];

        const embed = new EmbedBuilder()
          .setAuthor({
            name: interaction.client.user.tag,
            iconURL: interaction.client.user.displayAvatarURL(),
            url: 'https://shorturl.at/hnuT8',
          })
          .setTitle(chosenTitle)
          .setDescription(chosenDescription)
          .setImage(chosenImage)
          .setColor('Random')
          .setTimestamp()
          .setFooter({
            text: `Greeting sent by ${interaction.client.user.tag}`,
            iconURL: interaction.client.user.displayAvatarURL(),
          });

        channel.send({ embeds: [embed] });
      }
    );
  },
};