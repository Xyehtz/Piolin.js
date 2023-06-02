const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js');
const schedule = require('node-schedule');
const { dailyQuotes } = require('../../embedNeeds/quoteEmbeds/embedQuotes');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('daily-quote')
    .setDescription('Sends a quote from a historical figure, everyday at 2 PM')
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription('Choose the channel where you want the embed to be send')
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

    interaction.reply(`The daily quote will be send everyday on ${channel} at 2 PM ${timezone}`);

    const dailyQuoteSchedule = schedule.scheduleJob(
      {
        hour: 14,
        minute: 0,
        tz: timezone,
      },
      function () {

        const randomQuote = Math.floor(Math.random() * dailyQuotes.length);
        const chosenQuote = dailyQuotes[randomQuote];

        const dailyQuoteEmbed = new EmbedBuilder()
          .setAuthor({
            name: interaction.client.user.tag,
            iconURL: interaction.client.user.displayAvatarURL(),
            url: 'https://shorturl.at/hnuT8',
          })
          .setTitle('Daily quote')
          .setDescription(chosenQuote)
          .setColor('Random')
          .setTimestamp()
          .setFooter({
            text: `Daily quote send by ${interaction.client.user.tag}`,
            iconURL: interaction.client.user.displayAvatarURL(),
          });
        
        channel.send({ embeds: [dailyQuoteEmbed] });
      }
    );
  }
};