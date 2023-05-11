module.exports = message => {
  if (message.author.bot) {
    return;
  }

  if (message.content.toLowerCase().includes('iseta')) {
    message.reply('Sabias que Iseta es un');
  }
};
