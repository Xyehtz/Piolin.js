const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  // Here we declare the name of the command and the description
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('ping') 
    .setDescription('Muestra la latencia del bot'), //Shows the bot latency

  run: async ({ interaction, client, handler }) => {
    const startTimestamp = Date.now(); 
    const reply = await interaction.reply({
      content: 'loading',
      fetchReply: true,
    }); //here we have an early answer from the bot which is loading, thus not leaving the user waiting with no explanation
    const ping = Math.abs(Date.now() - startTimestamp); // Now that some time has passed using math.abs we obtain the ping which is the value resulting of date.now minus starttimestamp
    interaction.editReply(`Latencia: Latencia del Cliente: ${ping}ms`); // Here the bot edits the "loading" message sending a new message, Latency: Client Latency in English
  },
  devOnly: true, // This declares that this command is only for the developer of the bot
};
