const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');
const schedule = require('node-schedule');
const moment = require('moment-timezone');

const buenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedImages');
const imagenRandom = Math.floor(Math.random() * buenasTardes.length);
const imagenSeleccionada = buenasTardes[imagenRandom];

const refranesbuenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedDescription');
const refranRandom = Math.floor(Math.random() * refranesbuenasTardes.length);
const refranSeleccionado = refranesbuenasTardes[refranRandom];

const titulosbuenasTardes = require('../embedNeeds/saludo-buenas-tardes/embedTitle');
const tituloRandom = Math.floor(Math.random() * titulosbuenasTardes.length);
const tituloSeleccionado = refranesbuenasTardes[tituloRandom];

module.exports = {
  deleted: false,
  data: new SlashCommandBuilder()
    .setName('saludo-buenas-tardes')
    .setDescription('Envia un saludo de Buenas tardes, todos los dias a las 12 PM'),

  run: async ({ interaction, client, handler }) => {
    const task = schedule.scheduleJob({ hour: 12, minute: 0, tz: 'America/Bogota' }, function () {
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
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/12pm.svg/1399px-12pm.svg.png')
        .setImage(imagenSeleccionada);

      const channel = interaction.channel;
      channel.send({ embeds: [embed] });
    });
  },
};
