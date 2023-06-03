const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChannelType,
} = require('discord.js');
const {
  happyBirthdayTitle,
} = require('../../embedNeeds/celebrationEmbeds/embedTitles');
const {
  happyBirthdayDescription,
} = require('../../embedNeeds/celebrationEmbeds/embedDescription');
const {
  happyBirthdayImages,
} = require('../../embedNeeds/celebrationEmbeds/embedImages');
const schedule = require('node-schedule');
const moment = require('moment');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('happy-birthday')
    .setDescription(
      'Send a happy birthday celebration to the user that you want'
    )
    .addUserOption((option) =>
      option
        .setName('user')
        .setDescription('Choose the user that you want to congratulate')
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription(
          'Choose the channel where you want the message to be send'
        )
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('date')
        .setDescription(
          'Please enter the date, make sure that the format is the following MM-DD'
        )
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('timezone')
        .setDescription('Choose the city of the user or the nearest city')
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
    const user = interaction.options.getUser('user');
    const channel = interaction.options.getChannel('channel');
    const timezone = interaction.options.getString('timezone');
    const date = interaction.options.getString('date');

    const currentYear = moment().year();

    const birthdayDate = moment(`${date}-${currentYear}`, 'MM-DD-YYYY');

    const [month, day] = date.split('-');

    const convertedMonth = parseInt(month) - 1;
    const convertedDay = parseInt(day);

    if (!birthdayDate.isValid()) {
      return interaction.reply({
        content:
          'You entered an invalid date, please try again using a valid date',
        ephemeral: true,
      });
    }

    interaction.reply({
      content: `Happy birthday message has been configured successfully, it will be send on ${date} at 5 PM time ${timezone}, on ${channel} channel celebrating the birthday of ${user}`,
      ephemeral: true,
    });

    const scheduleHappyBirthday = schedule.scheduleJob(
      {
        month: convertedMonth,
        day: convertedDay,
        hour: 17,
        minute: 0,
        tz: timezone,
      },
      function () {
        const randomTitle = Math.floor(
          Math.random() * happyBirthdayTitle.length
        );
        const chosenTitle = happyBirthdayTitle[randomTitle];

        const randomDescription = Math.floor(
          Math.random() * happyBirthdayDescription.length
        );
        const chosenDescription = happyBirthdayDescription[randomDescription];

        const randomImage = Math.floor(
          Math.random() * happyBirthdayImages.length
        );
        const chosenImage = happyBirthdayImages[randomImage];

        const embedHappyBirthday = new EmbedBuilder()
          .setAuthor({
            name: interaction.client.user.tag,
            iconURL: interaction.client.user.displayAvatarURL(),
            url: 'https://shorturl.at/hnuT8',
          })
          .setTitle(chosenTitle)
          .setDescription(
            `${chosenDescription}\n\nHappy birthday ${user} from ${interaction.user}`
          )
          .setImage(chosenImage)
          .setColor('Random')
          .setTimestamp()
          .setFooter({
            text: `Message sent by ${interaction.user.tag} and ${interaction.client.user.tag}`,
            iconURL: interaction.user.displayAvatarURL(),
          });

        channel.send({ embeds: [embedHappyBirthday] });
      }
    );
  },
};
