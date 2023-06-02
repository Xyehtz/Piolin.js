const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Sends an embed with all the commands'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: interaction.client.user.tag,
        iconURL: interaction.client.user.displayAvatarURL(),
      })

      .setTitle('Command list')
      .setDescription(
        `These are the commands of ${interaction.client.user.tag}.\n
      **/all-greetings**: This command will automatically send all the greetings at 7 AM, 12 PM and 7 PM.\n
      **/good-morning-greeting**: This command will automatically send a morning greeting everyday at 7 AM.\n
      **/good-afternoon-greeting**: This command will automatically send an afternoon greeting everyday at 12 PM.\n
      **/good-night-greeting**: This command will automatically send a night greeting everyday at 7 PM.\n
      **/daily-quote**: Sends a quote from a historical figure, everyday at 2PM.\n
      **/happy-birthday**: Sends a happy birthday embed, you can choose the date, the user and even the timezone.\n
      **/ping**: Sends the latency of the bot, this commands lets you know if the bot is working, you need the following permissions to use this command.\n
      `)
      .setColor('Random')
      .setTimestamp()

      .setFooter({
        text: `Message send by ${interaction.client.user.tag}`,
        iconURL: interaction.client.user.displayAvatarURL(),
      });
    await interaction.reply({ embeds: [embed] });
  },
};
