const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder() 
    .setName('ping') 
    .setDescription('Muestra la latencia del bot'), 

  run: async ({ interaction, client, handler }) => {
    
    const startTimestamp = Date.now(); 
    const reply = await interaction.reply({ content: 'loading', fetchReply: true }); 
    const ping = Math.abs(Date.now() -
    interaction.editReply(`Latencia: Latencia del Cliente: ${ping}ms`); 
  },
  devOnly: true,
};
