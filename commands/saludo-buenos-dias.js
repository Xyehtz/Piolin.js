// Import all the necesary files and libraries for this command
const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports = {
  // Here we declare the name of the command and the description
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenos-dias') // Good morning greetings in English
    .setDescription(
      'Envía un saludo de Buenos días, todos los dias a las 7 AM' // Sends a good morning greeting, everyday at 7 AM
    ),

  run: async ({ interaction, client, handler }) => {
    const task = schedule.scheduleJob( // The command will run everyday at 7 AM colombian time using node-schedule
      { hour: 7, minute: 0, tz: 'America/Bogota' },
      function () {
        // The command imports the good morning images links and randomly selects one that will be stored inside "buenosDias"
        const buenosDias = require('../embedNeeds/saludo-buenos-dias/embedImages');
        const imagenRandom = Math.floor(Math.random() * buenosDias.length);
        const imagenSeleccionada = buenosDias[imagenRandom];

        // The command imports the good morning description text and randomly selects one that will be stored inside "refranesBuenosDias"
        const refranesBuenosDias = require('../embedNeeds/saludo-buenos-dias/embedDescription');
        const refranRandom = Math.floor(
          Math.random() * refranesBuenosDias.length
        );
        const refranSeleccionado = refranesBuenosDias[refranRandom];

        // The command imports the good morning titles and randomly selects one that will be stored inside "titulosBuenosDias"
        const titulosBuenosDias = require('../embedNeeds/saludo-buenos-dias/embedTitle');
        const tituloRandom = Math.floor(
          Math.random() * titulosBuenosDias.length
        );
        const tituloSeleccionado = titulosBuenosDias[tituloRandom];

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
            'https://cdn.shopify.com/s/files/1/0077/2892/2688/files/MicrosoftTeams-image_8.png?height=628&pad_color=ffffff&v=1653605461&width=1200'
          )
          .setImage(imagenSeleccionada); // Set as image the random images

        // Declare where the command will be send, in this case the command will be send where the user used the command
        const channel = interaction.channel;
        channel.send({ embeds: [embed] });
      }
    );
  },
};