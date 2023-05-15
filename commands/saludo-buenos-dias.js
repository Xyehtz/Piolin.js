const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenos-dias')
    .setDescription(
      'Envia un saludo de Buenos dias, todos los dias a las 7 AM'
    ),

  run: async ({ interaction, client, handler }) => {
    const task = schedule.scheduleJob(
      { hour: 7, minute: 0, tz: 'America/Bogota' },
      function () {

        const buenosDias = require('../embedNeeds/saludo-buenos-dias/embedImages');
        const imagenRandom = Math.floor(Math.random() * buenosDias.length);
        const imagenSeleccionada = buenosDias[imagenRandom];

        const refranesBuenosDias = require('../embedNeeds/saludo-buenos-dias/embedDescription');
        const refranRandom = Math.floor(
          Math.random() * refranesBuenosDias.length
        );
        const refranSeleccionado = refranesBuenosDias[refranRandom];

        const titulosBuenosDias = require('../embedNeeds/saludo-buenos-dias/embedTitle');
        const tituloRandom = Math.floor(
          Math.random() * titulosBuenosDias.length
        );
        const tituloSeleccionado = refranesBuenosDias[tituloRandom];
        
        const embed = new EmbedBuilder()
          .setTitle(tituloSeleccionado)
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
          .setDescription(refranSeleccionado)
          .setTimestamp()
          .setThumbnail(
            'https://cdn.shopify.com/s/files/1/0077/2892/2688/files/MicrosoftTeams-image_8.png?height=628&pad_color=ffffff&v=1653605461&width=1200'
          )
          .setImage(imagenSeleccionada);

        const channel = interaction.channel;
        channel.send({ embeds: [embed] });
      }
    );
  },
};
