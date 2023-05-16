// Import all the necesary files and libraries for this command
const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports = {
  // Here we declare the name of the command and the description
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenas-tardes') // Good evening greeting in English
    .setDescription(
      'Envia un saludo de Buenas tardes, todos los dias a las 12 PM' // Sends a good evening greeting everyday at 12 PM
    ),

  run: async ({ interaction, client, handler }) => {
    const task = schedule.scheduleJob( // The command will run everyday at 12 PM colombian time using node-schedule
      { hour: 12, minute: 0, tz: 'America/Bogota' },
      function () {
        // The command imports the good morning images links and randomly selects one that will be stored inside "buenasTardes"
        const buenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedImages');
        const imagenRandom = Math.floor(Math.random() * buenasTardes.length);
        const imagenSeleccionada = buenasTardes[imagenRandom];

        // The command imports the good morning images links and randomly selects one that will be stored inside "refranesBuenasTardes"
        const refranesbuenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedDescription');
        const refranRandom = Math.floor(
          Math.random() * refranesbuenasTardes.length
        );
        const refranSeleccionado = refranesbuenasTardes[refranRandom];

        // The command imports the good morning images links and randomly selects one that will be stored inside "titulosbuenasTardes"
        const titulosbuenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedTitle');
        const tituloRandom = Math.floor(
          Math.random() * titulosbuenasTardes.length
        );
        const tituloSeleccionado = titulosbuenasTardes[tituloRandom];

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
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/12pm.svg/1399px-12pm.svg.png'
          )
          .setImage(imagenSeleccionada); // Set as image the random images

        // Declare where the command will be send, in this case the command will be send where the user used the command
        const channel = interaction.channel;
        channel.send({ embeds: [embed] });
      }
    );
  },
};
