const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenas-noches')
    .setDescription(
      'Envia un saludo de Buenas noches, todos los dias a las 7 PM'
    ),

  run: async ({ interaction, client, handler }) => {

    const task = schedule.scheduleJob(
      { hour: 19, minute: 0, tz: 'America/Bogota' },
      function () {

        const buenasNoches = require('../embedNeeds/saludo-buenas-noches/embedImages');
        const imagenRandom = Math.floor(Math.random() * buenasNoches.length);
        const imagenSeleccionada = buenasNoches[imagenRandom];

        const refranesbuenasNoches = require('../embedNeeds/saludo-buenas-noches/embedDescription');
        const refranRandom = Math.floor(
          Math.random() * refranesbuenasNoches.length
        );
        const refranSeleccionado = refranesbuenasNoches[refranRandom];

        const titulosbuenasNoches = require('../embedNeeds/saludo-buenas-noches/embedTitle');
        const tituloRandom = Math.floor(
          Math.random() * titulosbuenasNoches.length
        );
        const tituloSeleccionado = refranesbuenasNoches[tituloRandom];

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
            'https://manicmumlife.files.wordpress.com/2015/04/twitter7pm.png'
          )
          .setImage(imagenSeleccionada);

        const channel = interaction.channel;
        channel.send({ embeds: [embed] });
      }
    );
  },
};
