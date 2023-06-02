const { SlashCommandBuilder, EmbedBuilder, ChannelType} = require('discord.js');
const schedule = require('node-schedule');
const { goodMorningTitles, goodAfternoonTitles, goodNightTitles } = require('../../embedNeeds/greetingEmbeds/embedTitles');
const { goodMorningDescriptions, goodAfternoonDescriptions, goodNightDescriptions } = require('../../embedNeeds/greetingEmbeds/embedDescription');
const { goodMorningImages, goodAfternoonImages, goodNightImages } = require('../../embedNeeds/greetingEmbeds/embedImages');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('all-greetings')
    .setDescription(
      'Automatically configure all the greetings, the greetings will be send at 7 AM, 12 PM and 7 PM'
    )
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription(
          'Choose the channel where you want all the greetings to be send'
        )
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('timezone')
        .setDescription('Select your city or the nearest where you live')
        .addChoices(
          { name: 'Bogota', value: 'America/Bogota' },
          { name: 'London', value: 'Europe/London' },
          { name: 'Madrid', value: 'Europe/Madrid' },
          { name: 'Paris', value: 'Europe/Paris' },
          { name: 'Berlin', value: 'Europe/Berlin' },
          { name: 'Athens', value: 'Europe/Athens' },
          { name: 'Kiev', value: 'Europe/Kiev' },
          { name: 'Moscow', value: 'Europe/Moscow' },
          { name: 'New Delhi', value: 'Asia/New_Delhi' },
          { name: 'Mumbai', value: 'Asia/Mumbai' },
          { name: 'Beijing', value: 'Asia/Beijing' },
          { name: 'Hong Kong', value: 'Asia/Hong_Kong' },
          { name: 'Tokyo', value: 'Asia/Tokyo' },
          { name: 'Kyoto', value: 'Asia/Kyoto' },
          { name: 'Sydney', value: 'Oceania/Sydney' },
          { name: 'Los Angeles', value: 'America/Los_Angeles' },
          { name: 'San Francisco', value: 'America/San_Francisco' },
          { name: 'Vancouver', value: 'America/Vancouver' },
          { name: 'New York', value: 'America/New_York' },
          { name: 'Miami', value: 'America/Miami' },
          { name: 'Toronto', value: 'America/Toronto' },
          { name: 'Chicago', value: 'America/Chicago' },
          { name: 'Denver', value: 'America/Denver' },
          { name: 'Buenos Aires', value: 'America/Buenos_Aires' },
          { name: 'Santiago', value: 'America/Santiago' }
        )
        .setRequired(true)
    ),

  async execute(interaction) {

    const channel = interaction.options.getChannel('channel');
    const timezone = interaction.options.getString('timezone');

    interaction.reply(`From now on all the greetings will be send on ${channel} at the local hour of ${timezone}`);

    const embedSuccessfulConfiguration = new EmbedBuilder()
      .setAuthor({
        name: interaction.client.user.tag,
        iconURL: interaction.client.user.displayAvatarURL(),
        url: 'https://shorturl.at/hnuT8'
      })
      .setTitle('All greetings command has been configured successfully')
      .setDescription(`From now on the ***All the greetings*** will be send to this channel everyday at 7 AM, 12 PM and 7 PM at the local hour of ${timezone}`)
      .setColor('Random')
      .setTimestamp()
      .setFooter({
        text: `Service provided by ${interaction.client.user.tag}`,
        iconURL: interaction.client.user.displayAvatarURL(),
      });

    channel.send({ embeds: [embedSuccessfulConfiguration]});

    const scheduleSendGoodMorningGreeting = schedule.scheduleJob(
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

        const goodMorningGreeting = new EmbedBuilder()
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

        channel.send({ embeds: [goodMorningGreeting] });
      }
    );

    const scheduleSendGoodAfternoonGreeting = schedule.scheduleJob({
      hour: 12,
      minute: 0,
      tz: timezone,
    },
    function () {
      
      const randomTitle = Math.floor(Math.random() * goodAfternoonTitles.length);
      const chosenTitle = goodAfternoonTitles[randomTitle];

      const randomDescription = Math.floor(Math.random() * goodAfternoonDescriptions.length);
      const chosenDescription = goodAfternoonDescriptions[randomDescription];

      const randomImage = Math.floor(Math.random() * goodAfternoonImages.length);
      const chosenImage = goodAfternoonImages[randomImage];

      const goodAfternoonGreeting = new EmbedBuilder()
        .setAuthor({
          name: interaction.client.user.tag,
          iconURL: interaction.client.user.displayAvatarURL(),
          url: 'https://shorturl.at/hnuT8'
        })
        .setTitle(chosenTitle)
        .setDescription(chosenDescription)
        .setImage(chosenImage)
        .setColor('Random')
        .setTimestamp()
        .setFooter({
          text: `Greeting sent by ${interaction.client.user.tag}`,
          iconURL: interaction.client.user.displayAvatarURL()
        });
      
      channel.send({ embeds: [goodAfternoonGreeting]});
    }
    );

    const scheduleSendGoodNightGreeting = schedule.scheduleJob({
      hour: 19,
      minute: 0,
      tz: timezone,
    },
    function () {
      
      const randomTitle = Math.floor(Math.random() * goodNightTitles.length);
      const chosenTitle = goodNightTitles[randomTitle];

      const randomDescription = Math.floor(Math.random() * goodNightDescriptions.length);
      const chosenDescription = goodNightDescriptions[randomDescription];

      const randomImage = Math.floor(Math.random() * goodNightImages.length);
      const chosenImage = goodNightImages[randomImage];

      const goodNightGreeting = new EmbedBuilder()
        .setAuthor({
          name: interaction.client.user.tag,
          iconURL: interaction.client.user.displayAvatarURL(),
          url: 'https://shorturl.at/hnuT8'
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

      channel.send({ embeds: [goodNightGreeting]});
    });
  }
};