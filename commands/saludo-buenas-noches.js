// Import all the necesary files and libraries for this command
const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports = {
  // Here we declare the name of the command and the description
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenas-noches') // Good night greeting in English
    .setDescription(
      'Envía un saludo de Buenas noches, todos los dias a las 7 PM' // Sends a good night greeting everyday at 7 PM
    ),

  run: async ({ interaction, client, handler }) => {
    const task = schedule.scheduleJob( // The command will run everyday at 7 PM colombian time using node-schedule
      { hour: 19, minute: 0, tz: 'America/Bogota' },
      function () {
        // The command imports the good morning images links and randomly selects one that will be stored inside "buenasNoches"
        const buenasNoches = require('../embedNeeds/saludo-buenas-noches/embedImages');
        const imagenRandom = Math.floor(Math.random() * buenasNoches.length);
        const imagenSeleccionada = buenasNoches[imagenRandom];

        // The command imports the good morning images links and randomly selects one that will be stored inside "refranesbuenasNoches"
        const refranesbuenasNoches = require('../embedNeeds/saludo-buenas-noches/embedDescription');
        const refranRandom = Math.floor(
          Math.random() * refranesbuenasNoches.length
        );
        const refranSeleccionado = refranesbuenasNoches[refranRandom];

        // The command imports the good morning images links and randomly selects one that will be stored inside "titulosbuenasNoches"
        const titulosbuenasNoches = require('../embedNeeds/saludo-buenas-noches/embedTitle');
        const tituloRandom = Math.floor(
          Math.random() * titulosbuenasNoches.length
        );
        const tituloSeleccionado = titulosbuenasNoches[tituloRandom];

        // Create a new embed where all the random images and text will be used
        const embed = new EmbedBuilder()
          .setTitle(tituloSeleccionado) // Set as title one of the random titles
          .setAuthor({
            name: client.user.tag,
            iconURL: client.user.displayAvatarURL(),
            Url: 'https://www.youtube.com/watch?v=DZtb0MN9Ceg',
          })
          .setFooter({
            text: `Imagen enviada por ${client.user.tag}`,
            iconURL: client.user.displayAvatarURL(),
          })
          .setColor('Random')
          .setDescription(refranSeleccionado) // Set as description the random text
          .setTimestamp()
          .setThumbnail(
            'https://manicmumlife.files.wordpress.com/2015/04/twitter7pm.png'
          )
          .setImage(imagenSeleccionada); // Set as image the random images

        // Declare where the command will be send, in this case the command will be send where the user used the command
        const channel = interaction.channel;
        channel.send({ embeds: [embed] });
      }
    );
  },
};
