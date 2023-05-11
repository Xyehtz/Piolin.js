const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder() //this imports the slashcommandbuilder
    .setName('ping') //in this case we asign the name of the comand, in this case it is going to be ping, thus in discord, to use this were going to type /ping
    .setDescription('Muestra la latencia del bot'), //here is the description of the command

  run: async ({ interaction, client, handler }) => {
    //the run function will run everything inside of it
    const startTimestamp = Date.now(); // timestamp has the value of the date in which the command was typed
    const reply = await interaction.reply({ content: 'loading', fetchReply: true }); //here we have an early answer from the bot which is loading, thus not leaving the user waiting with no explanation
    const ping = Math.abs(Date.now() - startTimestamp); //now that some time has passed using math.abs we obtain the ping which is the value resulting of date.now minus starttimestamp
    interaction.editReply(`Latencia: Latencia del Cliente: ${ping}ms`); //here the bot anwers with the ping
  },
  devOnly: true,
};
